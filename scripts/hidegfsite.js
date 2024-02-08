hidegfsites();

function hidegfsites() {
    //var gfstate = getCookie('gfstate');
    var gfstate_data = localStorage.getItem('gfs');
    var gfsites = document.getElementsByClassName("outcn");
    /*if (gfstate == "") {
        for (var i=0; i < gfsites.length; i++) {
            gfsites[i].style.display = "none";
        }
    } else {
        for (var i=0; i < gfsites.length; i++) {
            gfsites[i].style.display = "inline";
        }
    }*/
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

var detectgwfworker = new Worker("scripts/detectgwf.js");
detectgwfworker.onmessage = function(e) {
    if (e.data == false) {
        //setCookie('gfstate',"1",7);
        localStorage.setItem('gfs',Date.parse(new Date())/1000)
        hidegfsites();
    }
}