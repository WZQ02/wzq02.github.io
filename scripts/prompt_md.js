function createmdprompt(mdname,engine) {//第二个参数指定使用的md转html引擎，不为0则使用showdown，否则使用marked
    createprompt("md_pmpt",1,"large",1,0,1);
    getmdfile(mdname,engine);
}

function getmdfile(mdname,e) {
    var request = new XMLHttpRequest();
    var mdc;
    request.open("get", "md/"+mdname+".md");
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            mdc = request.responseText;
            rendermdprompt(mdc,e);
        }
    }
}

function rendermdprompt(mdc,e) {
    var current = document.getElementsByClassName("prompt")[0];
    var innercon = document.createElement("div");
    innercon.className = "prompt_text mdpmpt";
    if (e) {
        var converter = new showdown.Converter(),
        text = mdc,
        html = converter.makeHtml(text);
    } else {
        text = mdc,
        html = marked.parse(text);
    }
    innercon.innerHTML = html;
    for (i=0; i<127; i++) {
        if (innercon.childNodes[i]) {
            if (typeof(innercon.childNodes[i].childNodes[0]) == "object") {
                if (innercon.childNodes[i].childNodes[0].alt) {
                    var alt_text = document.createElement("p");
                    alt_text.innerText = innercon.childNodes[i].childNodes[0].alt;
                    alt_text.style = "opacity: 0.75; text-align: center";
                    innercon.childNodes[i].appendChild(alt_text);
                }
            }
        } else {
            break;
        }
    }
    current.appendChild(innercon);
}