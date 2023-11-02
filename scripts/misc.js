window.onload = function() {
    document.getElementsByClassName("stitle2")[13].style.display = "none"
}

var showstitle13_counter = 0

function showstitle13() {
    showstitle13_counter++;
    if (showstitle13_counter > 2) {
        document.getElementsByClassName("stitle2")[13].style.display = ""
    }
}

lite();

function lite() {
    var url = window.location.href;
    if (url.indexOf("lite_mode") != -1) {
        setCookie("lite_mode",1,365);
        window.location.href = "/test.html"
    } else if (getCookie("lite_mode") == 1) {
        window.location.href = "/test.html"
    }
}