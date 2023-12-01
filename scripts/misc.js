var a_sc_group;

window.onload = function() {
    document.getElementsByClassName("stitle2")[19].style.display = "none";
    a_sc_group = document.getElementsByClassName("article_shortcut");
    mdcontent_setatt(a_sc_group,"none")
}

var showstitle13_counter = 0

function showstitle13() {
    showstitle13_counter++;
    if (showstitle13_counter > 2) {
        document.getElementsByClassName("stitle2")[19].style.display = ""
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

function showmdcontent() {
    if (a_sc_group[0].attributeStyleMap.get('display') == "block") {
        mdcontent_setatt(a_sc_group,"none");
        document.getElementById("md_expand").innerText = "展开";
    } else {
        mdcontent_setatt(a_sc_group,"block");
        document.getElementById("md_expand").innerText = "收起";
    }
}
function mdcontent_setatt(a,block_or_none) {
    for (let i=0; i<127; i++) {
        if (a[i]) {
            a[i].attributeStyleMap.set("display",block_or_none);
        }
    }
}

if (window.location.href.indexOf("s.wzq02") != -1) {
    createalert("<h3>短链接</h3><p>本站现已提供短链跳转功能。</p><p>支持的前缀跳转：<br>s.wzq02.cf/BV（哔哩哔哩视频）<br>s.wzq02.cf/av（哔哩哔哩视频）<br>s.wzq02.cf/ac（Acfun 视频）<br>s.wzq02.cf/sm（Niconico 视频）</p><p>支持的特定跳转：<br>s.wzq02.cf/1drive（个人网盘）<br>s.wzq02.cf/tv（私人直播间）<br>s.wzq02.cf/airasoft（艾拉软件库）</p><a href='http://s.otm.ink'><c>你没猜错，我抄的这个</c><a>")
}