(()=>{
    const json_path = "/json/p2_list/list.json"
    const p2 = document.getElementById("page2")
    const ls = document.createElement("div")
    ls.id = "p2_list"
    const cn = document.createElement("div")
    cn.id = "p2l_cont"
    // get the list json file and render it.
    let req = new XMLHttpRequest()
    req.open("get", json_path)
    req.send(null)
    req.onload = () => {
        if (req.status == 200) {
            const list = JSON.parse(req.responseText)
            //console.log(list.length)
            for (let i=0; i<list.length; i++) {
                const item = document.createElement("div")
                item.className = "p2l_item"
                item.id = "pi_"+list[i]["id"]
                const cont = document.createElement("div")
                cont.className = "pi_cont"
                const icon = document.createElement("div")
                icon.className = "pc_icon"
                icon.innerHTML = "<img src='"+list[i]["icon"]+"'/>"
                const text = document.createElement("div")
                text.className = "pc_text"
                text.innerHTML = "<div>"+list[i]["title"]+"</div><span>"+list[i]["desc"]+"</span>"
                cont.appendChild(icon)
                cont.appendChild(text)
                item.appendChild(cont)
                cn.appendChild(item)
                item.addEventListener("mouseup",()=>{
                    eval(list[i]["func"])
                })
            }
            // append the list.
            ls.appendChild(cn)
            p2.appendChild(ls)
        }
    }
})()
function p2l_sc(name,func) {
    xmlpage('p3/'+name,func)
    window.history.pushState({page:1},"","/"+name)
}