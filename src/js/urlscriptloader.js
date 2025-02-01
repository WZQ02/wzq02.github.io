function usl_main() {
    function exec_scripts() {
        //Execute scripts
        if (!localStorage.getItem("ext_scripts")) {
            return
        }
        let now = JSON.parse(localStorage.getItem("ext_scripts"))
        //console.log(Object.keys(now).length)
        for (let i=0;i<Object.keys(now).length;i++) {
            let name = Object.keys(now)[i]
            let func = now[name]
            loadJS(name,function(){let a=eval(func);a()})
        }
    }
    let usl_data = new URLSearchParams(new URL(window.location.href).search).get('usl')
    if (!usl_data) {
        exec_scripts()
        return
    }
    usl_data = JSON.parse(atob(usl_data))
    let current = localStorage.getItem("ext_scripts")
    //Add script and execute
    if (usl_data["type"] == 1) {
        //Nothing in ext_scripts
        if (!current) {
            let data = {}
            data[usl_data["url"]] = usl_data["func"]
            //console.log(JSON.stringify(data))
            localStorage.setItem("ext_scripts",JSON.stringify(data))
        //Something already in
        } else {
            data = JSON.parse(current)
            data[usl_data["url"]] = usl_data["func"]
            localStorage.setItem("ext_scripts",JSON.stringify(data))
        }
        exec_scripts()
    //Remove script
    } else if (usl_data["type"] == 2) {
        if (!current) {
            return
        } else {
            data = JSON.parse(current)
            delete data[usl_data["url"]]
            localStorage.setItem("ext_scripts",JSON.stringify(data))
        }
    }
}
usl_main()

//Encode sample
//Add script
//let base64 = btoa(JSON.stringify({"type":1,"url":"https://demo.wzq02.top/wzq02.top.what/1.js","func":"_1_main"}))
//let string = "?usl="+base64

//Remove script
//let base64 = btoa(JSON.stringify({"type":2,"url":"https://demo.wzq02.top/wzq02.top.what/1.js"}))
//let string = "?usl="+base64