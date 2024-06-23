//"use strict"; for some reason strict mode doesn't play well with IE11, so not enabled.
autoredirect();
function autoredirect() {
    var url = window.location.href;
    if (url.indexOf(".top:") != -1 || url.indexOf(".215") != -1) {
        window.location.href = "https://wzq02.top/";
    }
}
