var url = window.location.href;
if (url.indexOf("https://acg.tv/") != -1) {
    if (url.indexOf("sm") != -1) {
        window.location.href = "https://nicovideo.jp/watch/"+url.slice(15);
    } else if (url.indexOf("av") != -1 || url.indexOf("bv") != -1 || url.indexOf("BV") != -1) {
        window.location.href = "https://www.bilibili.com/video/"+url.slice(15);
    } else if (url.indexOf("tv/ac") != -1) {
        window.location.href = "https://www.acfun.cn/v/"+url.slice(15);
    }
    document.getElementsByTagName("h1")[0].innerHTML = "正在尝试重定向..."
    document.getElementById("text1").innerHTML = "请稍候...";
    document.title = "请稍候"
}