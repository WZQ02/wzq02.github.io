var beacon_server = "https://api.wzq02.top/beacon/collect"
//Detect duplicate visit
var beacon_data = localStorage.getItem("beacon_data")
if (beacon_data == null) {
    set_bea_data()
} else {
    beacon_data = JSON.parse(beacon_data)
    if (get_ut() - Number(beacon_data["time"]) < 3600*24) {
    } else {
        set_bea_data()
    }
}
function get_ut() {
    return Math.floor(Number(new Date())/1000)
}
function set_bea_data() {
    localStorage.setItem("beacon_data",JSON.stringify({
        "time": get_ut()
    }))
    //If '?nobeacon' not in URL, run beacon script
    if (new URLSearchParams(new URL(window.location.href).search).get('nobeacon') == null) {
        loaded()
    }
}
//Beacon script loaded
function send(json) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', beacon_server)
    xhr.onload = function() {
        if (xhr.status != 200) {
            //console.log("beacon send error."+xhr.status)
        }
    }
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.send(JSON.stringify(json))
}
function loaded() {
    var visit_data = {
        "data_type": "load",
        "site": site,
        "is_mobile": 0,
        "es6_support": 0
    }
    visit_data["data_type"] = "load"
    var userAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(userAgent)) {
        visit_data["is_mobile"] = 1
    }
    var arrowfunc = "let t=()=>{}"
    try {
        f = new Function(arrowfunc)
        visit_data["es6_support"] = 1
    } catch(err) {
    }
    send(visit_data)
    afterload()
}
var first_interact_flag = 0
function afterload() {
    //User click
    window.addEventListener("click",function() {
        if (!first_interact_flag) {
            first_interact_flag = 1
            var after_data = {
                "data_type": "interact_once",
                "site": site
            }
            send(after_data)
        } 
    })
    //User stayed for over 30s
    setTimeout(function() {
        var after_data = {
            "data_type": "stayed_over_30s",
            "site": site
        }
        send(after_data)
    },30000)
}
