function createmdprompt(mdname) {
    createprompt("md_pmpt",1,"large",1,0,1);
    getmdfile(mdname);
}

function getmdfile(mdname) {
    var request = new XMLHttpRequest();
    var mdc;
    request.open("get", "md/"+mdname+".md");
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            mdc = request.responseText;
            rendermdprompt(mdc);
        }
    }
}

function rendermdprompt(mdc) {
    var current = document.getElementsByClassName("prompt")[0];
    var innercon = document.createElement("div");
    innercon.className = "prompt_text mdpmpt";
    var converter = new showdown.Converter(),
    text = mdc,
    html = converter.makeHtml(text);
    innercon.innerHTML = html;
    current.appendChild(innercon);
}

function showmdcontent() {
    var a_sc_group = document.getElementsByClassName("article_shortcut");
    if (a_sc_group[0].attributeStyleMap.get('display') == "block") {
        for (i=0; i<64; i++) {
            if (a_sc_group[i]) {
                a_sc_group[i].attributeStyleMap.set('display','none');
            }
        }
        document.getElementById("md_expand").innerText = "展开";
    } else {
        for (i=0; i<64; i++) {
            if (a_sc_group[i]) {
                a_sc_group[i].attributeStyleMap.set('display','block');
                a_sc_group[i].attributeStyleMap.set('animation','appear 0.4s ease 1');
            }
        }
        document.getElementById("md_expand").innerText = "收起";
    }
}