req_sec_json();

function okeys(obj) {
    return Object.keys(obj)
}
function ovalues(obj) {
    if (Object.values) {
        return Object.values(obj)
    } else {//不兼容object.values的浏览器
        return Object.keys(obj).map(function(key){return obj[key]});
    }
}

function req_sec_json() {//循环请求存放section的json
    for (var i=1; i<7; i++) {
        req_specified_json(i);
    }
}

function req_specified_json(i) {//请求指定的json
    var request = new XMLHttpRequest();
    request.open("get", "/json/section"+i+"_content.json");
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var info = JSON.parse(request.responseText);
            var stitle_cont = info["stitle"]//标题
            var sec_cont = info["content"]//内容
            var sc_keys = okeys(sec_cont);
            var sc_values = ovalues(sec_cont);
            createsection(i,stitle_cont);
            section_addstuff(i,sc_keys,sc_values);
        }
    }
}

function createsection(sec_num,stitle_cont) {//创建section
    var stitle = document.createElement("div");
    stitle.innerHTML = stitle_cont;
    stitle.className = "stitle";
    document.getElementById("section"+sec_num).appendChild(stitle);
}

function section_addstuff(sec_num,sc_keys,sc_values) {//section中添加内容
    var current_sec = document.getElementById("section"+sec_num);
    var j=0;
    for (var i=0; i<127; i++) {
        if (sc_keys[i]) {
            if (sc_keys[i].indexOf("sinfo") != -1) {
                createsinfo(i,current_sec,sc_values)
            }
            if (sc_keys[i].indexOf("slink") != -1) {
                createslink(i,current_sec,sc_values)
            }
            /*if (sc_keys[i].indexOf("stitle2") != -1) {
                createcustomstitle(i,current_sec,sc_values)
            }*/
            if (sc_keys[i].indexOf("screenshots") != -1) {
                createsscreenshots(i,current_sec,sc_values,j);
                j++
            }
            if (sc_keys[i].indexOf("article_shortcut") != -1) {
                createarticleshort(i,current_sec,sc_values)
            }
        } else {
            break;
        }
    }
}

function createsinfo(i,current_sec,sc_values) {
    var sinfo = document.createElement("div");
    sinfo.className = "sinfo";
    sinfo.innerHTML = sc_values[i];
    current_sec.appendChild(sinfo);
}
/*function createcustomstitle(i,current_sec,sc_values) {
    var stitie2 = document.createElement("span");
    stitie2.className = "stitie2 title";
    stitie2.innerHTML = sc_values[i];
    current_sec.appendChild(stitie2);
}*/
function createslink(i,current_sec,sc_values) {
    var slink_container = document.createElement("div");
    var slink = document.createElement("a");
    slink.id = ovalues(sc_values[i])[0];
    slink.title = ovalues(sc_values[i])[1];
    slink.innerText = ovalues(sc_values[i])[2];
    slink.href = ovalues(sc_values[i])[3];
    slink.className = "stitle2 slink";
    slink_container.id = "slink_container";
    current_sec.appendChild(slink_container);
    slink_container.appendChild(slink);
    if (ovalues(sc_values[i])[4]) {
        var slk_command = ovalues(sc_values[i])[4];
        slink.onclick = function(){eval(slk_command);};
    }
}
function createsscreenshots(i,current_sec,sc_values,j) {
    var stitle2 = document.createElement("div");
    var sscreenshots = document.createElement("div");
    stitle2.className = "stitle2 title";
    stitle2.innerText = "屏幕截图";
    sscreenshots.className = "sscreenshots";
    current_sec.appendChild(stitle2);
    current_sec.appendChild(sscreenshots);
    if (current_sec.getElementsByClassName("sscreenshots")[j]) {
        var ss_pic = document.createElement("picture");
        ss_pic.className = "ss_pic";
        current_sec.getElementsByClassName("sscreenshots")[j].appendChild(ss_pic);
        var ss_pic_webp = document.createElement("source");
        var ss_pic_png = document.createElement("img");
        ss_pic_webp.srcset = ovalues(ovalues(sc_values[i])[1])[0];
        ss_pic_webp.type = "image/webp";
        ss_pic_png.src = ovalues(ovalues(sc_values[i])[0])[0];
        ss_pic_png.style.width = "100%";
        ss_pic_png.style.height = "100%";
        current_sec.getElementsByClassName("ss_pic")[j].appendChild(ss_pic_webp);
        current_sec.getElementsByClassName("ss_pic")[j].appendChild(ss_pic_png)
    }
}
function createarticleshort(i,current_sec,sc_values) {
    var a_sc = document.createElement("div");
    var a_sc_text = document.createElement("div");
    a_sc.className = "article_shortcut";
    a_sc_text.className = "article_shortcut_text";
    var mdtitle = ovalues(sc_values[i])[0];
    var mddate = ovalues(sc_values[i])[1];
    var mdname = ovalues(sc_values[i])[2];
    if (ovalues(sc_values[i])[3]) {
        var tags = ovalues(sc_values[i])[3];
        var tags_html = "&nbsp;&nbsp;&nbsp;&nbsp;<img src='icons/others/tag.svg'>&nbsp;"+tags
        var extra = ',\"'+mddate+'\",\"'+tags+'\"'
    } else {
        var tags_html = ""
        var extra = ',\"'+mddate+'\"'
    }
    a_sc_text.setAttribute('onclick',"createmdprompt("+mdname+",0"+extra+")")
    var a_sc_text_mdt = document.createElement("mdtitle");
    a_sc_text_mdt.innerHTML = mdtitle+"<br>";
    var a_sc_text_mdt2 = document.createElement("mdtitle2");
    a_sc_text_mdt2.innerHTML = "<img src='icons/others/time.svg'>&nbsp;"+mddate+tags_html
    current_sec.appendChild(a_sc);
    a_sc.appendChild(a_sc_text);
    a_sc_text.appendChild(a_sc_text_mdt);
    a_sc_text.appendChild(a_sc_text_mdt2)
}