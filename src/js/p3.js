let p3_show,p3_allowdestroy,dxp_a1,dxp_a2,p3_noallownew

function xmlpage(name,func) {
    if (p3_noallownew) {
        return
    }
    if (p3_show) {
        destroyxmlpage(1)
    }
    // to avoid p2 overlay bug.
    clearTimeout(dxp_a2)
    const xp = document.createElement("div")
    xp.id = "xmlpage"
    const xp_cb = document.createElement("div")
    xp_cb.id = "xp_close"
    xp_cb.innerHTML = "<img src='/assets/icons/mdi/close.svg'/>"
    xp.appendChild(xp_cb)
    p3_show = 1
    p3_noallownew = 1
    p3_allowdestroy = 0
    document.body.appendChild(xp)
    xp.style.display = "none"
    setTimeout(()=>{xp.style.display = ""},100)
    // animation for background.
    const main = document.getElementById("main")
    main.style.animation = "pg1go 0.15s cubic-bezier(0.4, 0, 1, 0) 1"
    setTimeout(()=>{
        main.style = "animation:none;opacity:0"
        p3_allowdestroy = 1
        p3_noallownew = 0
    },145)
    // close button action.
    xp_cb.addEventListener('mouseup',() => {
        destroyxmlpage()
    })
    // 激活loadingbar
    loadbarstart()
    // render xml.
    let req = new XMLHttpRequest()
    req.open("get", "/xml/"+name+".xml")
    req.send(null)
    req.onload = () => {
        if (req.status == 200) {
            //去除loadingbar
            loadbarend()
            renderxmlpage(req.responseText,func)
            // reload i18n.
            window.i18nextify.forceRerender()
        } else {
            renderxmlpage("<h2>没有找到指定的文档……(ﾟДﾟ≡ﾟдﾟ)!?</h2>")
        }
    }
}
function destroyxmlpage(instant) {
    if (!p3_allowdestroy) {
        return
    }
    const x = document.getElementById("xmlpage")
    const main = document.getElementById("main")
    if (instant) {
        d()
        e()
        clearTimeout(dxp_a1)
        clearTimeout(dxp_a2)
    } else {
        x.style.animation = "pg2go 0.15s cubic-bezier(0.4, 0, 1, 0) 1"
        dxp_a1 = setTimeout(()=>{d();main.style.animation = "pg1showup 0.35s cubic-bezier(0, 0.4, 0, 1) 1"},145)
        dxp_a2 = setTimeout(()=>{e()},495)
    }
    function d() {
        document.body.removeChild(x)
        p3_show = 0
    }
    function e() {
        main.style = "animation: none"
    }
    router_reset()
}
function renderxmlpage(content,exec) {
    if (p3_show) {
        renderxmlwindow(content,null,exec,1)
    }
}