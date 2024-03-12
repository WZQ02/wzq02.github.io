// Deprecated. Only useful in GitHub Pages Mirror Site.
var url = window.location.href;
var domain = "https://wzq02.top/"
if (url.indexOf("/read/") != -1) {
    window.location.href = domain+"read/#/" + url.slice(url.indexOf("/read/")+6);
    redirtext();
} else if (url.indexOf("/playgrnd/") != -1) {
    window.location.href = domain+"playgrnd/#/" + url.slice(url.indexOf("/playgrnd/")+10);
    redirtext();
} else {
    var rp = ["blog", "filsvr", "tv", "demos", "dl", "about"]
    for (i=0;i<rp.length;i++) {
        if (url.indexOf("/"+rp[i]) != -1) {
                window.location.href = domain+"#/" + rp[i];
                redirtext();
            break;
        }
    }
}
function redirtext() {
    document.getElementsByTagName("h1")[0].innerHTML = "正在尝试重定向..."
    document.getElementById("text1").innerHTML = "请稍候...";
    document.getElementById("largetitle").innerText = '';
    document.title = "请稍候";
    clearTimeout(jmp1);
}
function s_redir() {
    window.location.href = "/";
}