let md_tags_list,marked_loaded,showdown_loaded,marked_failed;
const showdown_path = "./scripts/3rdparty/showdown.min.js"
const marked_path = "./scripts/3rdparty/marked.min.js"
const icon_path = "./assets/icons/mdi/"

function createmdwindow(mdname,engine,date,tags,allowcomments) {
    // 第二个参数指定使用的md转html引擎，不为0则使用showdown，否则使用marked
    createwindow("md",1,2,1,0,1,document.getElementById(mdname))
    function afterwards() {
        getmdfile(mdname,engine,date,tags,allowcomments)
    }
    //考虑到部分支持ES6的浏览器仍然不能正常使用marked，在此做兼容性处理
    if (marked_failed) {//上一次加载marked失败，则直接指定engine为1
        engine = 1
    }
    if (engine && !showdown_loaded) {//首次加载showdown
        loadJS(showdown_path,()=>{afterwards();showdown_loaded = 1})
    } else if (!marked_loaded) {//首次加载marked
        loadJS(marked_path,()=>{
            if (window.marked===undefined) {//marked不兼容的处理，fallback到showdown
                engine = 1
                loadJS(showdown_path,()=>{afterwards();showdown_loaded = 1;marked_failed = 1})
                return
            } else {
                afterwards();marked_loaded = 1
            }
        })
    } else {
        afterwards()
    }
}

function getmdfile(mdname,e,d,t,a) {
    if (!d) {//date值不存在时，查找tag_list中的date和tag
        try {
            let d = md_tags_list[mdname]["date"] || null
            let t = md_tags_list[mdname]["tags"] || null
        } catch(err) {}
    }
    if (a) {
        a = mdname
    }
    if (window.i18nextify&&window.i18nextify.i18next.language.indexOf("en") != -1) {//英文语言
        getmdfile2(mdname,e,d,t,a,1)
    } else {
        getmdfile2(mdname,e,d,t,a)
    }
}

function getmdfile2(mdname,e,d,t,a,en_mark) {
    let request = new XMLHttpRequest();
    let mdc;
    if (en_mark == 1) {
        request.open("get", "./md/en/"+mdname+".md");
    } else {
        request.open("get", "./md/"+mdname+".md");
    }
    request.send(null);
    request.onload = () => {
        if (request.status == 200) {
            mdc = request.responseText;
            rendermdwindow(mdc,e,d,t,a,en_mark);
        } else {
            if (en_mark == 1) {
                getmdfile2(mdname,e,d,t,a,2)
            } else {
                rendermdwindow("## 没有找到对应的文章额...");
            }
        }
    }
}

function rendermdwindow(mdc,e,d,t,a,m) {
    let current = document.getElementsByClassName("window")[0];
    let innercon = document.createElement("div");
    innercon.className = "wn_text mdwn";
    let text,html
    if (e) {
        let converter = new showdown.Converter(),
        text = mdc,
        html = converter.makeHtml(text);
    } else {
        text = mdc,
        html = marked.parse(text);
    }
    let meta;
    if (d && t) {
        meta = "<p class='article_top_text'><img src='"+icon_path+"time.svg'>&nbsp;"+d+"&nbsp;&nbsp;&nbsp;<img src='"+icon_path+"tag.svg'>&nbsp;"+t+"</p>";
    } else if (d) {
        meta = "<p class='article_top_text'><img src='"+icon_path+"time.svg'>&nbsp;"+d+"</p>";
    }
    if (m == 2) {
        meta += '<notice>This article is not available in English yet. Consider using browser translation.</notice>\n'
    }
    if (d) {
        if (html.indexOf("<h1>") == 0) {
            html = html.slice(0,html.indexOf("</h1>")+5)+meta+html.slice(html.indexOf("</h1>")+5)
        } else {
            html = meta+html
        }
    }
    innercon.innerHTML = html;
    for (let i=0; i<128; i++) {
        if (innercon.childNodes[i]) {
            if (typeof(innercon.childNodes[i].childNodes[0]) == "object") {
                if (innercon.childNodes[i].childNodes[0].alt) {
                    let alt_text = document.createElement("p");
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
        let comments = document.createElement("object");
        comments.data = '/comment/?type=blog_'+a
        comments.width = "100%"
        comments.height = "440"
        comments.type = "text/html"
        innercon.appendChild(comments);
    }
    innercon.style = 'opacity:0'
    if (document.getElementsByClassName("mdwn")[0]) {//如果append前已存在,mdwn，将其去除
        current.removeChild(document.getElementsByClassName("mdwn")[0])
    }
    current.appendChild(innercon);
    setTimeout(function(){innercon.style = ''},5)
}