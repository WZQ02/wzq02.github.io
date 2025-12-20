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
    //let scs = document.getElementsByClassName("sc_item") //重复了
    let scs_bg = []
    for (let i=0; i<scs.length; i++) {
        let url = scs[i].style.backgroundImage
        scs_bg.push(url)
    }
    //将所有shortcut赋予imgloading类（其中的filter将赋予不透明底色）
    for (let i=0; i<scs.length; i++) {
        scs[i].classList.add("imgload")
        //scs[i].style.backgroundImage = "rgba(#0000)"
    }
    //记录当前的route
    let route = window.location.pathname
    //新建img元素，重复加载所有的背景图片，并在加载后去除filter的不透明底色
    for (let i=0; i<scs.length; i++) {
        const tmpbg = new Image()
        tmpbg.src = scs_bg[i].slice(5,-2)
        tmpbg.onload = () => {
            //确保onload时path没有变动
            if (route == window.location.pathname) {
                scs[i].classList.remove("imgload")
            }
        }
    }

    //键盘导航优化
    for (let i=0; i<scs.length; i++) {
        //为每个item添加tabindex
        scs[i].tabIndex = "0"

        //读取每个item的onclick值，并添加键盘事件
        let onc_value = scs[i].onclick || function() {window.location.href=(scs[i].childNodes[1].href)}
        scs[i].addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onc_value()
            }
        })
    }
}