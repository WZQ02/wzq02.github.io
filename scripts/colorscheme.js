//Deprecated.

/*autochgthemecolor();

function autochgthemecolor() {//自动更改配色方案
    var color = localStorage.getItem('themecolor');
    if (color != null) {
        document.getElementById("color_scheme").href = "css/cs_"+color+".css";
    }
}
var lock_csc = 1;//引入锁，避免动画结束前重复cschooser淡入或淡出动作
function showcschooser() {//显示配色方案选择框
    if (lock_csc) {
        lock_csc = 0;
        var cschooser = document.getElementById("cschooser");
        if (cschooser.style.display == "block") {
            hidecschooser();
        } else {
            cschooser.style.display = "block";
        }
        setTimeout(function(){lock_csc = 1},"250")
    }
}
function themecolor(color) {//更改配色方案
    hidecschooser();
    if (color) {
        localStorage.setItem('themecolor',color);
        document.getElementById("color_scheme").href = "css/cs_"+color+".css";
    } else {
        localStorage.removeItem('themecolor');
        document.getElementById("color_scheme").href = "";
    }
}
function hidecschooser() {
    var cschooser = document.getElementById("cschooser");
    cschooser.style.animation = "lnkhide2 0.25s cubic-bezier(0, 0, 0.67, 0) 1";
    setTimeout(function(){cschooser.style.display = "none";cschooser.style.animation = ""},"245");
}*/