var visited = localStorage.getItem('visited');//是否第一次访问本站
if (visited == null) {
    localStorage.setItem('visited',"1");
}
var lbiv = setInterval(function(){
    if (window.i18nextify.i18next.isInitialized) {
        document.getElementsByClassName('rt_title')[0].childNodes[1].style = "animation:appear .25s"
        clearInterval(lbiv)
    }
},200)

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
        }
    } else {
        lock_lnk = 0;
        clearTimeout(showlt);//清除上面定义的showlt计时器，避免触发这里的代码时继续计时（防止lt和othlinks同时出现）
        othlnks.style.display = "block";
        setTimeout(function(){lock_lnk = 1},"250");
    }
}
function chglang() {
    var curlang = window.i18nextify.i18next.language;
    var tl;//target lang
    if (curlang.indexOf("zh") != -1) {
        tl = 'en'
    } else {
        tl = 'zh'
    }
    localStorage.setItem('i18nextLng',tl)
    window.i18nextify.init();
    var getlangfil = new XMLHttpRequest();
    getlangfil.open("get", "locales/"+tl+"/translation.json")
    getlangfil.send(null);
    getlangfil.onload = function(){setTimeout(function(){window.i18nextify.forceRerender()},50)}
}

var lock1 = 1;//引入锁，避免动画结束前重复上下页切换动作
function scrolltopage2() {
    if (lock1) {
        lock1 = 0;
        scrolltopage2a();
        setTimeout(function(){lock1 = 1}, "500");
    }
}
function scrolltopage2a() {//切换到下页
    var centerpic = document.getElementById("centerpic_container");
    var lnks = document.getElementById("links");
    var page2 = document.getElementById("page2");
    centerpic.style.animation = "pg1go 0.15s cubic-bezier(0.4, 0, 1, 0) 1";
    lnks.style.animation = "disappear 0.5s 1";
    setTimeout(function(){
        page2.style.animation = "pg2showup 0.35s cubic-bezier(0, 0.4, 0, 1) 1";
        page2.style.display = "flex";
        centerpic.style.display = "none";
    },"150");
    setTimeout(function(){lnks.style.display = "none";},"500");
    var othlnks = document.getElementById("othlnks");
    var lt = document.getElementById("lt");
    if (othlnks.style.display == "block") {
        setTimeout(function(){othlnks.style.animation = "lnkhide 0.15s cubic-bezier(1, 0, 1, 1) 1";},"150");
        setTimeout(function(){othlnks.style.animation = ""; othlnks.style.display = "none"},"245");
    }
    document.querySelector('#dot_1').classList.remove('highlighted_dot');
    document.querySelector('#dot_2').classList.add('highlighted_dot')
    document.getElementsByClassName('rt_title')[0].classList.add('inpage2')
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
    var centerpic = document.getElementById("centerpic_container");
    var lnks = document.getElementById("links");
    var page2 = document.getElementById("page2");
    page2.style.animation = "pg2go 0.15s cubic-bezier(0.4, 0, 1, 0) 1";
    setTimeout(function(){
        page2.style.display = "none";
        lnks.style.display = "block";
    },150);
    if (document.querySelector("#animbg")==null) {
        setTimeout(function(){centerpic.style.display = "block"},250);
        centerpic.style.animation = "pg1showup 0.35s cubic-bezier(0, 0.4, 0, 1) 1";
    }
    lnks.style.animation = "appear 0.5s 1";
    document.querySelector('#dot_1').classList.add('highlighted_dot');
    document.querySelector('#dot_2').classList.remove('highlighted_dot')
    document.getElementsByClassName('rt_title')[0].classList.remove('inpage2')
}
var scrollFunc = function(e) {//检测鼠标滚轮
    e=e || window.event;
    var seccurrent = document.getElementsByClassName("secdisplay")[0];
    if (e.wheelDelta < 0) {//IE/Opera/Chrome，鼠标向下滑动
        setTimeout(function(){scrolltopage2();},0);
    } else if (e.wheelDelta > 0) {//鼠标向上滑动
        scrolltopage1();
    } else if (e.detail > 0) {//Firefox，鼠标向下滑动
        setTimeout(function(){scrolltopage2();},0);
    } else if (e.detail < 0) {//鼠标向上滑动
        scrolltopage1();
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

//加载滚动条（据说有些浏览器自带了，但我还是做一个出来好了，虽然有点蹩脚）
let loadbar_lock = 0,loadbar_status = 0;

function addloadbar() {
    let bar = document.createElement("div")
    bar.id = "loadingbar"
    document.body.appendChild(bar)
}
addloadbar();
const ld_bar = document.getElementById("loadingbar");

function loadbarstart() {
    if (!loadbar_lock && loadbar_status == 0) {
        loadbar_lock = loadbar_status = 1
        setTimeout(()=>{loadbar_lock = 0},1500)
        ld_bar.style.opacity = 1
        ld_bar.style.animation = "lb_anim1 15s cubic-bezier(.2, .6, .2, 1) 1"
    }
}
function loadbarend() {
    if (loadbar_status == 1) {
        loadbar_lock = 1
        loadbar_status = 0
        ld_bar.style.opacity = 0
        setTimeout(()=>{ld_bar.style.animation = "";loadbar_lock = 0},1000)
    }
}