autoredirect();
function autoredirect() {
    var url = window.location.href;
    if (url.indexOf(".cf:") != -1 || url.indexOf(".215") != -1 || url.indexOf("acg.tv") != -1) {
        window.location.href = "https://wzq02.cf/";
    }
}
