hidegfsites();

function hidegfsites() {
    var gfstate = getCookie('gfstate');
    var gfsites = document.getElementsByClassName("outcn");
    if (gfstate == "") {
        for (var i=0; i < gfsites.length; i++) {
            gfsites[i].style.display = "none";
        }
    } else {
        for (var i=0; i < gfsites.length; i++) {
            gfsites[i].style.display = "inline";
        }
    }
}

var detectgwfworker = new Worker("scripts/detectgwf.js");
detectgwfworker.onmessage = function(e) {
    if (e.data == false) {
        setCookie('gfstate',"1",7);
        hidegfsites();
    }
}