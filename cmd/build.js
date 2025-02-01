import fs from 'fs'

const template_path = "../src/template/template.html"
const json_path = "../json/"
const css_path = "../src/css/"
const js_path = "../src/js/"
const html_path = "../index.html"
const dist_path = "../dist/"

import minify from '@node-minify/core'
import uglifyES from '@node-minify/uglify-es'
import cleanCSS from '@node-minify/clean-css'

fs.readFile(template_path,'utf-8',(err,data)=>{
    if (err) {
        console.log(err)
        return
    } else {
        build(data)
    }
})

function build(data) {
    let css_xml = "",js_xml = "<script src=\"scripts/3rdparty/i18nextify.min.js\"></script><script src=\"scripts/3rdparty/hammer.min.js\"></script>"
    let css_content = "", js_content = ""
    let data1 = fs.readFileSync(json_path+"css_list.json",'utf-8')
    data1 = JSON.parse(data1)
    for (let i=0; i<data1.length; i++) {
        css_content += fs.readFileSync(css_path+data1[i]+".css",'utf-8')
    }
    let data2 = fs.readFileSync(json_path+"js_list.json",'utf-8')
    data2 = JSON.parse(data2)
    for (let i=0; i<data2.length; i++) {
        js_content += fs.readFileSync(js_path+data2[i]+".js",'utf-8')+String.raw`
        `
    }

    minify({
        compressor: cleanCSS,
        content: css_content,
        options: {
          advanced: true,
          aggressiveMerging: true
        }
    }).catch((err)=>{console.log(err)}).then((min) => {
        fs.writeFileSync(dist_path+"index.css",min)
    })
    minify({
        compressor: uglifyES,
        content: js_content.toString(),
        options: {
            warnings: true,
            mangle: {
              toplevel: true
            },
            compress: {
              toplevel: true
            }
        }
    }).catch((err)=>{console.log(err)}).then((min) => {
        fs.writeFileSync(dist_path+"index.js",min)
    })

    css_xml += `<link rel="stylesheet" href="dist/index.css">`
    js_xml += `<script src="dist/index.js"></script><script src="scripts/beacon/home.js"></script><script src="scripts/beacon/core.min.js"></script>`

    data = data.replace("<!--css part-->", css_xml)
    data = data.replace("<!--script part-->", js_xml)
    fs.writeFileSync(html_path,data)
}