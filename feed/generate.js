import fs from 'fs'
import marked from "../scripts/thirdparty/marked.min.js"
const md_path = '../md/'
const json_path = '../json/'
const feed_path = '../feed/'

let md_list = {}

//读取json目录下的md_tags，获取文章列表
fs.readFile(json_path+'md_tags.json','utf-8',(err,data)=>{
    if (err) {
        console.log(err)
        return
    } else {
        md_list = JSON.parse(data)
        generate_items()
    }
})

//为每篇文章生成item
function generate_items() {
    let items = ''
    for (let i in md_list) {
        //读取对应的markdown文件
        try {
            const data = fs.readFileSync(md_path+i+'.md','utf-8')
            const date_unfmt = new Date(md_list[i]["date"])
            const date = timeFormater(date_unfmt)
            const html = marked.parse(data)
            let title,html_fmt
            //获取标题
            if ((html.indexOf("<h1>") != -1) && (html.indexOf("</h1>") != -1)) {
                title = html.slice(html.indexOf("<h1>")+4,html.indexOf("</h1>"))
                html_fmt = html.slice(html.indexOf("</h1>")+5)
            } else {
                html_fmt = html
            }
            const itemdata = `<item>
<title>${title || '无标题'}</title>
<link>https://wzq02.top/#/read/${i}</link>
<pubDate>${date}</pubDate>
<guid>https://wzq02.top/#/read/${i}</guid>
<description><![CDATA[
${html_fmt}
]]></description>
</item>`
            items += itemdata
        } catch(err) {
            console.log(err)
        }
        //写入数据到xml
        const rssdata = `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
<channel>
<title>WZQ'02 的小站 (个人博客)</title>
<link>https://wzq02.top/#/blog</link>
<description>WZQ'02 的小站的博文。（本RSS订阅源仅用于测试，不保证长期有效）</description>
${items}
</channel>
</rss>`
        fs.writeFileSync(feed_path+'index.html',rssdata)
    }
}

//格式化时间格式，引用自 https://www.bilibili.com/read/cv28422920/
function addLeadingZero(num, target) {
    let numStr = num.toString();
    while (numStr.length < target) {
        numStr = "0" + numStr
    }
    return numStr;
}

const weekDayNames = [
    "Sun", "Mon", "Tue",
    "Wed", "Thu", "Fri",
    "Sat",
]
const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec",
]
const weekDay  = date => weekDayNames[date.getDay()]
const month    = date => monthNames[date.getMonth()]
const time     = date => `${addLeadingZero(date.getHours(), 2)}:${addLeadingZero(date.getMinutes(), 2)}:00`;
const timezone = () => {
    const timezone = (-(new Date()).getTimezoneOffset() / 60)
    return (timezone >= 0 ? "+" : "-") + addLeadingZero((timezone * 100).toString(), 4)
}

const timeFormater = date =>
    `${weekDay(date)}, ${date.getDate()} ${month(date)} ${date.getFullYear()} ${time(date)} ${timezone(date)}`