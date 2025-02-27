window.addEventListener("load",() => {
    getver()
})
let verinfo

function getver() {
    var req = new XMLHttpRequest();
    req.open("get", "/json/ver.json");
    req.send(null);
    req.onload = () => {
        if (req.status == 200) {
            verinfo = JSON.parse(req.responseText);
            console.log("WZQ'02's site 3.2. version "+verinfo["version"]);
        }
    }
}
function about_printver() {
    document.getElementById("site_upd_date").innerText = verinfo["version"];
}