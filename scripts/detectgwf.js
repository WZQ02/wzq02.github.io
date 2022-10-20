detectgwf();

function detectgwf() {
	var xmlhttp;
    if (XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
	xmlhttp.open("GET",'//graph.facebook.com/feed?callback=h',false);
	try {
		xmlhttp.send();
		return(false);
	} catch(error) {
		return(true);
	}
}

this.postMessage(detectgwf());