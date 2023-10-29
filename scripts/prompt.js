function createprompt(id,isclosebutton,size,isblur,isdragable) {
    if (document.getElementsByClassName("prompt")[0]) {
        destroyprompt(1);
    }
    var pmpt_bg = document.createElement("div");
    pmpt_bg.className = "pmpt_bg";
    pmpt_bg.style = "width: 100vw; height: 100vh; position: absolute; left: 0px; bottom: 0px; animation: appear 0.4s ease; background-color: rgba(0, 0, 0, 0.4)";
    document.getElementById("main").appendChild(pmpt_bg);
    var prompt = document.createElement("div");
    prompt.className = "prompt";
    prompt.id = id;
    if (size == "small") {
        prompt.style = "top: calc(50vh - 180px); left: calc(50vw - 160px); width: 320px; height: 320px";
    }
    if (size == "large") {
        prompt.className = "prompt largeprompt";
        prompt.style = "top: calc(50vh - 380px); left: calc(50vw - 480px); width: 960px; height: 83vh";
    }
    if (isblur) {
        prompt.style.backdropFilter = "blur(32px)";
    }
    prompt.style.animation = "secshowup2 0.4s cubic-bezier(0, 0.6, 0, 1) 1";
    document.getElementById("main").appendChild(prompt);
    if (isclosebutton) {
        var closebtn = document.createElement("div");
        var closebtn_pic = document.createElement("img");
        closebtn.className = "pmpt_closebtn";
        closebtn.onclick = function(){destroyprompt();};
        closebtn_pic.src = "icons/others/close.svg";
        document.getElementById("main");
        document.getElementsByClassName("prompt")[0].appendChild(closebtn);
        document.getElementsByClassName("pmpt_closebtn")[0].appendChild(closebtn_pic)
    }
    if (isdragable) {
        prompt.addEventListener("mousedown",function(e) {
            var x = e.clientX - prompt.offsetLeft;
            var y = e.clientY - prompt.offsetTop;
            document.addEventListener("mousemove",movepmpt)
            function movepmpt(f) {
                prompt.style.top = (f.clientY - y) +"px";
                prompt.style.left = (f.clientX - x) +"px";
            }
            document.addEventListener("mouseup",function () {
                document.removeEventListener("mousemove",movepmpt)
            })
        })
    }
};

function destroyprompt(instant) {
    var pmpt_bg = document.getElementsByClassName("pmpt_bg")[0];
    var prompt = document.getElementsByClassName("prompt")[0];
    if (instant) {
        document.getElementById("main").removeChild(prompt);
        document.getElementById("main").removeChild(pmpt_bg);
        return;
    }
    prompt.style.animation = "secgo 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1";
    pmpt_bg.style.animation = "disappear 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1";
    setTimeout(function(){document.getElementById("main").removeChild(prompt);document.getElementById("main").removeChild(pmpt_bg);},"195");
}

function createiframepmpt(url,name) {
    createprompt("iframe_pmpt",1,"large",0,0);
    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style = "position: relative; top: -56px; width: 100%; height: 100%; border-radius: 16px";
    iframe.frameborder = 1;
    iframe.name = name;
    document.getElementsByClassName("prompt")[0].appendChild(iframe);
}

function createalert(content,height) {
    createprompt("alert",1,"small",1,1);
    var current = document.getElementsByClassName("prompt")[0];
    if (height) {
        current.style.top = "calc(50vh - "+ height/2 +"px)";
        current.style.height = height + "px";
    }
    var innercon = document.createElement("div");
    innercon.className = "prompt_text";
    innercon.innerHTML = content;
    current.appendChild(innercon);
}