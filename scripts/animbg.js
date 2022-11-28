var animbgurl = "https://www.dmoe.cc/random.php";
if (getCookie('animebgurl') != "") {
    var animbgurl = getCookie('animebgurl');
}
var url = window.location.href;
if (url.indexOf("disableanimebackground") != -1) {
    setCookie('animebackgroundenabled',"",0);
    url = url.replace(/(\?|#)[^'"]*/, '');
    window.history.pushState({},0,url);
} else if (url.indexOf("animebackground") != -1) {
    setCookie('animebackgroundenabled',"yes",365);
    animbg();
} else if (getCookie("animebackgroundenabled") != "") {
    animbg();
}
function animbg() {
    var animbg = document.createElement("div");
    var abspan = document.createElement("span");
    var as = animbg.style;
    animbg.id = "animbg";
    as.position = "absolute";
    as.left = "0px";
    as.top = "0px";
    as.backgroundImage = ("url("+animbgurl+")");
    as.backgroundSize = ("220vh");
    as.backgroundPosition = ("50%, 50%")
    as.width = "100vw";
    as.height = "100vh";
    as.animation = "appear 2.5s 1";
    as.transition = "1.5s";
    as.filter = "opacity(25%)";
    animbg.onmouseover = function() {
        as.filter = "opacity(100%)";
        document.addEventListener("mousemove",function(e) {
            as.backgroundPositionX = "calc(50% - "+ ((e.clientX - window.innerWidth * 0.5) * 0.1) +"px)";
            as.backgroundPositionY = "calc(50% - "+ ((e.clientY - window.innerHeight * 0.5) * 0.1) +"px)";
        })
    };
    animbg.onmouseout = function(){as.filter = "opacity(25%)";};
    document.getElementById("page2").style.backdropFilter = "blur(24px)";
    document.getElementsByTagName("centerpic")[0].style.display = "none";
    abspan.innerHTML = "<p>使用的图片 API: <br>" + animbgurl + "</p><p>站长不对从第三方调用图片的内容负责。</p>";
    abspan.style.textAlign = "right";
    document.getElementById("yabg").appendChild(animbg);
    document.getElementsByTagName("textrt")[0].appendChild(abspan);
}
function custombgurl(a) {
    setCookie('animebgurl',a,365);
    location.reload();
}
