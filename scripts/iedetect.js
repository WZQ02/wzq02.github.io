oldiejumpold();

function detectIEVer() {//检查是否使用IE浏览器
    var ua = navigator.userAgent;
    var v = ua.indexOf("MSIE");
    var b = ua.indexOf("Trident");
    if (v < 0) {
        if (b < 0) {
            return 9999;
        }
        return 11;
    }
    return parseFloat (ua.substring (v + 5,ua.indexOf (";", v)));
}

function oldiejumpold() {//检测到是IE8以下版本浏览器跳转到old.html
    var url = window.location.href;
    if (url.indexOf("nobrowserdetect") != -1) {
    } else if (detectIEVer() <= 8) {
        window.location.href = "/old.html";
    }
}