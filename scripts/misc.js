window.onload = function() {
    document.getElementsByClassName("stitle2")[13].style.display = "none"
}

var showstitle13_counter = 0

function showstitle13() {
    showstitle13_counter++;
    if (showstitle13_counter > 2) {
        document.getElementsByClassName("stitle2")[13].style.display = ""
    }
}