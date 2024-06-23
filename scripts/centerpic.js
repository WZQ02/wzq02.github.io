const pic_list = ["front_1","front_2","front_3","front_4","front_5","front_6","front_7","front_8","front_9","front_10","front_11","front_12"];
var pic_size = 96;
var last_msd_pos = [];
function centerpic_initialize() {
    var centerpic_bg = document.createElement("div");
    centerpic_bg.style = "width: 100vw; height: 100vh;";
    centerpic_bg.onmousedown = function(e) {
        last_msd_pos[0] = e.clientX
        last_msd_pos[1] = e.clientY
    }
    centerpic_bg.onmouseup = function(e) {
        if (last_msd_pos[0] == e.clientX && last_msd_pos[1] == e.clientY) {
            cp_pos_changeall();
            click_record();
        }
    }
    document.getElementById("centerpic_container").appendChild(centerpic_bg);
    for (var i=0; i<pic_list.length; i++) {
        var pic = document.createElement("picture");
        pic.className = "centerpic_picelement";
        pic.id = pic_list[i];
        pic.style.position = "absolute";
        pic.style.left = "calc(50vw - "+pic_size/2+"px)";
        pic.style.top = "calc(50vh - "+pic_size/2+"px)";
        /*pic.style.display = "flex";
        pic.style.justifyContent = "center";
        pic.style.alignItems = "center";*/
        var initial_pos = cp_pos_initialize();
        pic.style.transform = "translate("+initial_pos[0]+"px,"+initial_pos[1]+"px) rotate("+Math.random()*360+"deg)";
        pic.style.opacity = 0.6;
        /*pic.onmouseover = function() {
            pic.style.opacity = 1;
        }
        pic.onmouseout = function() {
            pic.style.opacity = 0.35;
        }*/
        pic.style.transition = "transform 1s cubic-bezier(0.05, 0.2, 0, 1), opacity 0.25s";
        var source = document.createElement("source");
        source.srcset = "images/centerpic/"+pic_list[i]+".webp";
        source.type = "image/webp";
        var img = document.createElement("img");
        img.src = "images/centerpic/"+pic_list[i]+".png";
        img.height = pic_size;
        img.width = pic_size;
        img.style.opacity = 0;
        img.setAttribute('onload',"var a=document.querySelector('#"+pic_list[i]+"').childNodes[1];a.style.opacity=1;a.style.transition='0.25s';");
        pic.appendChild(source);
        pic.appendChild(img);
        pic.ondragstart = function(e) {//避免拖动图片元素
            e.preventDefault()
        }
        document.getElementById("centerpic_container").appendChild(pic);
    }
    pic_size_adj();
    setTimeout(function(){cp_pos_changeall()},5)
}
function cp_pos_initialize() {
    var edge_type = Math.ceil(Math.random()*4);
    var width = window.innerWidth;
    var height = window.innerHeight;
    switch (edge_type) {
        case 1:
            return [(width*-0.5),(height*(Math.random()-0.5))]
        case 2:
            return [(width*(Math.random()-0.5)),(height*-0.5)]
        case 3:
            return [(width*0.5),(height*(Math.random()-0.5))]
        case 4:
            return [(width*(Math.random()-0.5)),(height*0.5)]
    }
}
function pic_size_adj() {
    if (window.innerWidth <= 864 || window.innerHeight <= 640) {
        pic_size = 96;
    } else {
        pic_size = 144;
    }
    for (var i=0; i<pic_list.length; i++) {
        var pic = document.querySelector("#"+pic_list[i]);
        pic.childNodes[1].height = pic_size;
        pic.childNodes[1].width = pic_size;
    }
}
centerpic_initialize();

var timeoutcpposchg;
function cp_resize_control() {
    if (timeoutcpposchg) {
        clearTimeout(timeoutcpposchg);
    }
    timeoutcpposchg = setTimeout(function(){cp_pos_changeall();pic_size_adj()},250)
};
window.onresize = function(){cp_resize_control()};
function cp_pos_change(name,direction) {
    var change = document.getElementById(name);
    var xtf1=-0.5,xtf2=0.8,ytf1=-0.5,ytf2=0.8;
    switch (direction) {
        case 1://to left
            xtf1 = -1.4
            xtf2 = 0.4
            ytf2 = 1
            break
        case 2://to right
            xtf1 = 0.4
            xtf2 = 0.4
            ytf2 = 1
            break
        case 3://to down
            xtf2 = 1
            ytf1 = 0.4
            ytf2 = 0.4
            break
        case 4://to page2
            xtf2 = 1
            ytf1 = -1.4
            ytf2 = 0.4
            break
    }
    change.style.transform = "translate("+window.innerWidth*(Math.random()+xtf1)*xtf2+"px,"+window.innerHeight*(Math.random()+ytf1)*ytf2+"px) rotate("+Math.random()*360+"deg)"
}
function cp_pos_changeall(direction) {
    for (var i=0; i<pic_list.length; i++) {
        cp_pos_change(pic_list[i],direction);
    }
}
function cp_rewoke() {
    window.onresize = function(){cp_resize_control()};
    for (var i=0; i<pic_list.length; i++) {
        let initial_pos = cp_pos_initialize();
        document.querySelector("#"+pic_list[i]).style.transform = "translate("+initial_pos[0]+"px,"+initial_pos[1]+"px) rotate("+Math.random()*360+"deg)";
    }
    setTimeout(function(){cp_pos_changeall()},5);
}

//左右滑动手势
var pic_swipe = new Hammer(document.getElementById("centerpic_container"))
pic_swipe.on('swipeleft', function() {
    cp_pos_changeall(1)
    click_record()
})
pic_swipe.on('swiperight', function() {
    cp_pos_changeall(2)
    click_record()
})
pic_swipe.on('swiperight', function() {
    cp_pos_changeall(2)
    click_record()
})
var pic_swipe_2 = new Hammer(document.getElementById("centerpic_container"))
pic_swipe_2.get('swipe').set({direction: Hammer.DIRECTION_VERTICAL})//允许上下滑动
pic_swipe_2.on('swipedown', function() {
    cp_pos_changeall(3)
    click_record()
})
pic_swipe_2.on('swipeup', function() {
    cp_pos_changeall(4)
    click_record()
})

function cp_addprop() {
    for (let i=0; i<pic_list.length; i++) {
        let pic = document.getElementById(pic_list[i]);
        pic.onmouseover = function() {
            pic.style.opacity = 1;
        }
        pic.onmousedown = function() {
            pic.style.opacity = 0.35;
        }
        if (pic.id == "front_9") {
            pic.onmouseup = function() {
                pic.style.opacity = 1;
                liubing_trigger();
            }
        } else {
            pic.onmouseup = function() {
                pic.style.opacity = 1;
                cp_pos_change(pic.id);
                //console.log(pic.id)
                click_record();
            }
        }
        pic.onmouseout = function() {
            pic.style.opacity = 0.6;
        }
    }
}
cp_addprop();

var liubing_status=0,lbsb_autoremove,lbaudio,lbtrigger=0,lbm,lbn,dj=document.querySelector("#front_9").childNodes[1];
function liubing_trigger() {
    var wait = 400
    if (lbtrigger!=1) {
        lbtrigger=1;
        dj.style.opacity = 0.2
        lbn = setTimeout(function(){lbtrigger=0},wait)
        lbm = setTimeout(function(){cp_pos_change('front_9');dj.style.opacity = ""},wait)
    } else {
        dj.style.opacity = ""
        clearTimeout(lbm)
        clearTimeout(lbn)
        lbtrigger=0
        liubing()
    }
}
var djanim_timeout
function liubing(custom_music_url) {
    //var dj = document.querySelector("#front_9").childNodes[1];
    if (liubing_status == 0) {
        liubing_status = 1;
        if (djanim_timeout) {
            clearTimeout(djanim_timeout)
        }
        dj.style.animation = "spin 4s linear infinite";
        lbaudio = document.createElement("audio");
        lbaudio.autoplay = 1;
        //lbaudio.loop = 1;因为启用了自动切歌，不循环
        while (true) {
            var rand2 = Math.ceil(Math.random()*9);
            if (window.randprev2 != rand2) {
                break;
            }
        }
        var randprev = rand2;
        window.randprev2 = randprev;
        if (custom_music_url) {
            lbaudio.src = custom_music_url;
            createliubingspan("♫&nbsp;&nbsp;"+custom_music_url);
        } else {
            var aud_src_prefix = "https://demo.wzq02.top/otm_demos_ogg/";
            switch (rand2) {
                case 1:
                    lbaudio.src = aud_src_prefix+"dabig_dance.ogg";
                    createliubingspan("♫&nbsp;&nbsp;Dabig Dance.mp4");
                    break;
                case 2:
                    lbaudio.src = aud_src_prefix+"o108rocket.ogg";
                    createliubingspan("♫&nbsp;&nbsp;电棍：all in ♿你爸↑♿火箭少女♿♿♿丶");
                    break;
                case 3:
                    lbaudio.src = aud_src_prefix+"otto_control.ogg";
                    createliubingspan("♫&nbsp;&nbsp;电棍：思喂！♿控制♿♿（Mind Control）");
                    break;
                case 4:
                    lbaudio.src = aud_src_prefix+"gun_it_up_unfinished.ogg";
                    createliubingspan("♫&nbsp;&nbsp;电棍：Give It Up♿（未完成）");
                    break;
                case 5:
                    lbaudio.src = aud_src_prefix+"luv_the_giaoatic.ogg";
                    createliubingspan("♫&nbsp;&nbsp;Luv the GIAOatic???");
                    break;
                case 6:
                    lbaudio.src = aud_src_prefix+"invitation_from_mr_aniki.ogg";
                    createliubingspan("♫&nbsp;&nbsp;Invitation From Mr.Aniki♂");
                    break;
                case 7:
                    lbaudio.src = aud_src_prefix+"nigga.ogg";
                    createliubingspan("♫&nbsp;&nbsp;ruma");
                    break;
                case 8:
                    lbaudio.src = aud_src_prefix+"glitch_otto.ogg";
                    createliubingspan("♫&nbsp;&nbsp;【ottomania:2023】Glitch♿OTTO♿");
                    break;
                case 9:
                    lbaudio.src = aud_src_prefix+"what_is_hitech_unfinished.ogg";
                    createliubingspan("♫&nbsp;&nbsp;What♿is♿Hitech?（未完成）");
                    break
            }
            lbaudio.addEventListener("timeupdate",function(){
                if (lbaudio.duration - lbaudio.currentTime <=.2) {//当前音频结束时，自动触发两次liubing以切换到另一首
                    liubing();liubing()
                }
            })
        }
        document.body.appendChild(lbaudio);
    } else {
        liubing_status = 0;
        var audio = document.querySelector("audio")
        audio.removeAttribute('src')//先去除audio src属性，停止对之前的音频文件的请求
        audio.load()
        audio.parentNode.removeChild(audio);
        removeliubingspan();
        dj.style.animation = "spinstop 0.15s ease-out";
        djanim_timeout = setTimeout(function(){dj.style.animation = ""},145)
    }
}
function createliubingspan(title) {
    var abspan2 = document.createElement("span");
    abspan2.innerHTML = "<p>"+title+"</p>";
    abspan2.style.textAlign = "right";
    abspan2.style.animation = "appear .25s 1";
    abspan2.id = "liubingspan";
    document.getElementsByTagName("textrt")[0].appendChild(abspan2);
    lbsb_autoremove = setTimeout(function(){removeliubingspan()},5000)
}
function removeliubingspan() {
    clearTimeout(lbsb_autoremove);
    if (document.querySelector("#liubingspan")) {
        document.querySelector("#liubingspan").style.animation = 'disappear 0.25s';
        setTimeout(function(){document.getElementsByTagName("textrt")[0].removeChild(document.querySelector("#liubingspan"))},245)
    }
}

var cp_click_statistics = [0,0,0,0,0,0]
var cp_click_last5 = []
var statistic_entry_created = 0
function click_record() {
    var last_click_time = cp_click_statistics[0],
        last_click_duration = cp_click_statistics[1],
        shortest_click_duration = cp_click_statistics[2],
        cheated = cp_click_statistics[3],
        last5_speed = cp_click_statistics[4],
        last5_fastest = cp_click_statistics[5]
    if (cheated<3) {
        if (last_click_time!=0){
            var new_record=Date.now()-last_click_time
            if (new_record>=15){
                last_click_duration=new_record
                if (cheated) {
                    cheated--
                }
                cp_click_last5[cp_click_last5.length]=last_click_duration
                if (cp_click_last5.length>=6) {
                    cp_click_last5.splice(0,1)
                    var last5_sum_time=0
                    for (var i=0;i<5;i++) {
                        last5_sum_time = last5_sum_time+cp_click_last5[i]
                    }
                    last5_speed = Number(parseFloat(5000/last5_sum_time).toFixed(1))
                    if (statistic_entry_created==0 && last5_speed>=5) {
                        create_statistic_entry()
                        statistic_entry_created=1
                    }
                    if (last5_speed>=10) {
                        var last5_sum_diff=0
                        for (var i=1;i<5;i++) {
                            last5_sum_diff = last5_sum_diff+Math.abs(cp_click_last5[i]-cp_click_last5[i-1])
                        }
                        /*if (last5_sum_diff<10) {
                            cheated=3
                            console.log("检测到疑似连点器行为，已暂停统计点击速度。")
                            createalert("<h1 style='font-size: 56px'>连点器？</h1><p>没想到吧，我连连点检测都做出来了，哼哼...</p>",200)
                            last_click_duration = shortest_click_duration = last5_speed = last5_fastest = 0
                        }*/
                    }
                }
            } else {
                /*cheated++
                if (cheated >=3) {
                    console.log("两次点击间隔太短，已暂停统计点击速度。")
                    createalert("<h1 style='font-size: 56px'>脚本挂！？</h1><p>不是吧，这你都要开挂啊...</p>",174)
                    last_click_duration = shortest_click_duration = last5_speed = last5_fastest = 0
                }*/
            }
        }
        if (shortest_click_duration==0 || shortest_click_duration>last_click_duration){
            shortest_click_duration=last_click_duration
        }
        if (last5_fastest<last5_speed) {
            last5_fastest=last5_speed
        }
        last_click_time = Date.now()
        cp_click_statistics = [last_click_time,last_click_duration,shortest_click_duration,cheated,last5_speed,last5_fastest]
    }
}
function display_cp_click_statistics() {
    var msg1,msg2,msg3,msg4
    if (cp_click_statistics[1]) {
        msg1 = cp_click_statistics[1]/1000+" 秒"
        msg2 = cp_click_statistics[2]/1000+" 秒"
    } else {
        msg1 = msg2 = "未统计"
    }
    if (cp_click_statistics[4]) {
        msg3 = cp_click_statistics[4]+" 次 / 秒"
        msg4 = cp_click_statistics[5]+" 次 / 秒"
    } else {
        msg3 = msg4 = "未统计"
    }
    createalert("<h3>统计信息：</h3><p>上一次点击的时间间隔："+msg1+"</p><p>最短的点击时间："+msg2+"</p><p>最近 5 次的平均点击速度："+msg3+"</p><p>5 次点击平均速度最快："+msg4+"</p><p>统计数据将不会保存。<br>刷新或关闭本页后，数据将被重置。</p>",314)
}
function create_statistic_entry() {
    var a = document.createElement("a");
    a.title = "查看统计信息";
    a.onmousedown = function(){display_cp_click_statistics()};
    var a2 = document.createElement("div");
    a2.class = "othlnk";
    var a3 = document.createElement("span");
    a3.innerText = "查看统计信息";
    a2.appendChild(a3);
    a.appendChild(a2);
    document.querySelector("#othlnks").appendChild(a)
}