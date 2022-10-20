var visited = getCookie('visited');//是否第一次访问本站
if (visited == "") {
    setCookie('visited',"1",365);
}
if (navigator.language = "zh-CN") {//检测语言以判断切换语言按钮的行为
    var curlang = "zh";
}
tip1();
if (visited == "1") {
    autochgcenterpic();
    var timeoutchgcenterpic = setInterval("chgcenterpic()","15000");//自动切换中央图片
} else {
    setTimeout("onclickchgcenterpic()","30000");
}
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");
var section5 = document.getElementById("section5");
section1.classList.add('secdisplay');
suffixdetect();
highlightseclnk();

function lnklist() {//更多外链列表
    var othlnks = document.getElementById("othlnks");
    var lt = document.getElementById("lt");
    if (othlnks.style.display == "block") {
        othlnks.style.animation = "lnkhide 0.2s cubic-bezier(1, 0, 1, 1) 1";
        setTimeout(function(){othlnks.style.animation = ""; othlnks.style.display = "none"},"195");
        showlt = setTimeout(function(){lt.style.transition = "1s"; lt.style.opacity = "1.0";},"2000");
    } else {
        lt.style.animation = "none";
        othlnks.style.display = "block";
        lt.style.transition = "0.25s";
        lt.style.opacity = "0";
	clearTimeout(showlt);
    }
}
function chglang() {//切换语言按钮
    if (curlang == "zh") {
        if (window.location.href.indexOf("?lng=en") != -1) {
            window.location.href = "?lng=zh";
        } else {
            window.location.href = "?lng=en";
        }
    }
    else {
        if (window.location.href.indexOf("?lng=zh") != -1) {
            window.location.href = "?lng=en";
        } else {
            window.location.href = "?lng=zh";
        }
    }
}
function tip1() {//页面顶部提示语
    var tip1 = document.getElementById("tip1");
    if (detectIEVer() <= 12) {
        document.body.style.backgroundColor = "#EEE";
        if (navigator.language = "zh-CN") {
            tip1.innerText = "*检测到你正在使用 Internet Explorer，页面内容将不会按照预期显示，请更换浏览器。";
        } else {
            tip1.innerText = "*You are using Internet Explorer. Content on this page would not display as intended.";
        }
    }
}
function onclickchgcenterpic() {
    chgcenterpic();
    clearInterval(timeoutchgcenterpic);//重置计时器
    timeoutchgcenterpic = setInterval("chgcenterpic()","15000");
}
function chgcenterpic() {//更改中央图片
    var centerpic = document.getElementById("centerpic");
    centerpic.style.animation = "icogo 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
    setTimeout("autochgcenterpic()","400");
    setTimeout(function(){centerpic.style.animation = "icoshowup 0.4s cubic-bezier(0, 0.4, 0, 1) 1";},"400");
}
function autochgcenterpic() {
    var centerpics = document.getElementsByClassName("centerpik");
    while (true) {
        var rand1 = Math.ceil(Math.random()*9);
        if (window.randprev != rand1) {//确保下一次展示的图片不与上一次的重复
            break;
        }
    }
    var randprev = rand1;
    window.randprev = randprev;
    centerpics[0].setAttribute('srcset',"images/centerpic/front_"+rand1+".webp");
    centerpics[1].setAttribute('srcset',"images/centerpic/front_"+rand1+".png");
    centerpics[2].setAttribute('src',"images/centerpic/front_"+rand1+".png");
}
function morestuffiscomingsoon() {
    alert("More stuff is coming soon......");
}
function scrolltopage2() {//切换到下页
    var centerpic = document.getElementById("centerpic");
    var toscr2 = document.getElementById("toscr2");
    var lnks = document.getElementById("links");
    var page2 = document.getElementById("page2");
    page2.classList.add('pagedisplay');
    centerpic.style.animation = "pg1go 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
    toscr2.style.animation = "pg1go 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
    lnks.style.animation = "disappear 1s 1";
    hidecschooser();
    setTimeout(function(){
        page2.style.animation = "pg2showup 0.4s cubic-bezier(0, 0.4, 0, 1) 1";
        page2.style.display = "block";
        toscr2.style.display = "none";
        centerpic.style.display = "none";
    },"400");
    setTimeout(function(){lnks.style.display = "none";},"1000");
    /*setTimeout(function(){morestuffiscomingsoon();},"800");
    setTimeout(function(){scrolltopage1();},"800");*/
    var othlnks = document.getElementById("othlnks");
    var lt = document.getElementById("lt");
    if (othlnks.style.display == "block") {
        setTimeout(function(){othlnks.style.animation = "lnkhide 0.2s cubic-bezier(1, 0, 1, 1) 1";},"200");
        setTimeout(function(){othlnks.style.animation = ""; othlnks.style.display = "none"},"395");
        setTimeout(function(){lt.style.transition = "1s"; lt.style.opacity = "1.0";},"400");
    }
}
function scrolltopage1() {//返回上页
    var centerpic = document.getElementById("centerpic");
    var toscr2 = document.getElementById("toscr2");
    var lnks = document.getElementById("links");
    var page2 = document.getElementById("page2");
    page2.classList.remove('pagedisplay');
    page2.style.animation = "pg2go 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
    setTimeout(function(){
        page2.style.display = "none";
        centerpic.style.display = "block";
        toscr2.style.display = "block";
        lnks.style.display = "block";
    },"400");
    centerpic.style.animation = "pg1showup 0.4s cubic-bezier(0, 0.4, 0, 1) 1";
    toscr2.style.animation = "pg1showup 0.4s cubic-bezier(0, 0.4, 0, 1) 1";
    lnks.style.animation = "appear 1s 1";
}
var bodyscroll = new Hammer(document.body);//上下方向触摸手势
bodyscroll.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });//允许上下滑动
bodyscroll.on('swipeup', function(ev) {
    scrolltopage2();
});
bodyscroll.on('swipedown', function(ev) {
    scrolltopage1();
});
bodyscroll.on('panup', function(ev) {
    scrolltopage2();
});
bodyscroll.on('pandown', function(ev) {
    scrolltopage1();
});
var bodyscroll = new Hammer(document.body);
bodyscroll.on('swipeleft', function(ev) {//左右方向触摸手势
    secleft();
});
bodyscroll.on('swiperight', function(ev) {
    secright();
});
function secleft() {
    if (document.getElementById("page2").getAttribute('class') == "pagedisplay") {
        var seccurrent = document.getElementsByClassName("secdisplay")[0];
        var seccurnum = parseInt(seccurrent.getAttribute("id").substring(7));
        if (seccurnum < 6){
            displaysec(eval("section"+(seccurnum+1)));
        }
    }
}
function secright() {
    if (document.getElementById("page2").getAttribute('class') == "pagedisplay") {
        var seccurrent = document.getElementsByClassName("secdisplay")[0];
        var seccurnum = parseInt(seccurrent.getAttribute("id").substring(7));
        if (seccurnum > 1){
            displaysec(eval("section"+(seccurnum-1)));
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
function displaysec(section) {//显示某个section
    var secgo = document.getElementsByClassName("secdisplay")[0];
    var secappear = section;
    if (secgo.getAttribute("id") < secappear.getAttribute("id")) {
        secgo.style.animation = "secgo 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
        var showsec = setTimeout(function(){
            secgo.classList.remove('secdisplay');
            secappear.classList.add('secdisplay');
            secappear.style.animation = "secshowup 0.4s cubic-bezier(0, 0.4, 0, 1) 1";
        },"400");
    } else if (secgo.getAttribute("id") > secappear.getAttribute("id")) {
        secgo.style.animation = "secgo2 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
        var showsec = setTimeout(function(){
            secgo.classList.remove('secdisplay');
            secappear.classList.add('secdisplay');
            secappear.style.animation = "secshowup2 0.4s cubic-bezier(0, 0.4, 0, 1) 1";
        },"400");
    }
    removehighlgt();
    setTimeout(function(){addhighlgt();highlightseclnk();},"410");
}
function suffixdetect() {//检测到地址栏参数的时候自动跳转到某个section
    var url = window.location.href;
    if (url.indexOf("secquery") != -1) {
        scrolltopage2();
        if (url.indexOf("=blog") != -1) {}
        if (url.indexOf("=filesvr") != -1) {
            displaysec(section2);
        }
        if (url.indexOf("=wzqtv") != -1) {
            displaysec(section3);
        }
        if (url.indexOf("=demos") != -1) {
            displaysec(section4);
        }
        if (url.indexOf("=sitelog") != -1) {
            displaysec(section5);
        }
        if (url.indexOf("=freedl") != -1) {
            displaysec(section6);
        }
        url = url.replace(/(\?|#)[^'"]*/, '');//自动去除参数
        window.history.pushState({},0,url);
    }
    if (url.indexOf("forcesysfont") != -1) {//强制使用系统字体
        document.body.style.fontFamily = "'Microsoft YaHei',微软雅黑";
    }
}

function hidecschooser() {
    var cschooser = document.getElementById("cschooser");
    cschooser.style.animation = "lnkhide2 0.25s cubic-bezier(0, 0, 0.67, 0) 1";
    setTimeout(function(){cschooser.style.display = "none";cschooser.style.animation = ""},"245");
}

var scrollFunc = function(e) {//检测鼠标滚轮
    e=e || window.event;
    var seccurrent = document.getElementsByClassName("secdisplay")[0];
    if (e.wheelDelta < 0) {//IE/Opera/Chrome
        if (window.innerHeight > 944) {//窗口高度大于944时，启用section区滚轮切换
            secleft();
        }
        setTimeout(function(){scrolltopage2();},"16");
    } else if (e.wheelDelta > 0) {
        if (seccurrent.getAttribute("id") == "section1") {
            scrolltopage1();
        }
        if (window.innerHeight > 922) {
            secright();
        }
    } else if (e.detail < 0) {//Firefox
        if (window.innerHeight > 922) {
            secleft();
        }
        setTimeout(function(){scrolltopage2();},"16");
    } else if (e.detail > 0) {
        if (seccurrent.getAttribute("id") == "section1") {
            scrolltopage1();
        }
        if (window.innerHeight > 922) {
            secright();
        }
    }
}
if (document.addEventListener) {//注册事件
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome