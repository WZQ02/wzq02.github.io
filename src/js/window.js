// Window generator.
function createwindow(id,isclosbtn,size,outlook,isdrag,allowfscr,src_dom) {
    // destroy window when there's one present.
    if (document.getElementsByClassName("window")[0]) {
        destroywindow(1);
    }
    // window background.
    const wn_bg = document.createElement("div")
    wn_bg.className = "wn_bg"
    document.body.appendChild(wn_bg)
    const wn = document.createElement("div")
    wn.className = "window"
    wn.id = id
    const wn_dp = document.createElement("div")
    wn_dp.className = "wn_dragpart"
    wn_dp.style = "position:absolute;width:100%;height:48px"
    wn.appendChild(wn_dp)
    // if window size isn't a list [wxh].
    let wns
    if (!size||typeof(size[1])=="undefined") {
        switch (size) {
            case 1:
                wn.classList.add("medwindow")
                break
            case 2:
                wn.classList.add("largewindow")
                break
            default:
                wn.classList.add("smallwindow")
        }
    // size is a list.
    } else {
        wn.style = wns = `width:${size[0]}px;height:${size[1]}px;`
    }
    // outlook: blur background.
    if (outlook) {
        wn.classList.add("blur_bg")
    }
    // if dragable.
    if (isdrag) {
        wn_dp.addEventListener("mousedown",function(e) {
            wn.style.transitionDuration = "0s";
            let x = e.clientX - wn.offsetLeft;
            let y = e.clientY - wn.offsetTop;
            document.addEventListener("mousemove",movepmpt)
            function movepmpt(f) {
                wn.style.top = (f.clientY - y) +"px";
                wn.style.left = (f.clientX - x) +"px";
            }
            wn_dp.addEventListener("mouseup",() => {
                document.removeEventListener("mousemove",movepmpt)
                wn.style.transition = "";
            })
        });
        wn_dp.addEventListener("touchstart",function(e) {
            wn.style.transitionDuration = "0s";
            let touch = e.targetTouches[0];
            let x = touch.clientX - wn.offsetLeft;
            let y = touch.clientY - wn.offsetTop;
            document.addEventListener("touchmove",movepmpt)
            function movepmpt(f) {
                let touch = f.targetTouches[0];
                wn.style.top = (touch.clientY - y) +"px";
                wn.style.left = (touch.clientX - x) +"px";
            }
            wn_dp.addEventListener("touchend",() => {
                document.removeEventListener("touchmove",movepmpt)
                wn.style.transition = "";
            })
        })
    }
    // if fullscreen is allowed.
    if (allowfscr) {
        let fsb = document.createElement("span")
        let fsb_pic = document.createElement("img")
        fsb.className = "wn_closebtn fsb"
        fsb.onclick = ()=>{window_fullscreen()}
        fsb_pic.src = "/assets/icons/mdi/fullscreen.svg";
        fsb_pic.id = "wn_fsb"
        wn.appendChild(fsb)
        fsb.appendChild(fsb_pic)
    }
    wn_bg.appendChild(wn)
    // window animation.
    // if src_dom exist
    if (src_dom && typeof(src_dom) == "object" && src_dom.getBoundingClientRect().width) {
        // hide window.
        wn.style.opacity = 0
        // get src_dom position and size.
        const wn_init_pos = src_dom.getBoundingClientRect()
        // get window's dest position and size.
        const wn_n_pos = wn.getBoundingClientRect()
        wn.style = `left:${wn_init_pos.left}px;top:${wn_init_pos.top}px;width:${wn_init_pos.width}px;height:${wn_init_pos.height}px;margin:0px;transition:none`
        setTimeout(()=>{wn.style = `left:${wn_n_pos.left}px;top:${wn_n_pos.top}px;width:${wn_n_pos.width}px;height:${wn_n_pos.height}px;margin:0px;transition:.4s cubic-bezier(.45,.15,0,1)`},5)
        setTimeout(()=>{wn.style = wns||""},400)
    } else {
        // use preconfigured animation.
        wn.style.animation = "secshowup2 0.4s cubic-bezier(0, 0.6, 0, 1) 1"
    }
    // show close button or not.
    if (isclosbtn) {
        const btn = document.createElement("span")
        const pic = document.createElement("img")
        btn.className = "wn_closebtn"
        btn.onclick = ()=>{destroywindow()}
        pic.src = "/assets/icons/mdi/close.svg"
        wn.appendChild(btn)
        btn.appendChild(pic)
    }
    wn.focus()
    wn.click()
}
// destroy window.
function destroywindow(instant) {
    const bg = document.getElementsByClassName("wn_bg")[0]
    const wn = document.getElementsByClassName("window")[0]
    function rm() {
        //document.body.removeChild(wn)
        bg.removeChild(wn)
        document.body.removeChild(bg)
    }
    if (instant) {
        rm()
        return
    }
    let anim_vl1 = " 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1"
    wn.style.animation = "secgo"+anim_vl1
    bg.style.animation = "disappear"+anim_vl1
    setTimeout(()=>{rm()},"195")
}
function window_fullscreen() {
    let current = document.getElementsByClassName("window")[0];
    let btn = document.getElementById("wn_fsb");
    if (current.classList.toString().indexOf("fullscreenwindow") != -1) {
        btn.src = "/assets/icons/mdi/fullscreen.svg";
        current.classList.remove("fullscreenwindow")
    } else {
        btn.src = "/assets/icons/mdi/fullscreen-exit.svg";
        current.classList.add("fullscreenwindow")
    }
}

// create iframe window.
function createiframewindow(url,name) {
    createwindow("iframe_w",1,2,0,0,1,0,0)
    const ifr = document.createElement("iframe")
    ifr.src = url
    ifr.style = "position:relative;top:-56px;width:100%;height:100%;border-radius:4px"
    ifr.name = name
    document.getElementsByClassName("window")[0].appendChild(ifr)
}
// create object window.
function createobjwindow(url,name) {
    createwindow("object_w",1,2,0,0,1,0,0)
    const obj1 = document.createElement("object")
    obj1.data = url
    obj1.style = "position:relative;top:-56px;width:100%;height:100%;border-radius:4px"
    obj1.name = name
    obj1.type = "text/html"
    document.getElementsByClassName("window")[0].appendChild(obj1)
}
// create alert.
function createalert(content,height) {
    createwindow("alert",1,0,1,1,0)
    const cur = current = document.getElementsByClassName("window")[0]
    if (height) {
        cur.style.height = height + "px"
    }
    const inn = document.createElement("div")
    inn.className = "wn_text"
    inn.innerHTML = content
    cur.appendChild(inn)
    if (i18nextify.i18next.isInitialized) {
        window.i18nextify.forceRerender()
    }
}