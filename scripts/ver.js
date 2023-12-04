window.onload = function() {
    setTimeout(function(){misc();ver();},50)
}

function ver() {
    var request = new XMLHttpRequest();
    request.open("get", "json/ver.json");
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var info = JSON.parse(request.responseText);
            document.getElementById("site_last_updated").innerHTML = info["version"];
            document.getElementById("user_agent_info").innerHTML = navigator.userAgent;
            console.log("WZQ'02's site 3.1. version "+info["version"]);
            console.log("Current user-agent: "+navigator.userAgent);
        }
    }
}