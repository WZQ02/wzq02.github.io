function createxmlwindow(name,size,isdrag,allowfscr,src_dom,title,exec) {
    createwindow("xml",1,size,1,isdrag,allowfscr,src_dom)
    let req = new XMLHttpRequest()
    req.open("get", "xml/"+name+".xml")
    req.send(null)
    req.onload = () => {
        if (req.status == 200) {
            renderxmlwindow(req.responseText,title,exec)
        } else {
            renderxmlwindow("<h2>没有找到指定的文档……(ﾟДﾟ≡ﾟдﾟ)!?</h2>")
        }
    }
}
function renderxmlwindow(content,t,e,forpage) {
    let cur
    const inn = document.createElement("div")
    inn.className = "wn_text"
    if (forpage) {
        cur = document.getElementById("xmlpage")
        inn.className += " p3"
    } else {
        cur = document.getElementsByClassName("window")[0]
    }
    if (t) {
        content = "<h1>"+t+"</h1>"+content
    }
    inn.innerHTML = content
    cur.appendChild(inn)
    eval(e)
}