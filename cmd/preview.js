import fs from 'fs'

const template_path = "../src/template/template.html"
const json_path = "../json/"
const html_path = "../index.html"

fs.readFile(template_path,'utf-8',(err,data)=>{
    if (err) {
        console.log(err)
        return
    } else {
        generate_preview(data)
    }
})

function generate_preview(data) {
    let css_xml = "",js_xml = "<script src=\"/scripts/3rdparty/i18nextify.min.js\"></script><script src=\"/scripts/3rdparty/hammer.min.js\"></script>"
    let data1 = fs.readFileSync(json_path+"css_list.json",'utf-8')
    data1 = JSON.parse(data1)
    for (let i=0; i<data1.length; i++) {
        css_xml += `<link rel="stylesheet" href="/src/css/${data1[i]}.css">`
    }
    let data2 = fs.readFileSync(json_path+"js_list.json",'utf-8')
    data2 = JSON.parse(data2)
    for (let i=0; i<data2.length; i++) {
        js_xml += `<script src="/src/js/${data2[i]}.js"></script>`
    }
    data = data.replace("<!--css part-->", css_xml)
    data = data.replace("<!--script part-->", js_xml)
    fs.writeFileSync(html_path,data)
}