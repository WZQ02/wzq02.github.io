var animbgurl = "https://bing.img.run/rand.php";//默认的图片api(之前那个二次元图片api疑似炸了，换三次元风景图了)
var xmlHttp = new XMLHttpRequest();
//var animbgurl = "https://www.dmoe.cc/random.php";
var lock_animbg = 0;
var lock2_animbg = 1;
var bgtimer1 = null;
setTimeout(function() {
    lock_animbg = 1;
},5000);//更换图片的间隔
if (getCookie('bgurl') != "") {
    var animbgurl = getCookie('bgurl');
}
var url = window.location.href;
if (url.indexOf("disablebackground") != -1 || url.indexOf("nobackground") != -1) {
    setCookie('backgroundenabled',"",0);
    url = url.replace(/(\?|#)[^'"]*/, '');
    window.history.pushState({},0,url);
} else if (url.indexOf("background") != -1) {
    setCookie('backgroundenabled',"yes",365);
    animbg();
} else if (getCookie("backgroundenabled") != "") {
    animbg();
}
function animbg() {
    var animbg = document.createElement("div");
    var abspan = document.createElement("span");
    var textrt = document.getElementsByTagName("textrt")[0];
    var links = document.getElementById("links");
    var cschooser = document.getElementById("cschooser");
    var as = animbg.style;
    animbg.id = "animbg";
    as.position = "absolute";
    as.left = "0px";
    as.top = "0px";
    as.backgroundImage = ("url("+animbgurl+")");
    as.backgroundSize = ("cover");
    as.backgroundPosition = ("50%, 50%")
    as.width = "100vw";
    as.height = "100vh";
    as.animation = "appear 2.5s 1";
    as.transition = "1.5s";
    as.filter = "brightness(100%) opacity(25%)";
    setTimeout(function(){as.transform = "scale(1.12)";},16);
    links.style.transition = "0.4s";
    cschooser.style.transition = "0.25s";
    animbg.onmouseover = function() {
        as.filter = "brightness(100%) opacity(100%)";
        textrt.style.opacity = "0.25";
        links.style.opacity = "0.25";
        cschooser.style.opacity = "0.25";
    };
    animbg.onmouseout = function() {
        as.filter = "brightness(100%) opacity(25%)";
        textrt.style.opacity = "";
        links.style.opacity = "";
        cschooser.style.opacity = "";
        as.transition = "1.5s";
    };
    animbg.onmousedown = function() {
        as.transition = "0.5s";
        if (lock_animbg) {
            as.filter = "brightness(115%) opacity(100%)";
        }
    };
    animbg.onclick = function() {
        if (lock_animbg) {
            lock_animbg = 0;
            lock2_animbg = 0;
            as.transform = "scale(1.4)";
            as.animation = "disappear 0.5s 1";
            //abspan.animation = "disappear 0.5s 1";
            setTimeout(function() {
                document.getElementById("yabg").removeChild(animbg);
                //document.getElementsByTagName("textrt")[0].removeChild(abspan);
                as.transform = "";
                //xmlHttp.open("get", animbgurl);
                //xmlHttp.send(null);
                animbgurl = animbgurl+"?"+1;
                as.backgroundImage = ("url("+animbgurl+")");
            },420);
            setTimeout(function() {
                as.filter = "brightness(100%) opacity(100%)";
                as.animation = "appear 2.5s 1";
                //abspan.animation = "";
                document.getElementById("yabg").appendChild(animbg);
                //document.getElementsByTagName("textrt")[0].appendChild(abspan);
                as.transition = "1.5s";
                setTimeout(function(){as.transform = "scale(1.12)";},16);
                lock2_animbg = 1;
            },440);
            setTimeout(function() {
                lock_animbg = 1;
            },5000);
        }
    }
    abspan.style.transition = "0.25s";
    abspan.onmouseover = function() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            abspan.style.filter = "brightness(140%)";
        } else {
            abspan.style.filter = "brightness(65%)";
        }
    }
    abspan.onmouseout = function() {
        abspan.style.filter = "";
    }
    abspan.onmousedown = function() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            abspan.style.filter = "brightness(175%)";
        } else {
            abspan.style.filter = "brightness(25%)";
        }
    }
    abspan.onmouseup = function() {
        alert("额，这个主页背景功能我本来不打算加的，因为我觉得这么做会让我主页显得花里胡哨。\nAnyway，我还是写了这坨功能，只不过我设置成默认禁用了。\n\nHere are the tips:\n鼠标在本页上滑动时，图片会朝相反方向移动。\n单击本页空白处可更换背景（有 5 秒的冷却时间）。\n如果要更换背景功能使用的 api，在配色方案菜单中点击“更换背景图 API”，在弹出的窗口中填入你要使用的 api。\n（要换回默认 api 的话，在弹窗中填入空格即可）\n\n如果你也不喜欢这个功能，可以在地址栏后面输入\n?nobackground，回车即可禁用背景图。\n\n\n哦对，默认使用的 api 是我随便找的，图库里面有铭感内容的话不关我事啊。");
    }
    document.addEventListener("mousemove",function(e) {
        //背景跟随鼠标的动画，这里弃用backgroundPosition而是改成transform，因为前者性能太烂，在我旧电脑上面能卡出翔
        /*if (bgtimer1) {
            return;
        }
        timer = setTimeout(function() {
            //as.backgroundPositionX = "calc(50% - "+ ((e.clientX - window.innerWidth * 0.5) * 0.1) +"px)";
            //as.backgroundPositionY = "calc(50% - "+ ((e.clientY - window.innerHeight * 0.5) * 0.1) +"px)";
            as.transform = "translate("+ ((window.innerWidth * 0.5 - e.clientX) * 0.1) +"px, "+ ((window.innerHeight * 0.5 - e.clientY) * 0.1) +"px)";
            bgtimer1 = null;
        },500)*/
        if (lock2_animbg) {
            as.transform = "translate("+ ((window.innerWidth * 0.5 - e.clientX) * 0.1) +"px, "+ ((window.innerHeight * 0.5 - e.clientY) * 0.1) +"px) scale(1.12)";
        }
    })
    document.getElementById("page2").style.backdropFilter = "blur(24px)";
    document.getElementsByTagName("centerpic")[0].style.display = "none";
    abspan.innerHTML = "<p>使用的图片 API: <br>" + animbgurl + "</p><p>站长不对从第三方调用图片的内容负责。<br>本地化占位文本1</p>";
    abspan.style.textAlign = "right";
    document.getElementById("yabg").appendChild(animbg);
    document.getElementsByTagName("textrt")[0].appendChild(abspan);
    cschooseraddbgoptions();
}
function cschooseraddbgoptions() {
    var bgoptions = document.createElement("div");
    bgoptions.innerHTML = "<c onclick='promptcustombgurl()' style='position: relative; top:46px; left:4px;'>更换背景图 API</c>";
    document.getElementById("cschooser").appendChild(bgoptions);
    document.getElementById("cschooser").style.height = "76px";
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        bgoptions.style.color = "#aaa";
    } else {
        bgoptions.style.color = "#444";
    }
}
function promptcustombgurl() {
    var str=prompt("请填入你要使用的图片 API: (如需改回默认请填入空格)");
    if (str) {
        custombgurl(str)
    }
}
function custombgurl(a) {
    setCookie('bgurl',a,365);
    location.reload();
}
