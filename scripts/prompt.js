function createprompt(id,isclosebutton,size,isblur) {
    var prompt = document.createElement("div");
    prompt.className = "prompt";
    prompt.id = id;
    if (size == "small") {
        prompt.style.top = "calc(50vh - 180px)";
        prompt.style.left = "calc(50vw - 160px)";
        prompt.style.width = "320px";
        prompt.style.height = "320px";
    }
    if (size == "large") {
        prompt.className = "prompt largeprompt";
        prompt.style.top = "calc(8.5vh - 20px)";
        prompt.style.left = "calc(50vw - 480px)";
        prompt.style.width = "960px";
        prompt.style.height = "83vh";
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
}

function destroyprompt() {
    var prompt = document.getElementsByClassName("prompt")[0];
    prompt.style.animation = "secgo 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1";
    setTimeout(function(){document.getElementById("main").removeChild(prompt);},"195");
}

function createiframepmpt(url,name) {
    createprompt("iframe_pmpt",1,"large",0);
    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.position = "relative";
    iframe.style.top = "-56px";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.borderRadius = "16px";
    iframe.frameborder = 1;
    iframe.name = name;
    document.getElementsByClassName("prompt")[0].appendChild(iframe);
}

function createalert(content) {
    createprompt("alert",1,"small",1);
    var innercon = document.createElement("div");
    innercon.className = "prompt_text";
    innercon.innerHTML = content;
    document.getElementsByClassName("prompt")[0].appendChild(innercon);
}