function createprompt(id,isclosebutton,size,isblur,isdragable,allowfullscreen) {//创建弹窗
    if (document.getElementsByClassName("prompt")[0]) {//若存在弹窗，立即销毁
        destroyprompt(1);
    }
    var pmpt_bg = document.createElement("div");
    pmpt_bg.className = "pmpt_bg";//弹窗背景
    pmpt_bg.style = "width: 100vw; height: 100vh; position: absolute; left: 0px; bottom: 0px; animation: appear 0.4s ease; background-color: rgba(0, 0, 0, 0.4)";
    document.body.appendChild(pmpt_bg);
    var prompt = document.createElement("div");
    prompt.className = "prompt";
    prompt.id = id;
    if (size == "large") {
        prompt.className = "prompt largeprompt";
    } else {
        prompt.className = "prompt smallprompt";
    }
    if (isblur) {//背景是否启用模糊
        prompt.style.backdropFilter = "blur(32px)";
    }
    prompt.style.animation = "secshowup2 0.4s cubic-bezier(0, 0.6, 0, 1) 1";
    document.body.appendChild(prompt);
    if (isclosebutton) {//是否显示关闭按钮
        var closebtn = document.createElement("div");
        var closebtn_pic = document.createElement("img");
        closebtn.className = "pmpt_closebtn";
        closebtn.onclick = function(){destroyprompt();};
        closebtn_pic.src = "icons/others/close.svg";
        document.getElementById("main");
        document.getElementsByClassName("prompt")[0].appendChild(closebtn);
        document.getElementsByClassName("pmpt_closebtn")[0].appendChild(closebtn_pic)
    }
    if (isdragable) {//是否可拖拽
        prompt.addEventListener("mousedown",function(e) {
            prompt.style.transitionDuration = "0s";
            var x = e.clientX - prompt.offsetLeft;
            var y = e.clientY - prompt.offsetTop;
            document.addEventListener("mousemove",movepmpt)
            function movepmpt(f) {
                prompt.style.top = (f.clientY - y) +"px";
                prompt.style.left = (f.clientX - x) +"px";
            }
            prompt.addEventListener("mouseup",function () {
                document.removeEventListener("mousemove",movepmpt)
                prompt.style.transition = "";
            })
        });
        prompt.addEventListener("touchstart",function(e) {
            prompt.style.transitionDuration = "0s";
            var touch = e.targetTouches[0];
            var x = touch.clientX - prompt.offsetLeft;
            var y = touch.clientY - prompt.offsetTop;
            document.addEventListener("touchmove",movepmpt)
            function movepmpt(f) {
                var touch = f.targetTouches[0];
                prompt.style.top = (touch.clientY - y) +"px";
                prompt.style.left = (touch.clientX - x) +"px";
            }
            prompt.addEventListener("touchend",function () {
                document.removeEventListener("touchmove",movepmpt)
                prompt.style.transition = "";
            })
        })
    }
    if (allowfullscreen) {
        var fullscrnbtn = document.createElement("div");
        var fullscrnbtn_pic = document.createElement("img");
        fullscrnbtn.className = "pmpt_closebtn fullscrnbtn";
        fullscrnbtn.onclick = function(){prompt_fullscreen();};
        fullscrnbtn_pic.src = "icons/others/fullscreen.svg";
        fullscrnbtn_pic.id = "pmpt_fullscrnbtn";
        document.getElementById("main");
        document.getElementsByClassName("prompt")[0].appendChild(fullscrnbtn);
        document.getElementsByClassName("fullscrnbtn")[0].appendChild(fullscrnbtn_pic)
    }
};

function destroyprompt(instant) {//销毁弹窗
    var pmpt_bg = document.getElementsByClassName("pmpt_bg")[0];
    var prompt = document.getElementsByClassName("prompt")[0];
    if (instant) {
        document.body.removeChild(prompt);
        document.body.removeChild(pmpt_bg);
        return;
    }
    prompt.style.animation = "secgo 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1";
    pmpt_bg.style.animation = "disappear 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1";
    setTimeout(function(){document.body.removeChild(prompt);document.body.removeChild(pmpt_bg);},"195");
}

function createiframepmpt(url,name) {//创建iframe弹窗
    createprompt("iframe_pmpt",1,"large",0,0,1);
    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style = "position: relative; top: -56px; width: 100%; height: 100%; border-radius: 4px";
    iframe.frameborder = 1;
    iframe.name = name;
    document.getElementsByClassName("prompt")[0].appendChild(iframe);
}
function createalert(content,height) {//创建提示弹窗
    createprompt("alert",1,"small",1,1,0);
    var current = document.getElementsByClassName("prompt")[0];
    if (height) {
        current.style.top = "calc(50vh - "+ height/2 +"px)";
        current.style.height = height + "px";
    }
    var innercon = document.createElement("div");
    innercon.className = "prompt_text";
    innercon.innerHTML = content;
    current.appendChild(innercon);
    if (i18nextify.i18next.isInitialized) {
        window.i18nextify.forceRerender();
    }
}
function createobjpmpt(url,name) {//创建object嵌入网页弹窗
    createprompt("object_pmpt",1,"large",0,0,1);
    var obj_1 = document.createElement("object");
    obj_1.data = url;
    obj_1.style = "position: relative; top: -56px; border-radius: 4px";
    obj_1.width = '100%';
    obj_1.height = '100%';
    obj_1.name = name;
    obj_1.type = "text/html";
    document.getElementsByClassName("prompt")[0].appendChild(obj_1);
}
function createvideopmpt(url,id,auto) {
    createprompt("video_pmpt",1,"large",0,0,1);
    var pmpt_video = document.createElement("video");
    pmpt_video.src = url;
    pmpt_video.style = "position: relative; top: -56px; width: 100%; height: 100%; border-radius: 4px";
    pmpt_video.controls = 1;
    pmpt_video.id = id;
    if (auto) {
        pmpt_video.autoplay = 1;
    }
    document.getElementsByClassName("prompt")[0].appendChild(pmpt_video);
}

function prompt_fullscreen() {
    var current = document.getElementsByClassName("prompt")[0];
    var btn = document.getElementById("pmpt_fullscrnbtn");
    if (current.className == "prompt fullscreenprompt") {
        btn.src = "icons/others/fullscreen.svg";
        current.className = "prompt largeprompt"
    } else {
        btn.src = "icons/others/fullscreen-exit.svg";
        current.className = "prompt fullscreenprompt"
    }
}