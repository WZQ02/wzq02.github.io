function sche_init() {
    let scs = document.getElementsByClassName("sc_item")

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
}