var a_sc_group;

window.onload = function() {
    document.getElementsByClassName("stitle2")[13].style.display = "none";
    a_sc_group = document.getElementsByClassName("article_shortcut");
    mdcontent_setatt(a_sc_group,"none")
}

var showstitle13_counter = 0

function showstitle13() {
    showstitle13_counter++;
    if (showstitle13_counter > 2) {
        document.getElementsByClassName("stitle2")[13].style.display = ""
    }
}

lite();

function lite() {
    var url = window.location.href;
    if (url.indexOf("lite_mode") != -1) {
        setCookie("lite_mode",1,365);
        window.location.href = "/test.html"
    } else if (getCookie("lite_mode") == 1) {
        window.location.href = "/test.html"
    }
}

function showmdcontent() {
    if (a_sc_group[0].attributeStyleMap.get('display') == "block") {
        mdcontent_setatt(a_sc_group,"none");
        document.getElementById("md_expand").innerText = "展开";
    } else {
        mdcontent_setatt(a_sc_group,"block");
        document.getElementById("md_expand").innerText = "收起";
    }
}
function mdcontent_setatt(a,block_or_none) {
    for (let i=0; i<127; i++) {
        if (a[i]) {
            a[i].attributeStyleMap.set("display",block_or_none);
        }
    }
}