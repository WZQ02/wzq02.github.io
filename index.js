var visited = getCookie('visited');//是否第一次访问本站
if (visited == "") {
    setCookie('visited',"1",365)
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
function detectIEVer() {//检查是否使用IE浏览器
    var ua = navigator.userAgent;
    console.log(ua);
    var v = ua.indexOf("MSIE");
    var b = ua.indexOf("Trident");
    if (v < 0) {
        if (b < 0) {
            return 9999;
        }
        return 11;
    }
    return parseFloat (ua.substring (v + 5,ua.indexOf (";", v)));
}
function lnklist() {//更多外链列表
    var othlnks = document.getElementById("othlnks");
    var lt = document.getElementById("lt");
    if (othlnks.style.display == "block") {
        othlnks.style.animation = "lnkhide 0.2s cubic-bezier(1, 0, 1, 1) 1";
        setTimeout(function(){othlnks.style.animation = ""; othlnks.style.display = "none"},"195");
        setTimeout(function(){lt.style.transition = "1s"; lt.style.opacity = "1.0";},"2000");
    } else {
        lt.style.animation = "none";
        othlnks.style.display = "block";
        lt.style.transition = "0.25s";
        lt.style.opacity = "0";
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
    var centerpic = document.getElementById("centerpic");
    while (true) {
        var rand1 = Math.ceil(Math.random()*8);
        if (window.randprev != rand1) {//确保下一次展示的图片不与上一次的重复
            break;
        }
    }
    var randprev = rand1;
    window.randprev = randprev;
    centerpic.setAttribute('src',"images/centerpic/front_"+rand1+".png");
}
function morestuffiscomingsoon() {
    alert("More stuff is coming soon......");
}
function scrolltopage2() {//切换到下页
    var centerpic = document.getElementById("centerpic");
    var toscr2 = document.getElementById("toscr2");
    var lnks = document.getElementById("links");
    var page2 = document.getElementById("page2");
    centerpic.style.animation = "pg1go 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
    toscr2.style.animation = "pg1go 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
    lnks.style.animation = "disappear 1s 1";
    setTimeout(function(){
        page2.style.animation = "pg2showup 0.4s cubic-bezier(0, 0.4, 0, 1) 1";
        page2.style.display = "block";
        toscr2.style.display = "none";
        centerpic.style.display = "none";
    },"400");
    setTimeout(function(){lnks.style.display = "none";},"1000");
    /*setTimeout(function(){morestuffiscomingsoon();},"800");
    setTimeout(function(){scrolltopage1();},"800");*/
}
function scrolltopage1() {//返回上页
    var centerpic = document.getElementById("centerpic");
    var toscr2 = document.getElementById("toscr2");
    var lnks = document.getElementById("links");
    var page2 = document.getElementById("page2");
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
function displaysec(section) {//显示某个section
    var secgo = document.getElementsByClassName("secdisplay")[0];
    var secappear = section;
    if (secgo != secappear) {
        secgo.style.animation = "secgo 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
        setTimeout(function(){
            secgo.classList.remove('secdisplay');
            secappear.classList.add('secdisplay');
            secappear.style.animation = "secshowup 0.4s cubic-bezier(0, 0.4, 0, 1) 1";
        },"400");
    }
}
function setCookie(cname,cvalue,exdays) {//cookie设置
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}