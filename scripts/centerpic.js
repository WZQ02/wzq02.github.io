var timeoutchgcenterpic = "";
if (visited == "1") {
    autochgcenterpic();
    timeoutchgcenterpic = setInterval("chgcenterpic()","15000");//自动切换中央图片
} else {
    setTimeout("onclickchgcenterpic()","30000");
}
var lock_ctp = 1;
function onclickchgcenterpic() {
    if (lock_ctp) {
        chgcenterpic();
        clearInterval(timeoutchgcenterpic);//重置计时器
        timeoutchgcenterpic = setInterval("chgcenterpic()","15000");
        setTimeout("lock_ctp = 1",1000);//重置锁
    }
}
function chgcenterpic() {//更改中央图片
    var centerpic = document.getElementById("centerpic");
    centerpic.style.animation = "icogo 0.4s cubic-bezier(0.4, 0, 1, 0) 1";
    setTimeout("autochgcenterpic()","400");
    setTimeout(function(){centerpic.style.animation = "icoshowup 0.4s cubic-bezier(0, 0.4, 0, 1) 1";},"400");
}
function autochgcenterpic() {
    var centerpics = document.getElementsByClassName("centerpik");
    while (true) {
        var rand1 = Math.ceil(Math.random()*12);
        if (window.randprev != rand1) {//确保下一次展示的图片不与上一次的重复
            break;
        }
    }
    var randprev = rand1;
    window.randprev = randprev;
    centerpics[0].setAttribute('srcset',"images/centerpic/front_"+rand1+".webp");
    centerpics[1].setAttribute('src',"images/centerpic/front_"+rand1+".png");
    centerpics[1].style="opacity:0;transition:none";
    centerpics[1].setAttribute('onload',"document.getElementsByClassName('centerpik')[1].style='opacity:1;transition:0.25s'");
    if (rand1 == 9) {
        centerpics[1].setAttribute('onmousedown',"liubing1()");
        centerpics[1].setAttribute('onmouseup',"liubing2()");
        centerpics[1].setAttribute('islizi',"1");
        if ('centerpik liuing' == centerpics[1].getAttribute("class")) {
            centerpics[1].style.animation = "spin 7s linear infinite";
        }
    } else {
        centerpics[1].setAttribute('onmousedown',"");
        centerpics[1].setAttribute('onmouseup',"");
        centerpics[1].setAttribute('islizi',"");
        centerpics[1].style.animation = "";
    }
}
function liubing() {
    var lizi = document.getElementsByClassName("centerpik")[1];
    //var liubingad = new Audio("https://wzq02.cf:893/bones.ogg");
    if ('centerpik liuing' == lizi.getAttribute("class")) {
        lizi.classList.remove('liuing');
        lizi.style.animation = "spinstop 0.15s ease-out";
        setTimeout(function(){lizi.style.animation = ""},145)
        var audio = document.querySelector("audio")
        audio.parentNode.removeChild(audio);
        removeliubingspan();
    } else {
        var liubingad = document.createElement("audio");
        lizi.classList.add('liuing');
        if (lizi.getAttribute("islizi") == "1") {
            lizi.style.animation = "spin 7s linear infinite";
        }
        liubingad.autoplay = "autoplay";
        liubingad.loop = "loop";
        while (true) {
            var rand2 = Math.ceil(Math.random()*8);
            if (window.randprev2 != rand2) {
                break;
            }
        }
        var randprev = rand2;
        window.randprev2 = randprev;
        if (rand2 == 1) {
            liubingad.src = "https://wzq02.cf/demos/otm_demos_ogg/dabig_dance.ogg";
            createliubingspan("♫&nbsp;&nbsp;Dabig Dance.mp4");
        } else if (rand2 == 2) {
            liubingad.src = "https://wzq02.cf/demos/otm_demos_ogg/o108rocket.ogg";
            createliubingspan("♫&nbsp;&nbsp;电棍：all in ♿你爸↑♿火箭少女♿♿♿丶");
        } else if (rand2 == 3) {
            liubingad.src = "https://wzq02.cf/demos/otm_demos_ogg/otto_control.ogg";
            createliubingspan("♫&nbsp;&nbsp;电棍：思喂！♿控制♿♿（Mind Control）");
        } else if (rand2 == 4) {
            liubingad.src = "https://wzq02.cf/demos/otm_demos_ogg/gun_it_up_unfinished.ogg";
            createliubingspan("♫&nbsp;&nbsp;电棍：Give It Up♿（未完成）");
        } else if (rand2 == 5) {
            liubingad.src = "https://wzq02.cf/demos/otm_demos_ogg/luv_the_giaoatic.ogg";
            createliubingspan("♫&nbsp;&nbsp;Luv the GIAOatic???");
        } else if (rand2 == 6) {
            liubingad.src = "https://wzq02.cf/demos/otm_demos_ogg/invitation_from_mr_aniki.ogg";
            createliubingspan("♫&nbsp;&nbsp;Invitation From Mr.Aniki♂");
        } else if (rand2 == 7) {
            liubingad.src = "https://wzq02.cf/demos/otm_demos_ogg/nigga.ogg";
            createliubingspan("♫&nbsp;&nbsp;ruma");
        } else {
            liubingad.src = "https://wzq02.cf/demos/otm_demos_ogg/glitch_otto.ogg";
            createliubingspan("♫&nbsp;&nbsp;【ottomania:2023】Glitch♿OTTO♿");
        }
        document.body.appendChild(liubingad);
    }
}
function liubing1() {
    aliubing = setTimeout("liubing(); lock_ctp = 0; liubing3()",1000);
}
function liubing2() {
    clearTimeout(aliubing);
    setTimeout("lock_ctp = 1",0);
}
function liubing3() {
    var lizi = document.getElementsByClassName("centerpik")[1];
    if ('centerpik liuing' == lizi.getAttribute("class")) {
        clearInterval(timeoutchgcenterpic);
    } else {
        clearInterval(timeoutchgcenterpic);
        timeoutchgcenterpic = setInterval("chgcenterpic()","15000");
    }
}
function createliubingspan(title) {
    var abspan2 = document.createElement("span");
    abspan2.innerHTML = "<p>"+title+"</p>";
    abspan2.style.textAlign = "right";
    abspan2.style.animation = "appear .25s 1";
    abspan2.id = "liubingspan";
    document.getElementsByTagName("textrt")[0].appendChild(abspan2);
}
function removeliubingspan() {
    document.getElementsByTagName("textrt")[0].removeChild(document.querySelector("#liubingspan"));
}