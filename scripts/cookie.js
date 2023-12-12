function setCookie(cname,cvalue,exdays) {//cookie设置(由于此脚本在旧版IE上报语法错误所以外置)
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}
function C2Stransfer(cname) {
    let olddata = getCookie(cname);
    if (olddata != "") {
        localStorage.setItem(cname,olddata)
        setCookie(cname,"",-1)
    }
}