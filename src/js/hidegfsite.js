hidegfsites();

function hidegfsites() {
    var gfstate_data = localStorage.getItem('gfs');
    var gfsites = document.getElementsByClassName("outcn");
    if ((Date.parse(new Date())/1000 - gfstate_data) < 86400) {
        for (var i=0; i < gfsites.length; i++) {
            gfsites[i].style.display = "inline";
        }
    } else {
        for (var i=0; i < gfsites.length; i++) {
            gfsites[i].style.display = "none";
        }
    }
}

var dg_wkr = new Worker("./scripts/g_detect.js");
dg_wkr.onmessage = function(e) {
    if (e.data == false) {
        localStorage.setItem('gfs',Date.parse(new Date())/1000)
        hidegfsites();
    }
}