req_sec_json();

function req_sec_json() {//循环请求存放section的json
    for (var i=1; i<7; i++) {
        req_specified_json(i);
    }
}

function req_specified_json(i) {//请求指定的json
    var request = new XMLHttpRequest();
    request.open("get", "json/section"+i+"_content.json");
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var info = JSON.parse(request.responseText);
            stitle_cont = info["stitle"]//标题
            sec_cont = info["content"]//内容
            sc_keys = Object.keys(sec_cont);
            sc_values = Object.values(sec_cont);
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
    for (var i=0; i<16; i++) {
        if (sc_keys[i]) {
            if (sc_keys[i].indexOf("sinfo") != -1) {
                var sinfo = document.createElement("div");
                sinfo.className = "sinfo";
                sinfo.innerHTML = sc_values[i];
                current_sec.appendChild(sinfo);
            }
            if (sc_keys[i].indexOf("slink") != -1) {
                var slink_container = document.createElement("div");
                var slink = document.createElement("a");
                slink.title = Object.values(sc_values[i])[0];
                slink.innerText = Object.values(sc_values[i])[1];
                slink.href = Object.values(sc_values[i])[2];
                if (Object.values(sc_values[i])[3]) {
                    var slk_command = Object.values(sc_values[i])[3];
                    slink.onclick = function(){eval(slk_command);console.log(slk_command)};
                }
                slink.className = "stitle2";
                slink.id = "slink";
                slink_container.id = "slink_container";
                current_sec.appendChild(slink_container);
                slink_container.appendChild(slink);
            }
            if (sc_keys[i].indexOf("screenshots") != -1) {
                var stitle2 = document.createElement("div");
                var sscreenshots = document.createElement("div");
                stitle2.className = "stitle2";
                stitle2.innerText = "屏幕截图";
                sscreenshots.className = "sscreenshots";
                current_sec.appendChild(stitle2);
                current_sec.appendChild(sscreenshots);
                var ss_pic = document.createElement("picture");
                ss_pic.className = "ss_pic";
                current_sec.getElementsByClassName("sscreenshots")[0].appendChild(ss_pic);
                var ss_pic_webp = document.createElement("source");
                var ss_pic_png = document.createElement("img");
                ss_pic_webp.srcset = Object.values(Object.values(sc_values[i])[1])[0];
                ss_pic_webp.type = "image/webp";
                ss_pic_png.src = Object.values(Object.values(sc_values[i])[0])[0];
                ss_pic_png.style.width = "100%";
                ss_pic_png.style.height = "100%";
                current_sec.getElementsByClassName("ss_pic")[0].appendChild(ss_pic_webp);
                current_sec.getElementsByClassName("ss_pic")[0].appendChild(ss_pic_png)
            }
        } else {
            break;
        }
    }
}