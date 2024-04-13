/*var a_sc_group;

function misc() {
    document.getElementById("show_site_log").style.display = "none";
    //a_sc_group = document.getElementsByClassName("article_shortcut");
    //mdcontent_setatt(a_sc_group,"none")
}

var showstitle13_counter = 0

function showstitle13() {
    showstitle13_counter++;
    if (showstitle13_counter > 2) {
        document.getElementById("show_site_log").style.display = ""
    }
}

lite();


function lite() {
    var url = window.location.href;
    if (url.indexOf("lite_mode") != -1) {
        localStorage.setItem("lite_mode",1);
        window.location.href = "/test.html"
    } else if (localStorage.getItem("lite_mode") == 1) {
        window.location.href = "/test.html"
    }
}

function showmdcontent() {
    if (a_sc_group[0].attributeStyleMap.get('display') == "block") {
        mdcontent_setatt(a_sc_group,"none");
        if (i18nextify.i18next.isInitialized) {
            document.getElementById("md_expand").innerText = i18nextify.i18next.t('展开');
        } else {
            document.getElementById("md_expand").innerText = "展开";
        }
    } else {
        mdcontent_setatt(a_sc_group,"block");
        if (i18nextify.i18next.isInitialized) {
            document.getElementById("md_expand").innerText = i18nextify.i18next.t('收起');
        } else {
            document.getElementById("md_expand").innerText = "收起";
        }
    }
}
function mdcontent_setatt(a,block_or_none) {
    for (let i=0; i<127; i++) {
        if (a[i]) {
            a[i].attributeStyleMap.set("display",block_or_none);
        }
    }
}*/
/*s_detect();
function s_detect() {
    var url = window.location.href
    if (url.indexOf("s.wzq02") != -1) {
        createalert("<h3>短链接</h3><p>本站现已提供短链跳转功能。</p><p>前缀跳转：<br>s.wzq02.top/BV（哔哩哔哩视频）<br>s.wzq02.top/av（哔哩哔哩视频）<br>s.wzq02.top/ac（Acfun 视频）<br>s.wzq02.top/sm（Niconico 视频）</p><p>社交平台：<br>s.wzq02.top/bili（哔哩哔哩个人主页）<br>s.wzq02.top/github（GitHub 主页）<br>s.wzq02.top/ask（提问箱）<br>s.wzq02.top/qqgroup（个人 QQ 群）</p><p>其他跳转：<br>s.wzq02.top/1drive（个人网盘）<br>s.wzq02.top/tv（私人直播间）<br>s.wzq02.top/airasoft（艾拉软件库）</p><p>若不想再看到此提示，则请将地址栏中的前缀“s.”去掉。</p>")
    }
}*/
/*function burn() {
var burnitall = document.createElement("div")
//var burnitall2 = document.createElement("div")
burnitall.style = "overflow:hidden"
//burnitall2.style = "transform:rotate(180deg);left:1144px;overflow:hidden"
burnitall.innerHTML = "<img src='https://img1.picmix.com/output/stamp/normal/1/5/0/3/1323051_513fc.gif' style='z-index:10;pointer-events:none;position:absolute;bottom:0px'/><img src='https://img.wzq02.top/upl/9f95505d6f1a7b19455725ab21bad08b.gif' style='z-index:10;pointer-events:none;position:absolute;bottom:0px;left:375px'/>"
var wanted = document.createElement("div")
wanted.style = 'width:128px;height:250px;background-color:#edb;position:fixed;z-index:10;pointer-events:none;transform:rotateZ(19deg);box-shadow:0px 0px 8px #0004;left:80px;top:65px'
wanted.innerHTML = "<!--该通缉令内容为杜撰，如有雷同纯属巧合。--><span style='font-family:KaiTi!important;font-weight:bold;font-size:32px;color:#900;padding:12px'>通缉令</span><div style='font-family:none;font-weight:bold;font-size:18px;color:#400;pointer-events:auto!important' onclick='window.location.href=\"https://music.163.com/#/song?id=386837\"'>“纵火的青年”</div><img src='https://img.wzq02.top/upl/ac6f2126eba165e79d328b296a88ff5a.png' style='width:64px;margin:0px 28px'/><div style='font-family:SimHei!important;font-weight:bold;font-size:12px'>男，湖北武汉人。身份证号（点击可查看）：<span style='pointer-events:auto!important' onclick='alert(\"我操你妈，你这个恶俗狗！\")'>▇▇▇▇▇▇▇▇▇▇</span>。因涉嫌纵火案被武汉市公安局批准刑事拘留，现在逃。联系人：<span style='pointer-events:auto!important' onclick='window.location.href=\"https://space.bilibili.com/\"'>▇▇▇</span></div>"
document.getElementById("main").appendChild(burnitall)
//document.getElementById("main").appendChild(burnitall2)
document.getElementById("section6").appendChild(wanted)
}*/
