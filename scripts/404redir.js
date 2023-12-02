var url = window.location.href;
if (url.indexOf("https://acg.tv/") != -1) {
    if (url.indexOf("sm") != -1) {
        window.location.href = "https://nicovideo.jp/watch/"+url.slice(15);
    } else if (url.indexOf("av") != -1 || url.indexOf("bv") != -1 || url.indexOf("BV") != -1) {
        window.location.href = "https://www.bilibili.com/video/"+url.slice(15);
    } else if (url.indexOf("tv/ac") != -1) {
        window.location.href = "https://www.acfun.cn/v/"+url.slice(15);
    } else {
        s_redir();
    }
    redirtext()
}
if (url.indexOf("https://s.wzq02") != -1) {
    if (url.indexOf("sm") != -1) {
        window.location.href = "https://nicovideo.jp/watch/"+url.slice(19);
    } else if (url.indexOf("av") != -1 || url.indexOf("bv") != -1 || url.indexOf("BV") != -1) {
        window.location.href = "https://www.bilibili.com/video/"+url.slice(19);
    } else if (url.indexOf("cf/ac") != -1) {
        window.location.href = "https://www.acfun.cn/v/"+url.slice(19);
    } else if (url.indexOf("1drive") != -1) {
        window.location.href = "https://wzq02.cf/redirect/onedrive_msft"
    } else if (url.indexOf("tv") != -1) {
        window.location.href = "https://wzq02.cf/playgrnd/#/player"
    } else if (url.indexOf("airasoft") != -1) {
        window.location.href = "https://wzq02.cf/redirect/airasoft"
    } else if (url.indexOf("bili") != -1) {
        window.location.href = "https://space.bilibili.com/12367945/"
    } else if (url.indexOf("github") != -1) {
        window.location.href = "https://github.com/WZQ02"
    } else if (url.indexOf("ask") != -1) {
        window.location.href = "https://www.askbox.ink/h5/uu/89PDSQZV"
    } else if (url.indexOf("qqgroup") != -1) {
        window.location.href = "https://jq.qq.com/?_wv=1027&k=JNxRzKEU"
    } else {
        s_redir();
    }
    redirtext()
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