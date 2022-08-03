//检查是否使用IE浏览器
detectIEVer();
function detectIEVer() {
    var ua = navigator.userAgent;
    console.log(ua);
    var v = ua.indexOf("MSIE");
    var b = ua.indexOf("Trident");
    if (v >= 0 || b >= 0) {
        alert("IE 浏览器与本聊天室不兼容。");
    }
}