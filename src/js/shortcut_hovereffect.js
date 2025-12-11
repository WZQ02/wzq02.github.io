function sche_init() {
    let scs = document.getElementsByClassName("sc_item")
    //为所有shortcut赋予filter（鼠标悬停时其他shortcut模糊的效果）
    for (let i=0; i<scs.length; i++) {
        scs[i].id = "sc_"+i
        let blur = document.createElement("div")
        blur.className = "sc_i_filter"
        
        scs[i].insertBefore(blur,scs[i].childNodes[0])
        scs[i].addEventListener("mouseover",()=>{
            applyblur(i)
        })
        scs[i].addEventListener("mouseleave",()=>{
            applyblur(-1)
        })
    }

    function applyblur(exce_id) {
        for (i=0; i<scs.length; i++) {
            let node = scs[i].childNodes[0]
            if (exce_id == -1) {
                node.style = ""
            }
            else if (node.className == "sc_i_filter" && i != exce_id) {
                node.style = "backdrop-filter:blur(4px) brightness(.7)"
            }
        }
    }

    //shortcut的背景图加载完成后再渐变出现（会导致所有的backgroundimage被下载两次，不过有缓存，也无所谓吧额）
    //获取所有shortcuts引用的背景图url
    let all_sc = document.getElementsByClassName("sc_item")
    let all_sc_bg = []
    for (let i=0; i<all_sc.length; i++) {
        let url = all_sc[i].style.backgroundImage
        all_sc_bg.push(url)
    }
    //将所有shortcut赋予imgloading类（其中的filter将赋予不透明底色）
    for (let i=0; i<all_sc.length; i++) {
        all_sc[i].classList.add("imgload")
        //all_sc[i].style.backgroundImage = "rgba(#0000)"
    }
    //记录当前的route
    let route = window.location.pathname
    //新建img元素，重复加载所有的背景图片，并在加载后去除filter的不透明底色
    for (let i=0; i<all_sc.length; i++) {
        const tmpbg = new Image()
        tmpbg.src = all_sc_bg[i].slice(5,-2)
        tmpbg.onload = () => {
            //确保onload时path没有变动
            if (route == window.location.pathname) {
                all_sc[i].classList.remove("imgload")
            }
        }
    }
}