function createmdprompt(mdname,engine,date,tags) {//第二个参数指定使用的md转html引擎，不为0则使用showdown，否则使用marked
    createprompt("md_pmpt",1,"large",1,0,1);
    getmdfile(mdname,engine,date,tags);
}

function getmdfile(mdname,e,d,t) {
    var request = new XMLHttpRequest();
    var mdc;
    request.open("get", "md/"+mdname+".md");
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            mdc = request.responseText;
            rendermdprompt(mdc,e,d,t);
        }
    }
}

function rendermdprompt(mdc,e,d,t) {
    var current = document.getElementsByClassName("prompt")[0];
    var innercon = document.createElement("div");
    innercon.className = "prompt_text mdpmpt";
    if (window.marked===undefined) {e=1};
    if (e) {
        var converter = new showdown.Converter(),
        text = mdc,
        html = converter.makeHtml(text);
    } else {
        text = mdc,
        html = marked.parse(text);
    }
    var meta;
    if (d && t) {
        meta = "<p class='article_top_text'><img src='icons/others/time.svg'>&nbsp;"+d+"&nbsp;&nbsp;&nbsp;<img src='icons/others/tag.svg'>&nbsp;"+t+"</p>";
    } else if (d) {
        meta = "<p class='article_top_text'><img src='icons/others/time.svg'>&nbsp;"+d+"</p>";
    }
    if (d) {
        if (html.indexOf("<h1>") == 0) {
            html = html.slice(0,html.indexOf("</h1>")+5)+meta+html.slice(html.indexOf("</h1>")+5)
        } else {
            html = meta+html
        }
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