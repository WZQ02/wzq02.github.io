var default_bgurl = "https://bing.img.run/rand.php"
var background_url = default_bgurl;
var lock_animbg,lock2_animbg,lock3_animbg;
var bgstate_lock
var bg_notfirst
var q_counter = 0;
if (localStorage.getItem('bgurl') != null) {//如果cookie中存在自定义api信息，则应用
    var background_url = localStorage.getItem('bgurl');
}
if (localStorage.getItem("backgroundenabled") != null) {//如果已设置为启用背景，则自动启用
    show_background(background_url);
}
function show_background(input_url) {
    lock_animbg = 0;
    lock2_animbg = 1;
    lock3_animbg = 1;
    setTimeout(function() {lock_animbg = 1},5000);//更换图片的间隔
    var url = input_url+"?"+q_counter;
    var animbg = document.createElement("div");
    var abspan = document.createElement("span");
    var textrt = document.getElementsByTagName("textrt")[0];
    var links = document.getElementById("links");
    //var cschooser = document.getElementById("cschooser");
    var as = animbg.style;
    animbg.id = "animbg";
    as.position = "absolute";
    as.left = "-16px";
    as.top = "-16px";
    as.backgroundSize = ("cover");
    as.backgroundPosition = ("50%, 50%")
    as.width = "calc(100vw + 32px)";
    as.height = "calc(100vh + 32px)";
    as.animation = "appear 2.5s 1";
    as.transition = "1.5s";
    as.filter = "brightness(100%) opacity(25%)";
    links.style.transition = "0.4s";
    //cschooser.style.transition = "0.25s";
    animbg.onmouseover = function() {
        as.filter = "brightness(100%) opacity(100%)";
        textrt.style.opacity = "0.25";
        links.style.opacity = "0.25";
        //cschooser.style.opacity = "0.25";
    };
    animbg.onmouseout = function() {
        as.filter = "brightness(100%) opacity(25%)";
        textrt.style.opacity = "";
        links.style.opacity = "";
        //cschooser.style.opacity = "";
    };
    /*window.onresize = function() {
        as.transition = "";
        setTimeout(function(){as.transition = "1.5s"},5)
    };*/
    abspan.style.transition = "0.25s";
    abspan.style.opacity = '0'
    setTimeout(function(){abspan.style.opacity = '1'},5)
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
    /*abspan.onmouseup = function() {
        createalert("<h3>Here are the tips:</h3>鼠标在本页上滑动时，图片会朝相反方向移动。<br>单击本页空白处可更换背景（有 5 秒的冷却时间）。<br>如果要更换背景功能使用的 api，在配色方案菜单中点击“更换背景图 API”，在弹出的窗口中填入你要使用的 API。<br>（点击“还原为默认”则可换回默认的图片 API）")
    }*/
    for (var i=0; i<6; i++) {//为所有section背景启用模糊效果
        document.getElementsByClassName("sections")[i].style.backdropFilter = "blur(24px)";
    }
    var isvideo;
    if (url.indexOf(".mp4") != -1 || url.indexOf(".webm") != -1) {//判断链接给出的地址是不是指向视频文件
        isvideo = 1;
        var bg_vid = document.createElement("video");
        var bg_vid_sec = document.createElement("source");
        bg_vid.id = "bg_vid";
        bg_vid.autoplay = "autoplay";
        bg_vid.muted = "muted";
        bg_vid.loop = "loop";
        bg_vid_sec.src = url;
        var bs = bg_vid.style;
        bs.minWidth = "100%";
        bs.minHeight = "100%";
        bs.width = "auto";
        bs.height = "auto";
        bs.position = "absolute";
        bs.top = "50%";
        bs.left = "50%";
        bs.transform = "translate(-50%,-50%)";
        if (url.indexOf(".mp4") != -1) {
            bg_vid_sec.type = "video/mp4"
        } else {
            bg_vid_sec.type = "video/webm"
        }
    } else {
        as.backgroundImage = ("url("+url+")");
        setTimeout(function(){as.transform = "scale(1.12)";},16);
        animbg.onclick = function() {//鼠标点击后，切换
            if (lock_animbg) {
                lock_animbg = 0;
                lock2_animbg = 0;
                as.transform = "scale(1.4)";
                as.animation = "disappear 0.5s 1";
                setTimeout(function() {
                    document.getElementById("yabg").removeChild(animbg);
                    as.transform = "";
                    //url = url+"?"+1;
                    q_counter++;
                    url = input_url+"?"+q_counter;
                    as.backgroundImage = ("url("+url+")");
                },420);
                setTimeout(function() {
                    as.filter = "brightness(100%) opacity(100%)";
                    as.animation = "appear 2.5s 1";
                    document.getElementById("yabg").appendChild(animbg);
                    as.transition = "1.5s";
                    setTimeout(function(){as.transform = "scale(1.12)";},16);
                    lock2_animbg = 1;
                },440);
                setTimeout(function() {
                    lock_animbg = 1;
                },5000);
            }
        }
        animbg.onmousedown = function() {//鼠标按下，即将切换背景图
            as.transition = "0.5s";
            if (lock_animbg) {
                as.filter = "brightness(125%) opacity(100%)";
            }
        };
        /*document.addEventListener("mousemove",function(e) {
            if (lock2_animbg && lock3_animbg) {
                as.transition = "1.5s";
                as.transform = "translate("+ ((window.innerWidth * .5 - e.clientX) * .1) +"px, "+ ((window.innerHeight * .5 - e.clientY) * .1) +"px) scale(1.12)";
                //lock3_animbg = 0;
                //setTimeout(function(){lock3_animbg = 1},50);
            }
        });*/
        document.addEventListener("mousemove",mvonmousemv);//监听鼠标位置，并改动背景图位置
        /*window.addEventListener('deviceorientation',function(e) {//对于带有陀螺仪的设备，旋转时改变背景图位置
            if (lock2_animbg && lock3_animbg) {
                as.transition = "1s";
                as.transform = "translate("+ (-e.gamma/90*window.innerWidth*.1) +"px, "+ (-e.beta/180*window.innerHeight*.1) +"px) scale(1.16)";
                //lock3_animbg = 0;
                //setTimeout(function(){lock3_animbg = 1},500);
            }
        })*/
        window.addEventListener("deviceorientation",mvondeviceori);
    }
    //document.getElementsByTagName("centerpic")[0].style.display = "none";
    if (bg_notfirst) {
        document.getElementById("centerpic_container").style = "display:none"
    } else {
        bgstate_lock = 1
        document.getElementById("centerpic_container").style = "transition:.15s;opacity:0"
        setTimeout(function(){
            document.getElementById("centerpic_container").style = "display:none"
            bgstate_lock = 0
        },150)
        bg_notfirst = 1
    }
    abspan.innerHTML = "<p><span onclick='createalert(\"<h3>Here are the tips:</h3>鼠标在本页上滑动时，图片会朝相反方向移动。<br>单击本页空白处可更换背景。<br>（有 5 秒的冷却时间）<br>如果要更换背景功能使用的 API，点击“使用的图片 API”下方的 URL，在弹出的窗口中填入你要使用的 API。<br><br>（目前仅支持直接返回图片数据的 API，不支持返回 JSON 的。点击“还原为默认”则可换回默认的图片 API）\",366)'>使用的图片 API: </span><br><span onclick='promptcustombgurl2()'>" + input_url + "</span></p>";
    if (background_url != default_bgurl) {
        abspan.innerHTML += "</p><p><span onclick='promptcustombgurl2()'>站长不对从第三方调用图片的内容负责。</span>";
    }
    abspan.style.textAlign = "right";
    abspan.id = "abspan";
    document.getElementById("yabg").appendChild(animbg);
    document.getElementsByTagName("textrt")[0].appendChild(abspan);
    if (isvideo) {
        document.getElementById("animbg").appendChild(bg_vid);
        document.getElementById("bg_vid").appendChild(bg_vid_sec);
    }
    //cschooseraddbgoptions();
    window.addEventListener("resize",resizezoom);
    document.getElementById("bgcon").style.opacity = "0.6";
    document.getElementById("bgcon").title = "禁用背景图片";
    if (i18nextify.i18next.isInitialized) {
        document.getElementById("bgcon").title = i18nextify.i18next.t('禁用背景图片');
    }
}
/*function cschooseraddbgoptions() {
    var bgoptions = document.createElement("div");
    bgoptions.innerHTML = "<c onclick='promptcustombgurl2()' style='position: relative; top:46px; left:4.5px;'>更换背景图 API</c>";
    bgoptions.id = "bgoptions";
    document.getElementById("cschooser").appendChild(bgoptions);
    document.getElementById("cschooser").style.height = "78px";
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        bgoptions.style.color = "#aaa";
    } else {
        bgoptions.style.color = "#444";
    }
}*/
function promptcustombgurl2() {
    createalert("<h3 style='opacity: 0.75'>更换背景图 API</h3><input type='text' id='custom_bg_url' placeholder='请填入你要使用的图片 API：'></input><c style='position: relative; float: left; top: 16px;' href='javascript:void(0)' onclick='promptcustombgurl3();'>更换</c><c style='position: relative; top: 16px; right: 8px; float: right' href='javascript:void(0)' onclick=\"custombgurl('')\";>还原为默认</c>",176)
    if (localStorage.getItem('bgurl')) {
        document.getElementById("custom_bg_url").value = localStorage.getItem('bgurl')
    }
    document.getElementById("custom_bg_url").addEventListener('keydown',function(e){
        if (e.keyCode == 13) {
            promptcustombgurl3();
        }
    });
}
function promptcustombgurl3() {
    var str = document.getElementById('custom_bg_url');
	if (str.value) {
		custombgurl(str.value);
	} else {
        str.style="background-color:#f205;transition:none";
        setTimeout(function(){str.style="";},30)
    }
}
function custombgurl(a) {//应用自定义api
    //location.reload();
    removebg();
    if (a) {
        background_url = a;
        localStorage.setItem('bgurl',a);
    } else {
        background_url = default_bgurl;
        localStorage.removeItem('bgurl');
    }
    show_background(background_url);
    destroyprompt();
}
function chgbgstate() {//启用或禁用背景图
    if (!bgstate_lock) {
        if (localStorage.getItem("backgroundenabled") != null) {
            localStorage.removeItem('backgroundenabled');
            //window.location.href = window.location.href.replace(/(\?|#)[^'"]*/, '');
            //window.history.pushState({},0,url);
            //location.reload();
            bgstate_lock = 1
            document.getElementById("yabg").style = "transition:.15s;opacity:0"
            document.getElementById("abspan").style.opacity = '0'
            setTimeout(function(){
                removebg()
                document.getElementById("yabg").style = ''
                bgstate_lock = 0
                bg_notfirst = 0
            },150)
        } else {
            localStorage.setItem('backgroundenabled',"yes");
            show_background(background_url);
        }
    }
}
function removebg() {
    document.getElementById("yabg").removeChild(document.querySelector("#animbg"));
    document.getElementsByTagName("textrt")[0].removeChild(document.querySelector("#abspan"));
    //document.getElementById("cschooser").removeChild(document.querySelector("#bgoptions"));
    //document.getElementById("cschooser").style.height = "";
    //document.getElementsByTagName("centerpic")[0].style = "display: block; animation: appear 0.7s";
    document.getElementById("centerpic_container").style = "display: block; animation: appear 0.7s";
    document.getElementById("bgcon").style.opacity = "";
    document.getElementById("bgcon").title = "启用背景图片";
    if (i18nextify.i18next.isInitialized) {
        document.getElementById("bgcon").title = i18nextify.i18next.t('启用背景图片');
    }
    for (var i=0; i<6; i++) {//去除所有section背景模糊效果
        document.getElementsByClassName("sections")[i].style.backdropFilter = "";
    }
    if (cp_rewoke) {
        cp_rewoke();
    }
    document.removeEventListener("mousemove",mvonmousemv);
    window.removeEventListener("deviceorientation",mvondeviceori);
    window.removeEventListener("resize",resizezoom);
}

function mvonmousemv(e) {
    if (lock2_animbg && lock3_animbg) {
        var as = document.querySelector('#animbg').style;
        as.transition = "1.5s ease-out";
        as.transform = "translate("+ ((window.innerWidth * .5 - e.clientX) * .1) +"px, "+ ((window.innerHeight * .5 - e.clientY) * .1) +"px) scale(1.12)";
        lock3_animbg = 0;
        setTimeout(function(){lock3_animbg = 1},50);
    }
}
function mvondeviceori(e) {
    if (lock2_animbg && lock3_animbg) {
        var as = document.querySelector('#animbg').style;
        as.transition = "1s ease-out";
        as.transform = "translate("+ (-e.gamma/90*window.innerWidth*.1) +"px, "+ (-e.beta/180*window.innerHeight*.1) +"px) scale(1.16)";
        lock3_animbg = 0;
        setTimeout(function(){lock3_animbg = 1},50);
    }
}
function resizezoom() {
    var as = document.querySelector('#animbg').style;
    as.transition = "";
    setTimeout(function(){as.transition = "1.5s"},5)
}
