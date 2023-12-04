var a_sc_group;

function misc() {
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
s_detect();

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
function s_detect() {
    var url = window.location.href
    if (url.indexOf("s.wzq02") != -1) {
        createalert("<h3>短链接</h3><p>本站现已提供短链跳转功能。</p><p>前缀跳转：<br>s.wzq02.cf/BV（哔哩哔哩视频）<br>s.wzq02.cf/av（哔哩哔哩视频）<br>s.wzq02.cf/ac（Acfun 视频）<br>s.wzq02.cf/sm（Niconico 视频）</p><p>社交平台：<br>s.wzq02.cf/bili（哔哩哔哩个人主页）<br>s.wzq02.cf/github（GitHub 主页）<br>s.wzq02.cf/ask（提问箱）<br>s.wzq02.cf/qqgroup（个人 QQ 群）</p><p>其他跳转：<br>s.wzq02.cf/1drive（个人网盘）<br>s.wzq02.cf/tv（私人直播间）<br>s.wzq02.cf/airasoft（艾拉软件库）</p><p>若不想再看到此提示，则请将地址栏中的前缀“s.”去掉。</p>")
    }
}
