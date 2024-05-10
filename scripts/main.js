var visited = localStorage.getItem('visited');//是否第一次访问本站
//var tip1status = localStorage.getItem('tip1status');//用户是否已禁用顶部提示栏
if (visited == null) {
    localStorage.setItem('visited',"1");
}
/*if (window.i18nextify.i18next.language == "zh-CN") {//检测语言以判断切换语言按钮的行为
    var curlang = "zh";
}*/
tip1();
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");
var section5 = document.getElementById("section5");
section1.classList.add('secdisplay');
highlightseclnk();

var lock_lnk = 1;//引入锁，避免动画结束前重复otherlinks淡入或淡出动作
var showlt = "";
function lnklist() {//更多外链列表
    var othlnks = document.getElementById("othlnks");
    var lt = document.getElementById("lt");
    if (othlnks.style.display == "block") {
        if (lock_lnk) {
            lock_lnk = 0;
            othlnks.style.animation = "lnkhide 0.2s cubic-bezier(1, 0, 1, 1) 1";
            setTimeout(function(){othlnks.style.animation = ""; othlnks.style.display = "none"},"195");
            setTimeout(function(){lock_lnk = 1},"200");
            showlt = setTimeout(function(){lt.style.transition = "1s"; lt.style.opacity = "1.0";},"2000");
        }
    } else {
        lock_lnk = 0;
        clearTimeout(showlt);//清除上面定义的showlt计时器，避免触发这里的代码时继续计时（防止lt和othlinks同时出现）
        lt.style.animation = "none";
        othlnks.style.display = "block";
        lt.style.transition = "0.25s";
        lt.style.opacity = "0";
        setTimeout(function(){lock_lnk = 1},"250");
    }
}
function chglang() {//切换语言按钮
    /*if (curlang == "zh") {
        if (window.location.href.indexOf("?lng=en") != -1) {
            window.location.href = "?lng=zh";
        } else {
            window.location.href = "?lng=en";
        }
    } else {
        if (window.location.href.indexOf("?lng=zh") != -1) {
            window.location.href = "?lng=en";
        } else {
            window.location.href = "?lng=zh";
        }
    }*/
    var curlang = window.i18nextify.i18next.language;
    var tl;//target lang
    if (curlang.indexOf("zh") != -1) {
        //curlang = 'en';
        //url = url.replace(/(\?|#)[^'"]*/, '')+"?lng=en"
        //window.history.pushState({},0,url);
        tl = 'en'
        //localStorage.setItem('i18nextLng','en')
    } else {
        //curlang = 'zh';
        //url = url.replace(/(\?|#)[^'"]*/, '')+"?lng=zh"
        //window.history.pushState({},0,url);
        tl = 'zh'
        //localStorage.setItem('i18nextLng','zh')
    }
    localStorage.setItem('i18nextLng',tl)
    //console.log(window.i18nextify.i18next.language);
    window.i18nextify.init();
    var getlangfil = new XMLHttpRequest();
    getlangfil.open("get", "locales/"+tl+"/translation.json")
    getlangfil.send(null);
    getlangfil.onload = function(){setTimeout(function(){window.i18nextify.forceRerender()},50)}
    //window.i18nextify.forceRerender();
    //setTimeout(function(){window.i18nextify.forceRerender()},500);//网络条件较差时，500毫秒后再重新渲染一遍
}
function tip1() {//页面顶部提示语
    var tip1 = document.getElementById("tip1");
    /*if (tip1status == "") {
        tip1.style.display = "block";
        tip1.innerHTML = "<span>Welcome to WZQ02's site! If pages aren't displayed correctly, please clear your browser cache and refresh. &nbsp;</span><a href='javascript:void(0)' onclick='disabletip1()'><c><b>Don't show again</b></c></a>";
    } else {
        tip1.style.display = "none";
    }*/
    tip1.style.display = "none";
    if (DetectIEVer() <= 12) {
        document.body.style.backgroundColor = "#EEE";
        tip1.style.display = "block";
        if (navigator.language == "zh-CN") {
            tip1.innerHTML = "<span>*检测到你正在使用 Internet Explorer，页面内容将不会按照预期显示，请更换浏览器。</span>";
        } else {
            tip1.innerHTML = "<span>*You are using Internet Explorer. Content on this page would not display as intended.</span>";
        }
    }
}
/*function disabletip1() {//禁用顶部提示栏
    setCookie('tip1status',"1",365);
    var tip1 = document.getElementById("tip1");
    tip1.style.animation = "tipunshow cubic-bezier(0.4, 0, 1, 0.6) 0.4s 1";
    setTimeout(function(){tip1.style.display = "none";},"395");
}*/
var lock1 = 1;//引入锁，避免动画结束前重复上下页切换动作
function scrolltopage2() {
    if (lock1) {
        lock1 = 0;
        scrolltopage2a();
        setTimeout(function(){lock1 = 1}, "500");
    }
}
function scrolltopage2a() {//切换到下页
    //var centerpic = document.getElementById("centerpic");
    var centerpic = document.getElementById("centerpic_container");
    //var toscr2 = document.getElementById("toscr2");
    var lnks = document.getElementById("links");
    var page2 = document.getElementById("page2");
    page2.classList.add('pagedisplay');
    centerpic.style.animation = "pg1go 0.25s cubic-bezier(0.4, 0, 1, 0) 1";
    //toscr2.style.animation = "pg1go 0.25s cubic-bezier(0.4, 0, 1, 0) 1";
    lnks.style.animation = "disappear 0.5s 1";
    //hidecschooser();
    setTimeout(function(){
        page2.style.animation = "pg2showup 0.25s cubic-bezier(0, 0.4, 0, 1) 1";
        page2.style.display = "block";
        //toscr2.style.display = "none";
        centerpic.style.display = "none";
    },"250");
    setTimeout(function(){lnks.style.display = "none";},"500");
    var othlnks = document.getElementById("othlnks");
    var lt = document.getElementById("lt");
    if (othlnks.style.display == "block") {
        setTimeout(function(){othlnks.style.animation = "lnkhide 0.15s cubic-bezier(1, 0, 1, 1) 1";},"150");
        setTimeout(function(){othlnks.style.animation = ""; othlnks.style.display = "none"},"245");
        setTimeout(function(){lt.style.transition = "1s"; lt.style.opacity = "1.0";},"250");
    }
    document.querySelector('#dot_1').classList.remove('highlighted_dot');
    document.querySelector('#dot_2').classList.add('highlighted_dot')
    document.getElementsByTagName('textrt')[0].classList.add('inpage2')
}
function scrolltopage1() {
    if (lock1) {
        lock1 = 0;
        scrolltopage1a();
        setTimeout(function(){lock1 = 1}, "500");
        if (window.location.href.indexOf("#/") != -1) {
            window.location.href = '#/'
        }
    }
}
function scrolltopage1a() {//返回上页
    //var centerpic = document.getElementById("centerpic");
    var centerpic = document.getElementById("centerpic_container");
    //var toscr2 = document.getElementById("toscr2");
    var lnks = document.getElementById("links");
    var page2 = document.getElementById("page2");
    page2.classList.remove('pagedisplay');
    page2.style.animation = "pg2go 0.25s cubic-bezier(0.4, 0, 1, 0) 1";
    setTimeout(function(){
        page2.style.display = "none";
        //centerpic.style.display = "block";
        //toscr2.style.display = "block";
        lnks.style.display = "block";
    },250);
    if (document.querySelector("#animbg")==null) {
        setTimeout(function(){centerpic.style.display = "block"},250);
        centerpic.style.animation = "pg1showup 0.25s cubic-bezier(0, 0.4, 0, 1) 1";
    }
    //toscr2.style.animation = "pg1showup 0.25s cubic-bezier(0, 0.4, 0, 1) 1";
    lnks.style.animation = "appear 0.5s 1";
    document.querySelector('#dot_1').classList.add('highlighted_dot');
    document.querySelector('#dot_2').classList.remove('highlighted_dot')
    document.getElementsByTagName('textrt')[0].classList.remove('inpage2')
}
function secleft() {
    if (document.getElementById("page2").getAttribute('class') == "pagedisplay") {
        var seccurrent = document.getElementsByClassName("secdisplay")[0];
        var seccurnum = parseInt(seccurrent.getAttribute("id").substring(7));
        if (seccurnum < 6){
            //displaysec(eval("section"+(seccurnum+1)));
            location.hash = '#/'+rp[seccurnum+1]
        }
    }
}
function secright() {
    if (document.getElementById("page2").getAttribute('class') == "pagedisplay") {
        var seccurrent = document.getElementsByClassName("secdisplay")[0];
        var seccurnum = parseInt(seccurrent.getAttribute("id").substring(7));
        if (seccurnum > 1){
            //displaysec(eval("section"+(seccurnum-1)));
            location.hash = '#/'+rp[seccurnum-1]
        }
    }
}
function highlightseclnk() {//高亮显示当前section对应的按钮
    if (document.getElementsByClassName("lnkhighlight")[0]) {
        document.getElementsByClassName("lnkhighlight")[0].style.opacity = "1.0";
    }
}
function addhighlgt() {
    var seccurrent = document.getElementsByClassName("secdisplay")[0];
    var seccurnum = parseInt(seccurrent.getAttribute("id").substring(7));
    (eval("seclink"+(seccurnum)).childNodes[0]).classList.add('lnkhighlight');
}
function removehighlgt() {
    var seccurrent = document.getElementsByClassName("secdisplay")[0];
    var seccurnum = parseInt(seccurrent.getAttribute("id").substring(7));
    if (document.getElementsByClassName("lnkhighlight")[0]) {
        document.getElementsByClassName("lnkhighlight")[0].style.opacity = "";
    }
    (eval("seclink"+(seccurnum)).childNodes[0]).classList.remove('lnkhighlight');
}
var lock2 = 1;//引入锁，避免动画结束前重复左右页切换动作，同时避免下页板块上同时出现两个section的情况
function displaysec(section) {
    if (lock2) {
        lock2 = 0;
        displayseca(section);
        setTimeout(function(){lock2 = 1;verifyhash(section)}, "410");
    }
}
function verifyhash(section) {
    var seccurnum = parseInt(section.getAttribute("id").substring(7));
    window.location.hash = '#/'+rp[seccurnum]
}
function displayseca(section) {//显示某个section
    var secgo = document.getElementsByClassName("secdisplay")[0];
    var secappear = section;
    if (secgo.getAttribute("id") < secappear.getAttribute("id")) {
        secgo.style.animation = "secgo 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
        setTimeout(function(){
            secgo.classList.remove('secdisplay');
            secappear.classList.add('secdisplay');
            secappear.style.animation = "secshowup 0.4s cubic-bezier(0, 0.4, 0, 1) 1";
        },"400");
    } else if (secgo.getAttribute("id") > secappear.getAttribute("id")) {
        secgo.style.animation = "secgo2 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
        setTimeout(function(){
            secgo.classList.remove('secdisplay');
            secappear.classList.add('secdisplay');
            secappear.style.animation = "secshowup2 0.4s cubic-bezier(0, 0.4, 0, 1) 1";
        },"400");
    }
    removehighlgt();
    setTimeout(function(){addhighlgt();highlightseclnk();},"410");
    window.removeEventListener("resize", checkscrollonresize);
    secgo.removeEventListener("scroll",checkscrollonscroll);
    sec_scroll_l = 0;//重置sec_scroll
    sec_scroll_r = 0;
    first_scroll = 1;
    //判断section是否滑动到底/顶部以更改sec_scroll的状态
    setTimeout(function() {
        checkscrollonsecalter(secappear);
        window.addEventListener("resize", checkscrollonresize);
        secappear.addEventListener("scroll",checkscrollonscroll);
    },"405");
}
function checkscrollonsecalter(a) {//每次切换section时进行检查
    //console.log(a.scrollHeight,a.clientHeight,a.scrollTop);
    if (a.scrollHeight - a.clientHeight - a.scrollTop < 4) {
        sec_scroll_l = 1;
    } else {
        sec_scroll_l = 0;
    }
    if (a.scrollTop < 2) {
        sec_scroll_r = 1;
    } else {
        sec_scroll_r = 0;
    }
}
function checkscrollonscroll() {//每次section滚动时都再次进行检查
    checkscrollonsecalter(this);
}
function checkscrollonresize() {//每次更改视图大小时进行检查
    setTimeout(function(){checkscrollonsecalter(document.getElementsByClassName("secdisplay")[0])},"250");
}
var sec_scroll_l = 1;//是否允许滑轮触发section之间的切换
var sec_scroll_r = 1;
var first_scroll = 0;//是否触发过第一次scroll
var scrollFunc = function(e) {//检测鼠标滚轮
    e=e || window.event;
    var seccurrent = document.getElementsByClassName("secdisplay")[0];
    //窗口高度大于944时，启用section区滚轮切换(不再需要，暂且注释掉)
    /*if (window.innerHeight <= 944) {
        sec_scroll_l = 0;
        sec_scroll_l = 0;
    } else {
        sec_scroll_l = 1;
        sec_scroll_l = 1;
    }*/
    if (e.wheelDelta < 0) {//IE/Opera/Chrome，鼠标向下滑动
        if (!first_scroll) {
            displayseca(seccurrent)//第一次触发scroll时，检查
        }
        if (sec_scroll_l && first_scroll) {//检查是否允许滑轮触发切换
            secleft();
        }
        setTimeout(function(){scrolltopage2();},0);
    } else if (e.wheelDelta > 0) {//鼠标向上滑动
        if (sec_scroll_r) {
            if (seccurrent.getAttribute("id") == "section1") {
                scrolltopage1();
            }
            secright();
        }
    } else if (e.detail > 0) {//Firefox，鼠标向下滑动
        if (sec_scroll_l) {
            secleft();
        }
        setTimeout(function(){scrolltopage2();},0);
    } else if (e.detail < 0) {//鼠标向上滑动
        if (sec_scroll_r) {
            if (seccurrent.getAttribute("id") == "section1") {
                scrolltopage1();
            }
            secright();
        }
    }
}
document.querySelector('#main').addEventListener('DOMMouseScroll',scrollFunc,false);//注册事件(Firefox)
document.querySelector('#main').onmousewheel = scrollFunc;//IE/Opera/Chrome

if (window.location.hostname.indexOf('.github.io')!=-1) {
    window.addEventListener('load',function(){
        document.title += i18nextify.i18next.t(" (Mirror)")
    })
    if (navigator.language == "zh-CN") {
        console.log("您正在访问 WZQ\'02 的小站的镜像版本。主站地址为 https://wzq02.top/")
    } else {
        console.log("You\'re visiting the mirror version of WZQ\'02\'s site. The main site is at https://wzq02.top/")
    }
}
function loadJS(url,callback) {//按需动态加载第三方js
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = function() {
        callback();//js加载完后执行回调函数
    }
    document.head.appendChild(script);
}