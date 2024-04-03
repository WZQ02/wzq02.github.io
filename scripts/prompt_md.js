var md_tags_list;
function gettaglist() {
    var request = new XMLHttpRequest();
    request.open("get", "json/md_tags.json");
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            md_tags_list = JSON.parse(request.responseText);
        }
    }
}
gettaglist();

function createmdprompt(mdname,engine,date,tags,allowcomments) {//第二个参数指定使用的md转html引擎，不为0则使用showdown，否则使用marked
    createprompt("md_pmpt",1,"large",1,0,1);
    getmdfile(mdname,engine,date,tags,allowcomments);
}

function getmdfile(mdname,e,d,t,a) {
    var request = new XMLHttpRequest();
    var mdc;
    if (!d) {//date值不存在时，查找tag_list中的date和tag
        try {
            var d = md_tags_list[mdname]["date"] || null
            var t = md_tags_list[mdname]["tags"] || null
        } catch(err) {}
    }
    if (a) {
        a = mdname
    }
    request.open("get", "md/"+mdname+".md");
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            mdc = request.responseText;
            rendermdprompt(mdc,e,d,t,a);
        } else {
            rendermdprompt("## 没有找到对应的文章额...");
        }
    }
}

function rendermdprompt(mdc,e,d,t,a) {
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
    if (a) {
        var comments = document.createElement("object");
        comments.data = '/comment/?type=blog_'+a
        comments.width = "100%"
        comments.height = "440"
        comments.type = "text/html"
        innercon.appendChild(comments);
    }
    current.appendChild(innercon);
}