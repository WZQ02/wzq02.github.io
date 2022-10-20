autochgthemecolor();

function autochgthemecolor() {//自动更改配色方案
    var color = getCookie('themecolor');
    if (color != "") {
        document.getElementById("color_scheme").href = "css/cs_"+color+".css";
    }
}
function showcschooser() {//显示配色方案选择框
    var cschooser = document.getElementById("cschooser");
    if (cschooser.style.display == "block") {
        hidecschooser();
    } else {
        cschooser.style.display = "block";
    }
}
function themecolor(color) {//更改配色方案
    document.getElementById("color_scheme").href = "css/cs_"+color+".css";
    hidecschooser();
    setCookie('themecolor',color,365);
}