function autoredirect(){var e=window.location.href;-1==e.indexOf(".cf:")&&-1==e.indexOf(".215")&&-1==e.indexOf("acg.tv")||(window.location.href="https://wzq02.cf/")}function setCookie(e,t,n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);o="expires="+o.toGMTString();document.cookie=e+"="+t+"; "+o}function getCookie(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){var s=n[o].trim();if(0==s.indexOf(t))return s.substring(t.length,s.length)}return""}function C2Stransfer(e){var t=getCookie(e);""!=t&&(localStorage.setItem(e,t),setCookie(e,"",-1))}for(autoredirect(),c2l_list=["visited","themecolor","bgurl","backgroundenabled","lite_mode"],i=0;i<=c2l_list.length;i++)C2Stransfer(c2l_list[i]);function autochgthemecolor(){var e=localStorage.getItem("themecolor");null!=e&&(document.getElementById("color_scheme").href="css/cs_"+e+".css")}autochgthemecolor();var lock_csc=1;function showcschooser(){var e;lock_csc&&(lock_csc=0,"block"==(e=document.getElementById("cschooser")).style.display?hidecschooser():e.style.display="block",setTimeout(function(){lock_csc=1},"250"))}function themecolor(e){hidecschooser(),e?(localStorage.setItem("themecolor",e),document.getElementById("color_scheme").href="css/cs_"+e+".css"):(localStorage.removeItem("themecolor"),document.getElementById("color_scheme").href="")}function hidecschooser(){var e=document.getElementById("cschooser");e.style.animation="lnkhide2 0.25s cubic-bezier(0, 0, 0.67, 0) 1",setTimeout(function(){e.style.display="none",e.style.animation=""},"245")}var visited=localStorage.getItem("visited");null==visited&&localStorage.setItem("visited","1"),tip1();var section1=document.getElementById("section1"),section2=document.getElementById("section2"),section3=document.getElementById("section3"),section4=document.getElementById("section4"),section5=document.getElementById("section5");section1.classList.add("secdisplay"),suffixdetect(),highlightseclnk();var lock_lnk=1,showlt="";function lnklist(){var e=document.getElementById("othlnks"),t=document.getElementById("lt");"block"==e.style.display?lock_lnk&&(lock_lnk=0,e.style.animation="lnkhide 0.2s cubic-bezier(1, 0, 1, 1) 1",setTimeout(function(){e.style.animation="",e.style.display="none"},"195"),setTimeout(function(){lock_lnk=1},"200"),showlt=setTimeout(function(){t.style.transition="1s",t.style.opacity="1.0"},"2000")):(lock_lnk=0,clearTimeout(showlt),t.style.animation="none",e.style.display="block",t.style.transition="0.25s",t.style.opacity="0",setTimeout(function(){lock_lnk=1},"250"))}function chglang(){var e=window.i18nextify.i18next.language,t=window.location.href,t=-1!=e.indexOf("zh")?t.replace(/(\?|#)[^'"]*/,"")+"?lng=en":t.replace(/(\?|#)[^'"]*/,"")+"?lng=zh";window.history.pushState({},0,t),window.i18nextify.init();t=new XMLHttpRequest;t.open("get","locales/"+e+"/translation.json"),t.send(null),t.onload=function(){setTimeout(function(){window.i18nextify.forceRerender()},50)}}function tip1(){var e=document.getElementById("tip1");e.style.display="none",DetectIEVer()<=12&&(document.body.style.backgroundColor="#EEE",e.style.display="block","zh-CN"==navigator.language?e.innerHTML="<span>*检测到你正在使用 Internet Explorer，页面内容将不会按照预期显示，请更换浏览器。</span>":e.innerHTML="<span>*You are using Internet Explorer. Content on this page would not display as intended.</span>")}var lock1=1;function scrolltopage2(){lock1&&(lock1=0,scrolltopage2a(),setTimeout(function(){lock1=1},"500"))}function scrolltopage2a(){var e=document.getElementById("centerpic"),t=document.getElementById("toscr2"),n=document.getElementById("links"),o=document.getElementById("page2");o.classList.add("pagedisplay"),e.style.animation="pg1go 0.25s cubic-bezier(0.4, 0, 1, 0) 1",t.style.animation="pg1go 0.25s cubic-bezier(0.4, 0, 1, 0) 1",n.style.animation="disappear 0.5s 1",hidecschooser(),setTimeout(function(){o.style.animation="pg2showup 0.25s cubic-bezier(0, 0.4, 0, 1) 1",o.style.display="block",t.style.display="none",e.style.display="none"},"250"),setTimeout(function(){n.style.display="none"},"500");var s=document.getElementById("othlnks"),i=document.getElementById("lt");"block"==s.style.display&&(setTimeout(function(){s.style.animation="lnkhide 0.15s cubic-bezier(1, 0, 1, 1) 1"},"150"),setTimeout(function(){s.style.animation="",s.style.display="none"},"245"),setTimeout(function(){i.style.transition="1s",i.style.opacity="1.0"},"250"))}function scrolltopage1(){lock1&&(lock1=0,scrolltopage1a(),setTimeout(function(){lock1=1},"500"),-1!=window.location.href.indexOf("#/")&&(window.location.href="#/"))}function scrolltopage1a(){var e=document.getElementById("centerpic"),t=document.getElementById("toscr2"),n=document.getElementById("links"),o=document.getElementById("page2");o.classList.remove("pagedisplay"),o.style.animation="pg2go 0.25s cubic-bezier(0.4, 0, 1, 0) 1",setTimeout(function(){o.style.display="none",e.style.display="block",t.style.display="block",n.style.display="block"},"250"),e.style.animation="pg1showup 0.25s cubic-bezier(0, 0.4, 0, 1) 1",t.style.animation="pg1showup 0.25s cubic-bezier(0, 0.4, 0, 1) 1",n.style.animation="appear 0.5s 1"}function secleft(){var seccurrent,seccurnum;"pagedisplay"==document.getElementById("page2").getAttribute("class")&&(seccurrent=document.getElementsByClassName("secdisplay")[0],seccurnum=parseInt(seccurrent.getAttribute("id").substring(7)),seccurnum<6&&displaysec(eval("section"+(seccurnum+1))))}function secright(){var seccurrent,seccurnum;"pagedisplay"==document.getElementById("page2").getAttribute("class")&&(seccurrent=document.getElementsByClassName("secdisplay")[0],seccurnum=parseInt(seccurrent.getAttribute("id").substring(7)),1<seccurnum&&displaysec(eval("section"+(seccurnum-1))))}function highlightseclnk(){document.getElementsByClassName("lnkhighlight")[0]&&(document.getElementsByClassName("lnkhighlight")[0].style.opacity="1.0")}function addhighlgt(){var seccurrent=document.getElementsByClassName("secdisplay")[0],seccurnum=parseInt(seccurrent.getAttribute("id").substring(7));eval("seclink"+seccurnum).childNodes[0].classList.add("lnkhighlight")}function removehighlgt(){var seccurrent=document.getElementsByClassName("secdisplay")[0],seccurnum=parseInt(seccurrent.getAttribute("id").substring(7));document.getElementsByClassName("lnkhighlight")[0]&&(document.getElementsByClassName("lnkhighlight")[0].style.opacity=""),eval("seclink"+seccurnum).childNodes[0].classList.remove("lnkhighlight")}var lock2=1;function displaysec(e){lock2&&(lock2=0,displayseca(e),setTimeout(function(){lock2=1},"410"))}function displayseca(e){var t=document.getElementsByClassName("secdisplay")[0],n=e;t.getAttribute("id")<n.getAttribute("id")?(t.style.animation="secgo 0.4s cubic-bezier(0.4, 0, 1, 0) 1",setTimeout(function(){t.classList.remove("secdisplay"),n.classList.add("secdisplay"),n.style.animation="secshowup 0.4s cubic-bezier(0, 0.4, 0, 1) 1"},"400")):t.getAttribute("id")>n.getAttribute("id")&&(t.style.animation="secgo2 0.4s cubic-bezier(0.4, 0, 1, 0) 1",setTimeout(function(){t.classList.remove("secdisplay"),n.classList.add("secdisplay"),n.style.animation="secshowup2 0.4s cubic-bezier(0, 0.4, 0, 1) 1"},"400")),removehighlgt(),setTimeout(function(){addhighlgt(),highlightseclnk()},"410"),window.removeEventListener("resize",checkscrollonresize),t.removeEventListener("scroll",checkscrollonscroll),sec_scroll_r=sec_scroll_l=0,setTimeout(function(){checkscrollonsecalter(n),window.addEventListener("resize",checkscrollonresize),n.addEventListener("scroll",checkscrollonscroll)},"405")}function checkscrollonsecalter(e){sec_scroll_l=e.scrollHeight-e.clientHeight-e.scrollTop<4?1:0,sec_scroll_r=e.scrollTop<2?1:0}function checkscrollonscroll(){checkscrollonsecalter(this)}function checkscrollonresize(){setTimeout(function(){checkscrollonsecalter(document.getElementsByClassName("secdisplay")[0])},"250")}function suffixdetect(){setTimeout("suffixdetecta()","0")}function suffixdetecta(){-1!=window.location.href.indexOf("forcesysfont")&&(document.body.style.fontFamily="'Microsoft YaHei',微软雅黑")}var sec_scroll_l=1,sec_scroll_r=1,scrollFunc=function(e){e=e||window.event;var t=document.getElementsByClassName("secdisplay")[0];e.wheelDelta<0?(sec_scroll_l&&secleft(),setTimeout(function(){scrolltopage2()},"0")):0<e.wheelDelta?sec_scroll_r&&("section1"==t.getAttribute("id")&&scrolltopage1(),secright()):0<e.detail?(sec_scroll_l&&secleft(),setTimeout(function(){scrolltopage2()},"0")):e.detail<0&&sec_scroll_r&&("section1"==t.getAttribute("id")&&scrolltopage1(),secright())};function req_sec_json(){for(var e=1;e<7;e++)req_specified_json(e)}function req_specified_json(o){var s=new XMLHttpRequest;s.open("get","json/section"+o+"_content.json"),s.send(null),s.onload=function(){var e,t,n;200==s.status&&(e=(t=JSON.parse(s.responseText)).stitle,n=t.content,t=Object.keys(n),n=Object.values(n),createsection(o,e),section_addstuff(o,t,n))}}function createsection(e,t){var n=document.createElement("div");n.innerHTML=t,n.className="stitle",document.getElementById("section"+e).appendChild(n)}function section_addstuff(e,t,n){for(var o=document.getElementById("section"+e),s=0,i=0;i<127&&t[i];i++)-1!=t[i].indexOf("sinfo")&&createsinfo(i,o,n),-1!=t[i].indexOf("slink")&&createslink(i,o,n),-1!=t[i].indexOf("screenshots")&&(createsscreenshots(i,o,n,s),s++),-1!=t[i].indexOf("article_shortcut")&&createarticleshort(i,o,n)}function createsinfo(e,t,n){var o=document.createElement("div");o.className="sinfo",o.innerHTML=n[e],t.appendChild(o)}function createslink(i,current_sec,sc_values){var slink_container=document.createElement("div"),slink=document.createElement("a"),slk_command;slink.id=Object.values(sc_values[i])[0],slink.title=Object.values(sc_values[i])[1],slink.innerText=Object.values(sc_values[i])[2],slink.href=Object.values(sc_values[i])[3],slink.className="stitle2 slink",slink_container.id="slink_container",current_sec.appendChild(slink_container),slink_container.appendChild(slink),Object.values(sc_values[i])[4]&&(slk_command=Object.values(sc_values[i])[4],slink.onclick=function(){eval(slk_command)})}function createsscreenshots(e,t,n,o){var s=document.createElement("div"),i=document.createElement("div");s.className="stitle2 title",s.innerText="屏幕截图",i.className="sscreenshots",t.appendChild(s),t.appendChild(i),t.getElementsByClassName("sscreenshots")[o]&&((s=document.createElement("picture")).className="ss_pic",t.getElementsByClassName("sscreenshots")[o].appendChild(s),i=document.createElement("source"),s=document.createElement("img"),i.srcset=Object.values(Object.values(n[e])[1])[0],i.type="image/webp",s.src=Object.values(Object.values(n[e])[0])[0],s.style.width="100%",s.style.height="100%",t.getElementsByClassName("ss_pic")[o].appendChild(i),t.getElementsByClassName("ss_pic")[o].appendChild(s))}function createarticleshort(e,t,n){var o=document.createElement("div"),s=document.createElement("div");o.className="article_shortcut",s.className="article_shortcut_text";var i,c,l=Object.values(n[e])[0],a=Object.values(n[e])[1],r=Object.values(n[e])[2];c=Object.values(n[e])[3]?(i="&nbsp;&nbsp;&nbsp;&nbsp;<img src='icons/others/tag.svg'>&nbsp;"+(c=Object.values(n[e])[3]),',"'+a+'","'+c+'"'):(i="",',"'+a+'"'),s.innerHTML="<div href='javascript:void(0)' onclick='createmdprompt("+r+",0"+c+")'><mdtitle>"+l+"</mdtitle><br><mdtitle2><img src='icons/others/time.svg'>&nbsp;"+a+i+"</mdtitle2></div>",t.appendChild(o),o.appendChild(s)}function hidegfsites(){var e=getCookie("gfstate"),t=document.getElementsByClassName("outcn");if(""==e)for(var n=0;n<t.length;n++)t[n].style.display="none";else for(n=0;n<t.length;n++)t[n].style.display="inline"}document.addEventListener&&document.addEventListener("DOMMouseScroll",scrollFunc,!1),window.onmousewheel=document.onmousewheel=scrollFunc,req_sec_json(),hidegfsites();var detectgwfworker=new Worker("scripts/detectgwf.js");detectgwfworker.onmessage=function(e){0==e.data&&(setCookie("gfstate","1",7),hidegfsites())};var bodyscroll=new Hammer(document.body);bodyscroll.get("swipe").set({direction:Hammer.DIRECTION_VERTICAL}),bodyscroll.on("swipeup",function(e){scrolltopage2()}),bodyscroll.on("swipedown",function(e){scrolltopage1()}),bodyscroll.on("panup",function(e){scrolltopage2()}),bodyscroll.on("pandown",function(e){scrolltopage1()});var bodyscroll2=new Hammer(page2);bodyscroll2.on("swipeleft",function(e){secleft(),resetbodyscroll3()}),bodyscroll2.on("swiperight",function(e){secright(),resetbodyscroll3()});var bodyscroll3=new Hammer(document.getElementsByClassName("secdisplay")[0]);function resetbodyscroll3(){setTimeout(function(){bodyscroll3=Hammer(document.getElementsByClassName("secdisplay")[0])},"500")}var timeoutchgcenterpic="";"1"==visited?(autochgcenterpic(),timeoutchgcenterpic=setInterval("chgcenterpic()","15000")):setTimeout("onclickchgcenterpic()","30000");var lock_ctp=1,aliubing,autoremove,default_bgurl,default_bgurl;function onclickchgcenterpic(){lock_ctp&&(chgcenterpic(),clearInterval(timeoutchgcenterpic),timeoutchgcenterpic=setInterval("chgcenterpic()","15000"),setTimeout("lock_ctp = 1",1e3))}function chgcenterpic(){var e=document.getElementById("centerpic");e.style.animation="icogo 0.4s cubic-bezier(0.4, 0, 1, 0) 1",setTimeout("autochgcenterpic()","400"),setTimeout(function(){e.style.animation="icoshowup 0.4s cubic-bezier(0, 0.4, 0, 1) 1"},"400")}function autochgcenterpic(e){var t=document.getElementsByClassName("centerpik");if(e&&e<=12&&0<e)n=Math.ceil(e);else for(;;){var n=Math.ceil(12*Math.random());if(window.randprev!=n)break}window.randprev=n,t[0].setAttribute("srcset","images/centerpic/front_"+n+".webp"),t[1].setAttribute("src","images/centerpic/front_"+n+".png"),t[1].style.opacity="0",t[1].style.transition="none",t[1].setAttribute("onload","document.getElementsByClassName('centerpik')[1].style.opacity='1';document.getElementsByClassName('centerpik')[1].style.transition='0.25s';"),9==n?(t[1].setAttribute("onmousedown","liubing1()"),t[1].setAttribute("onmouseup","liubing2()"),t[1].setAttribute("islizi","1"),"centerpik liuing"==t[1].getAttribute("class")&&(t[1].style.animation="spin 7s linear infinite")):(t[1].setAttribute("onmousedown",""),t[1].setAttribute("onmouseup",""),t[1].setAttribute("islizi",""),t[1].style.animation="")}function liubing(e){var t=document.getElementsByClassName("centerpik")[1];if("centerpik liuing"==t.getAttribute("class")){t.classList.remove("liuing"),t.style.animation="spinstop 0.15s ease-out",setTimeout(function(){t.style.animation=""},145);var n=document.querySelector("audio");n.parentNode.removeChild(n),removeliubingspan()}else{var o=document.createElement("audio");for(t.classList.add("liuing"),"1"==t.getAttribute("islizi")&&(t.style.animation="spin 7s linear infinite"),o.autoplay="autoplay",o.loop="loop";;){var s=Math.ceil(8*Math.random());if(window.randprev2!=s)break}if(window.randprev2=s,e)createliubingspan("♫&nbsp;&nbsp;"+(o.src=e));else switch(s){case 1:o.src="https://wzq02.cf/demos/otm_demos_ogg/dabig_dance.ogg",createliubingspan("♫&nbsp;&nbsp;Dabig Dance.mp4");break;case 2:o.src="https://wzq02.cf/demos/otm_demos_ogg/o108rocket.ogg",createliubingspan("♫&nbsp;&nbsp;电棍：all in ♿你爸↑♿火箭少女♿♿♿丶");break;case 3:o.src="https://wzq02.cf/demos/otm_demos_ogg/otto_control.ogg",createliubingspan("♫&nbsp;&nbsp;电棍：思喂！♿控制♿♿（Mind Control）");break;case 4:o.src="https://wzq02.cf/demos/otm_demos_ogg/gun_it_up_unfinished.ogg",createliubingspan("♫&nbsp;&nbsp;电棍：Give It Up♿（未完成）");break;case 5:o.src="https://wzq02.cf/demos/otm_demos_ogg/luv_the_giaoatic.ogg",createliubingspan("♫&nbsp;&nbsp;Luv the GIAOatic???");break;case 6:o.src="https://wzq02.cf/demos/otm_demos_ogg/invitation_from_mr_aniki.ogg",createliubingspan("♫&nbsp;&nbsp;Invitation From Mr.Aniki♂");break;case 7:o.src="https://wzq02.cf/demos/otm_demos_ogg/nigga.ogg",createliubingspan("♫&nbsp;&nbsp;ruma");break;case 8:o.src="https://wzq02.cf/demos/otm_demos_ogg/glitch_otto.ogg",createliubingspan("♫&nbsp;&nbsp;【ottomania:2023】Glitch♿OTTO♿")}document.body.appendChild(o)}}function liubing1(){aliubing=setTimeout("liubing(); lock_ctp = 0; liubing3()",1e3)}function liubing2(){clearTimeout(aliubing),setTimeout("lock_ctp = 1",0)}function liubing3(){"centerpik liuing"==document.getElementsByClassName("centerpik")[1].getAttribute("class")?clearInterval(timeoutchgcenterpic):(clearInterval(timeoutchgcenterpic),timeoutchgcenterpic=setInterval("chgcenterpic()","15000"))}function createliubingspan(e){var t=document.createElement("span");t.innerHTML="<p>"+e+"</p>",t.style.textAlign="right",t.style.animation="appear .25s 1",t.id="liubingspan",document.getElementsByTagName("textrt")[0].appendChild(t),autoremove=setTimeout(function(){removeliubingspan()},5e3)}function removeliubingspan(){clearTimeout(autoremove),document.querySelector("#liubingspan")&&(document.querySelector("#liubingspan").style.animation="disappear 0.25s",setTimeout(function(){document.getElementsByTagName("textrt")[0].removeChild(document.querySelector("#liubingspan"))},245))}function createprompt(e,t,n,o,s,i){document.getElementsByClassName("prompt")[0]&&destroyprompt(1);var c=document.createElement("div");c.className="pmpt_bg",c.style="width: 100vw; height: 100vh; position: absolute; left: 0px; bottom: 0px; animation: appear 0.4s ease; background-color: rgba(0, 0, 0, 0.4)",document.getElementById("main").appendChild(c);var l=document.createElement("div");l.className="prompt",l.id=e,l.className="large"==n?"prompt largeprompt":"prompt smallprompt",o&&(l.style.backdropFilter="blur(32px)"),l.style.animation="secshowup2 0.4s cubic-bezier(0, 0.6, 0, 1) 1",document.getElementById("main").appendChild(l),t&&(o=document.createElement("div"),t=document.createElement("img"),o.className="pmpt_closebtn",o.onclick=function(){destroyprompt()},t.src="icons/others/close.svg",document.getElementById("main"),document.getElementsByClassName("prompt")[0].appendChild(o),document.getElementsByClassName("pmpt_closebtn")[0].appendChild(t)),s&&(l.addEventListener("mousedown",function(e){l.style.transitionDuration="0s";var t=e.clientX-l.offsetLeft,n=e.clientY-l.offsetTop;function o(e){l.style.top=e.clientY-n+"px",l.style.left=e.clientX-t+"px"}document.addEventListener("mousemove",o),document.addEventListener("mouseup",function(){document.removeEventListener("mousemove",o),l.style.transition=""})}),l.addEventListener("touchstart",function(e){l.style.transitionDuration="0s";var e=e.targetTouches[0],t=e.clientX-l.offsetLeft,n=e.clientY-l.offsetTop;function o(e){e=e.targetTouches[0];l.style.top=e.clientY-n+"px",l.style.left=e.clientX-t+"px"}document.addEventListener("touchmove",o),document.addEventListener("touchend",function(){document.removeEventListener("touchmove",o),l.style.transition=""})})),i&&(s=document.createElement("div"),i=document.createElement("img"),s.className="pmpt_closebtn fullscrnbtn",s.onclick=function(){prompt_fullscreen()},i.src="icons/others/fullscreen.svg",i.id="pmpt_fullscrnbtn",document.getElementById("main"),document.getElementsByClassName("prompt")[0].appendChild(s),document.getElementsByClassName("fullscrnbtn")[0].appendChild(i))}function destroyprompt(e){var t=document.getElementsByClassName("pmpt_bg")[0],n=document.getElementsByClassName("prompt")[0];if(e)return document.getElementById("main").removeChild(n),void document.getElementById("main").removeChild(t);n.style.animation="secgo 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1",t.style.animation="disappear 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1",setTimeout(function(){document.getElementById("main").removeChild(n),document.getElementById("main").removeChild(t)},"195")}function createiframepmpt(e,t){createprompt("iframe_pmpt",1,"large",0,0,1);var n=document.createElement("iframe");n.src=e,n.style="position: relative; top: -56px; width: 100%; height: 100%; border-radius: 16px",n.frameborder=1,n.name=t,document.getElementsByClassName("prompt")[0].appendChild(n)}function createalert(e,t){createprompt("alert",1,"small",1,1,0);var n=document.getElementsByClassName("prompt")[0];t&&(n.style.top="calc(50vh - "+t/2+"px)",n.style.height=t+"px");t=document.createElement("div");t.className="prompt_text",t.innerHTML=e,n.appendChild(t),i18nextify.i18next.isInitialized&&window.i18nextify.forceRerender()}function createobjpmpt(e,t){createprompt("object_pmpt",1,"large",0,0,1);var n=document.createElement("object");n.data=e,n.style="position: relative; top: -56px; width: 100%; height: 100%; border-radius: 16px",n.name=t,n.type="text/html",document.getElementsByClassName("prompt")[0].appendChild(n)}function createvideopmpt(e,t,n){createprompt("video_pmpt",1,"large",0,0,1);var o=document.createElement("video");o.src=e,o.style="position: relative; top: -56px; width: 100%; height: 100%; border-radius: 16px",o.controls=1,o.id=t,n&&(o.autoplay=1),document.getElementsByClassName("prompt")[0].appendChild(o)}function prompt_fullscreen(){var e=document.getElementsByClassName("prompt")[0],t=document.getElementById("pmpt_fullscrnbtn");"prompt fullscreenprompt"==e.className?(t.src="icons/others/fullscreen.svg",e.className="prompt largeprompt"):(t.src="icons/others/fullscreen-exit.svg",e.className="prompt fullscreenprompt")}default_bgurl=-1!=window.location.href.indexOf("wzq02.cf")?"api/pic1":"https://bing.img.run/rand.php";var background_url=default_bgurl,lock_animbg=0,lock2_animbg=1,bgtimer1=null,background_url,a_sc_group;function show_background(e){var t=document.createElement("div"),n=document.createElement("span"),o=document.getElementsByTagName("textrt")[0],s=document.getElementById("links"),i=document.getElementById("cschooser"),c=t.style;t.id="animbg",c.position="absolute",c.left="-16px",c.top="-16px",c.backgroundSize="cover",c.backgroundPosition="50%, 50%",c.width="calc(100vw + 32px)",c.height="calc(100vh + 32px)",c.animation="appear 2.5s 1",c.transition="1.5s",c.filter="brightness(100%) opacity(25%)",s.style.transition="0.4s",i.style.transition="0.25s",t.onmouseover=function(){c.filter="brightness(100%) opacity(100%)",o.style.opacity="0.25",s.style.opacity="0.25",i.style.opacity="0.25"},t.onmouseout=function(){c.filter="brightness(100%) opacity(25%)",o.style.opacity="",s.style.opacity="",i.style.opacity=""},window.onresize=function(){c.transition="",setTimeout(function(){c.transition="1.5s"},5)},n.style.transition="0.25s",n.onmouseover=function(){window.matchMedia("(prefers-color-scheme: dark)").matches?n.style.filter="brightness(140%)":n.style.filter="brightness(65%)"},n.onmouseout=function(){n.style.filter=""},n.onmousedown=function(){window.matchMedia("(prefers-color-scheme: dark)").matches?n.style.filter="brightness(175%)":n.style.filter="brightness(25%)"},n.onmouseup=function(){createalert("<h3>Here are the tips:</h3>鼠标在本页上滑动时，图片会朝相反方向移动。<br>单击本页空白处可更换背景（有 5 秒的冷却时间）。<br>如果要更换背景功能使用的 api，在配色方案菜单中点击“更换背景图 API”，在弹出的窗口中填入你要使用的 API。<br>（点击“还原为默认”则可换回默认的图片 API）")};for(var l,a,r,m,d=0;d<6;d++)document.getElementsByClassName("sections")[d].style.backdropFilter="blur(24px)";-1!=e.indexOf(".mp4")||-1!=e.indexOf(".webm")?(l=1,a=document.createElement("video"),r=document.createElement("source"),a.id="bg_vid",a.autoplay="autoplay",a.muted="muted",a.loop="loop",r.src=e,(m=a.style).minWidth="100%",m.minHeight="100%",m.width="auto",m.height="auto",m.position="absolute",m.top="50%",m.left="50%",m.transform="translate(-50%,-50%)",-1!=e.indexOf(".mp4")?r.type="video/mp4":r.type="video/webm"):(c.backgroundImage="url("+e+")",setTimeout(function(){c.transform="scale(1.12)"},16),t.onclick=function(){lock_animbg&&(lock2_animbg=lock_animbg=0,c.transform="scale(1.4)",c.animation="disappear 0.5s 1",setTimeout(function(){document.getElementById("yabg").removeChild(t),c.transform="",e+="?1",c.backgroundImage="url("+e+")"},420),setTimeout(function(){c.filter="brightness(100%) opacity(100%)",c.animation="appear 2.5s 1",document.getElementById("yabg").appendChild(t),c.transition="1.5s",setTimeout(function(){c.transform="scale(1.12)"},16),lock2_animbg=1},440),setTimeout(function(){lock_animbg=1},5e3))},t.onmousedown=function(){c.transition="0.5s",lock_animbg&&(c.filter="brightness(115%) opacity(100%)")},document.addEventListener("mousemove",function(e){lock2_animbg&&(c.transform="translate("+.1*(.5*window.innerWidth-e.clientX)+"px, "+.1*(.5*window.innerHeight-e.clientY)+"px) scale(1.12)")})),document.getElementsByTagName("centerpic")[0].style.display="none",n.innerHTML="<p>使用的图片 API: <br>"+e+"</p><p>站长不对从第三方调用图片的内容负责。",n.style.textAlign="right",n.id="abspan",document.getElementById("yabg").appendChild(t),document.getElementsByTagName("textrt")[0].appendChild(n),l&&(document.getElementById("animbg").appendChild(a),document.getElementById("bg_vid").appendChild(r)),cschooseraddbgoptions(),document.getElementById("bgcon").style.opacity="0.6",document.getElementById("bgcon").title="禁用背景图片",i18nextify.i18next.isInitialized&&(document.getElementById("bgcon").title=i18nextify.i18next.t("禁用背景图片"))}function cschooseraddbgoptions(){var e=document.createElement("div");e.innerHTML="<c onclick='promptcustombgurl2()' style='position: relative; top:46px; left:4.5px;'>更换背景图 API</c>",e.id="bgoptions",document.getElementById("cschooser").appendChild(e),document.getElementById("cschooser").style.height="78px",window.matchMedia("(prefers-color-scheme: dark)").matches?e.style.color="#aaa":e.style.color="#444"}function promptcustombgurl2(){createalert("<h3 style='opacity: 0.75'>更换背景图 API</h3><input type='text' id='custom_bg_url' placeholder='请填入你要使用的图片 API：'></input><c style='position: relative; float: left; top: 16px;' href='javascript:void(0)' onclick='promptcustombgurl3();'>更换</c><c style='position: relative; top: 16px; right: 8px; float: right' href='javascript:void(0)' onclick=\"custombgurl('')\";>还原为默认</c>",180),localStorage.getItem("bgurl")&&(document.getElementById("custom_bg_url").value=localStorage.getItem("bgurl")),document.getElementById("custom_bg_url").addEventListener("keydown",function(e){13==e.keyCode&&promptcustombgurl3()})}function promptcustombgurl3(){var e=document.getElementById("custom_bg_url");e.value?custombgurl(e.value):(e.style="background-color:#f205;transition:none",setTimeout(function(){e.style=""},30))}function custombgurl(e){removebg(),e?(background_url=e,localStorage.setItem("bgurl",e)):(background_url=default_bgurl,localStorage.removeItem("bgurl")),show_background(background_url),destroyprompt()}function chgbgstate(){null!=localStorage.getItem("backgroundenabled")?(localStorage.removeItem("backgroundenabled"),removebg()):(localStorage.setItem("backgroundenabled","yes"),show_background(background_url))}function removebg(){document.getElementById("yabg").removeChild(document.querySelector("#animbg")),document.getElementsByTagName("textrt")[0].removeChild(document.querySelector("#abspan")),document.getElementById("cschooser").removeChild(document.querySelector("#bgoptions")),document.getElementById("cschooser").style.height="",document.getElementsByTagName("centerpic")[0].style="display: block; animation: appear 0.7s",document.getElementById("bgcon").style.opacity="",document.getElementById("bgcon").title="启用背景图片",i18nextify.i18next.isInitialized&&(document.getElementById("bgcon").title=i18nextify.i18next.t("启用背景图片"));for(var e=0;e<6;e++)document.getElementsByClassName("sections")[e].style.backdropFilter=""}function createmdprompt(e,t,n,o){createprompt("md_pmpt",1,"large",1,0,1),getmdfile(e,t,n,o)}function getmdfile(e,t,n,o){var s=new XMLHttpRequest;s.open("get","md/"+e+".md"),s.send(null),s.onload=function(){200==s.status&&rendermdprompt(s.responseText,t,n,o)}}function rendermdprompt(e,t,n,o){var s,c,l,a=document.getElementsByClassName("prompt")[0],r=document.createElement("div");for(r.className="prompt_text mdpmpt",s=t?(s=e,(new showdown.Converter).makeHtml(s)):(s=e,marked.parse(s)),n&&o?c="<p class='article_top_text'><img src='icons/others/time.svg'>&nbsp;"+n+"&nbsp;&nbsp;&nbsp;<img src='icons/others/tag.svg'>&nbsp;"+o+"</p>":n&&(c="<p class='article_top_text'><img src='icons/others/time.svg'>&nbsp;"+n+"</p>"),n&&(s=0==s.indexOf("<h1>")?s.slice(0,s.indexOf("</h1>")+5)+c+s.slice(s.indexOf("</h1>")+5):c+s),r.innerHTML=s,i=0;i<127&&r.childNodes[i];i++)"object"==typeof r.childNodes[i].childNodes[0]&&r.childNodes[i].childNodes[0].alt&&((l=document.createElement("p")).innerText=r.childNodes[i].childNodes[0].alt,l.style="opacity: 0.75; text-align: center",r.childNodes[i].appendChild(l));a.appendChild(r)}function misc(){document.getElementById("show_site_log").style.display="none",mdcontent_setatt(a_sc_group=document.getElementsByClassName("article_shortcut"),"none")}setTimeout(function(){lock_animbg=1},5e3),null!=localStorage.getItem("bgurl")&&(background_url=localStorage.getItem("bgurl")),null!=localStorage.getItem("backgroundenabled")&&show_background(background_url);var showstitle13_counter=0;function showstitle13(){2<++showstitle13_counter&&(document.getElementById("show_site_log").style.display="")}function lite(){-1!=window.location.href.indexOf("lite_mode")?(localStorage.setItem("lite_mode",1),window.location.href="/test.html"):1==localStorage.getItem("lite_mode")&&(window.location.href="/test.html")}function showmdcontent(){"block"==a_sc_group[0].attributeStyleMap.get("display")?(mdcontent_setatt(a_sc_group,"none"),i18nextify.i18next.isInitialized?document.getElementById("md_expand").innerText=i18nextify.i18next.t("展开"):document.getElementById("md_expand").innerText="展开"):(mdcontent_setatt(a_sc_group,"block"),i18nextify.i18next.isInitialized?document.getElementById("md_expand").innerText=i18nextify.i18next.t("收起"):document.getElementById("md_expand").innerText="收起")}function mdcontent_setatt(t,n){for(let e=0;e<127;e++)t[e]&&t[e].attributeStyleMap.set("display",n)}function s_detect(){-1!=window.location.href.indexOf("s.wzq02")&&createalert("<h3>短链接</h3><p>本站现已提供短链跳转功能。</p><p>前缀跳转：<br>s.wzq02.cf/BV（哔哩哔哩视频）<br>s.wzq02.cf/av（哔哩哔哩视频）<br>s.wzq02.cf/ac（Acfun 视频）<br>s.wzq02.cf/sm（Niconico 视频）</p><p>社交平台：<br>s.wzq02.cf/bili（哔哩哔哩个人主页）<br>s.wzq02.cf/github（GitHub 主页）<br>s.wzq02.cf/ask（提问箱）<br>s.wzq02.cf/qqgroup（个人 QQ 群）</p><p>其他跳转：<br>s.wzq02.cf/1drive（个人网盘）<br>s.wzq02.cf/tv（私人直播间）<br>s.wzq02.cf/airasoft（艾拉软件库）</p><p>若不想再看到此提示，则请将地址栏中的前缀“s.”去掉。</p>")}function tosec(e){e?("pagedisplay"==document.getElementById("page2").getAttribute("class")||scrolltopage2(),displaysec(e)):"pagedisplay"==document.getElementById("page2").getAttribute("class")&&scrolltopage1()}function onhashchange(){switch(location.hash){case"#/":case"":case"#/main":tosec();break;case"#/blog":tosec(section1);break;case"#/filsvr":tosec(section2);break;case"#/tv":tosec(section3);break;case"#/demos":tosec(section4);break;case"#/dl":tosec(section5);break;case"#/about":tosec(section6);break;default:-1!=location.hash.indexOf("#/read/")&&createmdprompt(location.hash.slice(7))}}function ver(){var t=new XMLHttpRequest;t.open("get","json/ver.json"),t.send(null),t.onload=function(){var e;200==t.status&&(e=JSON.parse(t.responseText),document.getElementById("site_last_updated").innerHTML=e.version,document.getElementById("user_agent_info").innerHTML=navigator.userAgent,console.log("WZQ'02's site 3.1. version "+e.version),console.log("Current user-agent: "+navigator.userAgent))}}lite(),s_detect(),window.addEventListener("DOMContentLoaded",onhashchange),window.addEventListener("hashchange",onhashchange),window.onload=function(){setTimeout(function(){ver(),misc()},50)};