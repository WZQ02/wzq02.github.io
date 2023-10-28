ver();

function ver() {
    var request = new XMLHttpRequest();
    request.open("get", "ver.json");
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var info = JSON.parse(request.responseText);
            console.log("WZQ'02's site 3.0. version "+info["version"]);
            console.log("Current user-agent: "+navigator.userAgent);
        }
    }
}