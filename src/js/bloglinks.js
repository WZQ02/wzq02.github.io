function createbloglinks() {
    const json_path = "./json/blog/list.json"
    let req = new XMLHttpRequest()
    req.open("get", json_path)
    req.send(null)
    req.onload = () => {
        if (req.status == 200) {
            const list = JSON.parse(req.responseText)
            for (let i=0;i<Object.keys(list).length;i++) {
                const a_sc = document.createElement("div")
                const a_sc_text = document.createElement("div")
                a_sc.className = "article_shortcut"
                a_sc.tabIndex = "0"
                a_sc_text.className = "article_shortcut_text"
                const data = Object.values(list)[i]
                a_sc.id = data["mdname"]
                a_sc_text.addEventListener("mouseup",()=>{
                    createmdwindow(data["mdname"],0,data["date"],data["tags"],1)
                })
                a_sc.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        createmdwindow(data["mdname"],0,data["date"],data["tags"],1)
                    }
                })
                a_sc_text.innerHTML = `<mdtitle>${data["title"]}<br></mdtitle>`
                if (data["date"]) {
                    if (data["tags"]) {
                        a_sc_text.innerHTML += `<mdtitle2><img src="/assets/icons/mdi/time.svg">&nbsp;${data["date"]}&nbsp;&nbsp;&nbsp;&nbsp;<img src="/assets/icons/mdi/tag.svg">&nbsp;${data["tags"]}</mdtitle2>`
                    } else {
                        a_sc_text.innerHTML += `<mdtitle2><img src="/assets/icons/mdi/time.svg">&nbsp;${data["date"]}</mdtitle2>`
                    }
                }
                document.getElementById("container2").appendChild(a_sc)
                a_sc.appendChild(a_sc_text)
                window.i18nextify.forceRerender()
            }
        }
    }
}