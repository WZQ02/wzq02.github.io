function autoredirect(){var e=window.location.href;-1==e.indexOf(".top:")&&-1==e.indexOf(".215")||(window.location.href="https://wzq02.top/")}autoredirect();var visited=localStorage.getItem("visited"),section1=(null==visited&&localStorage.setItem("visited","1"),tip1(),document.getElementById("section1")),section2=document.getElementById("section2"),section3=document.getElementById("section3"),section4=document.getElementById("section4"),section5=document.getElementById("section5"),lock_lnk=(section1.classList.add("secdisplay"),highlightseclnk(),1),showlt="";function lnklist(){var e=document.getElementById("othlnks"),t=document.getElementById("lt");"block"==e.style.display?lock_lnk&&(lock_lnk=0,e.style.animation="lnkhide 0.2s cubic-bezier(1, 0, 1, 1) 1",setTimeout(function(){e.style.animation="",e.style.display="none"},"195"),setTimeout(function(){lock_lnk=1},"200"),showlt=setTimeout(function(){t.style.transition="1s",t.style.opacity="1.0"},"2000")):(lock_lnk=0,clearTimeout(showlt),t.style.animation="none",e.style.display="block",t.style.transition="0.25s",t.style.opacity="0",setTimeout(function(){lock_lnk=1},"250"))}function chglang(){var e=-1!=window.i18nextify.i18next.language.indexOf("zh")?"en":"zh",t=(localStorage.setItem("i18nextLng",e),window.i18nextify.init(),new XMLHttpRequest);t.open("get","locales/"+e+"/translation.json"),t.send(null),t.onload=function(){setTimeout(function(){window.i18nextify.forceRerender()},50)}}function tip1(){var e=document.getElementById("tip1");e.style.display="none",DetectIEVer()<=12&&(document.body.style.backgroundColor="#EEE",e.style.display="block","zh-CN"==navigator.language?e.innerHTML="<span>*检测到你正在使用 Internet Explorer，页面内容将不会按照预期显示，请更换浏览器。</span>":e.innerHTML="<span>*You are using Internet Explorer. Content on this page would not display as intended.</span>")}var lock1=1;function scrolltopage2(){lock1&&(lock1=0,scrolltopage2a(),setTimeout(function(){lock1=1},"500"))}function scrolltopage2a(){var e=document.getElementById("centerpic_container"),t=document.getElementById("links"),n=document.getElementById("page2"),o=(n.classList.add("pagedisplay"),e.style.animation="pg1go 0.15s cubic-bezier(0.4, 0, 1, 0) 1",t.style.animation="disappear 0.5s 1",setTimeout(function(){n.style.animation="pg2showup 0.35s cubic-bezier(0, 0.4, 0, 1) 1",n.style.display="block",e.style.display="none"},"150"),setTimeout(function(){t.style.display="none"},"500"),document.getElementById("othlnks")),i=document.getElementById("lt");"block"==o.style.display&&(setTimeout(function(){o.style.animation="lnkhide 0.15s cubic-bezier(1, 0, 1, 1) 1"},"150"),setTimeout(function(){o.style.animation="",o.style.display="none"},"245"),setTimeout(function(){i.style.transition="1s",i.style.opacity="1.0"},"250")),document.querySelector("#dot_1").classList.remove("highlighted_dot"),document.querySelector("#dot_2").classList.add("highlighted_dot"),document.getElementsByTagName("textrt")[0].classList.add("inpage2")}function scrolltopage1(){lock1&&(lock1=0,scrolltopage1a(),setTimeout(function(){lock1=1},"500"),-1!=window.location.href.indexOf("#/"))&&(window.location.href="#/")}function scrolltopage1a(){var e=document.getElementById("centerpic_container"),t=document.getElementById("links"),n=document.getElementById("page2");n.classList.remove("pagedisplay"),n.style.animation="pg2go 0.15s cubic-bezier(0.4, 0, 1, 0) 1",setTimeout(function(){n.style.display="none",t.style.display="block"},150),null==document.querySelector("#animbg")&&(setTimeout(function(){e.style.display="block"},250),e.style.animation="pg1showup 0.35s cubic-bezier(0, 0.4, 0, 1) 1"),t.style.animation="appear 0.5s 1",document.querySelector("#dot_1").classList.add("highlighted_dot"),document.querySelector("#dot_2").classList.remove("highlighted_dot"),document.getElementsByTagName("textrt")[0].classList.remove("inpage2")}function secleft(){var e;"pagedisplay"==document.getElementById("page2").getAttribute("class")&&(e=document.getElementsByClassName("secdisplay")[0],(e=parseInt(e.getAttribute("id").substring(7)))<6)&&(location.hash="#/"+rp[e+1])}function secright(){var e;"pagedisplay"==document.getElementById("page2").getAttribute("class")&&(e=document.getElementsByClassName("secdisplay")[0],1<(e=parseInt(e.getAttribute("id").substring(7))))&&(location.hash="#/"+rp[e-1])}function highlightseclnk(){document.getElementsByClassName("lnkhighlight")[0]&&(document.getElementsByClassName("lnkhighlight")[0].style.opacity="1.0")}function addhighlgt(){var seccurrent=document.getElementsByClassName("secdisplay")[0],seccurnum=parseInt(seccurrent.getAttribute("id").substring(7));eval("seclink"+seccurnum).childNodes[0].classList.add("lnkhighlight")}function removehighlgt(){var seccurrent=document.getElementsByClassName("secdisplay")[0],seccurnum=parseInt(seccurrent.getAttribute("id").substring(7));document.getElementsByClassName("lnkhighlight")[0]&&(document.getElementsByClassName("lnkhighlight")[0].style.opacity=""),eval("seclink"+seccurnum).childNodes[0].classList.remove("lnkhighlight")}var lock2=1;function displaysec(e){lock2&&(lock2=0,displayseca(e),setTimeout(function(){lock2=1,verifyhash(e)},"410"))}function verifyhash(e){e=parseInt(e.getAttribute("id").substring(7));window.location.hash="#/"+rp[e]}function displayseca(e){var t=document.getElementsByClassName("secdisplay")[0],n=e;t.getAttribute("id")<n.getAttribute("id")?(t.style.animation="secgo 0.25s cubic-bezier(0.4, 0, 1, 0) 1",setTimeout(function(){t.classList.remove("secdisplay"),n.classList.add("secdisplay"),n.style.animation="secshowup 0.45s cubic-bezier(0, 0.4, 0, 1) 1"},"250")):t.getAttribute("id")>n.getAttribute("id")&&(t.style.animation="secgo2 0.25s cubic-bezier(0.4, 0, 1, 0) 1",setTimeout(function(){t.classList.remove("secdisplay"),n.classList.add("secdisplay"),n.style.animation="secshowup2 0.45s cubic-bezier(0, 0.4, 0, 1) 1"},"250")),removehighlgt(),setTimeout(function(){addhighlgt(),highlightseclnk()},"410"),window.removeEventListener("resize",checkscrollonresize),t.removeEventListener("scroll",checkscrollonscroll),sec_scroll_r=sec_scroll_l=0,first_scroll=1,setTimeout(function(){checkscrollonsecalter(n),window.addEventListener("resize",checkscrollonresize),n.addEventListener("scroll",checkscrollonscroll)},"405")}function checkscrollonsecalter(e){sec_scroll_l=e.scrollHeight-e.clientHeight-e.scrollTop<4?1:0,sec_scroll_r=e.scrollTop<2?1:0}function checkscrollonscroll(){checkscrollonsecalter(this)}function checkscrollonresize(){setTimeout(function(){checkscrollonsecalter(document.getElementsByClassName("secdisplay")[0])},"250")}var sec_scroll_l=1,sec_scroll_r=1,first_scroll=0,scrollFunc=function(e){e=e||window.event;var t=document.getElementsByClassName("secdisplay")[0];e.wheelDelta<0?(first_scroll||displayseca(t),sec_scroll_l&&first_scroll&&secleft(),setTimeout(function(){scrolltopage2()},0)):0<e.wheelDelta?sec_scroll_r&&("section1"==t.getAttribute("id")&&scrolltopage1(),secright()):0<e.detail?(sec_scroll_l&&secleft(),setTimeout(function(){scrolltopage2()},0)):e.detail<0&&sec_scroll_r&&("section1"==t.getAttribute("id")&&scrolltopage1(),secright())};function loadJS(e,t){var n=document.createElement("script");n.type="text/javascript",n.src=e,n.onload=function(){t()},document.head.appendChild(n)}function okeys(e){return Object.keys(e)}function ovalues(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function req_sec_json(){for(var e=1;e<7;e++)req_specified_json(e)}function req_specified_json(o){var i=new XMLHttpRequest;i.open("get","/json/section"+o+"_content.json"),i.send(null),i.onload=function(){var e,t,n;200==i.status&&(e=(n=JSON.parse(i.responseText)).stitle,t=okeys(n=n.content),n=ovalues(n),createsection(o,e),section_addstuff(o,t,n))}}function createsection(e,t){var n=document.createElement("div");n.innerHTML=t,n.className="stitle",document.getElementById("section"+e).appendChild(n)}function section_addstuff(e,t,n){for(var o=document.getElementById("section"+e),i=0,s=0;s<127&&t[s];s++)-1!=t[s].indexOf("sinfo")&&createsinfo(s,o,n),-1!=t[s].indexOf("slink")&&createslink(s,o,n),-1!=t[s].indexOf("screenshots")&&(createsscreenshots(s,o,n,i),i++),-1!=t[s].indexOf("article_shortcut")&&createarticleshort(s,o,n)}function createsinfo(e,t,n){var o=document.createElement("div");o.className="sinfo",o.innerHTML=n[e],t.appendChild(o)}function createslink(i,current_sec,sc_values){var slink_container=document.createElement("div"),slink=document.createElement("a"),slk_command;slink.id=ovalues(sc_values[i])[0],slink.title=ovalues(sc_values[i])[1],slink.innerText=ovalues(sc_values[i])[2],slink.href=ovalues(sc_values[i])[3],slink.className="stitle2 slink",slink_container.id="slink_container",current_sec.appendChild(slink_container),slink_container.appendChild(slink),ovalues(sc_values[i])[4]&&(slk_command=ovalues(sc_values[i])[4],slink.onclick=function(){eval(slk_command)})}function createsscreenshots(e,t,n,o){var i=document.createElement("div"),s=document.createElement("div");i.className="stitle2 title",i.innerText="屏幕截图",s.className="sscreenshots",t.appendChild(i),t.appendChild(s),t.getElementsByClassName("sscreenshots")[o]&&((i=document.createElement("picture")).className="ss_pic",t.getElementsByClassName("sscreenshots")[o].appendChild(i),s=document.createElement("source"),i=document.createElement("img"),s.srcset=ovalues(ovalues(n[e])[1])[0],s.type="image/webp",i.src=ovalues(ovalues(n[e])[0])[0],i.style.width="100%",i.style.height="100%",t.getElementsByClassName("ss_pic")[o].appendChild(s),t.getElementsByClassName("ss_pic")[o].appendChild(i))}function createarticleshort(e,t,n){var o,i=document.createElement("div"),s=document.createElement("div"),c=(i.className="article_shortcut",s.className="article_shortcut_text",ovalues(n[e])[0]),l=ovalues(n[e])[1],a=ovalues(n[e])[2],n=(e=ovalues(n[e])[3]?(o="&nbsp;&nbsp;&nbsp;&nbsp;<img src='icons/others/tag.svg'>&nbsp;"+(n=ovalues(n[e])[3]),',"'+l+'","'+n+'"'):(o="",',"'+l+'",null'),s.setAttribute("onclick",'createmdprompt("'+a+'",0'+e+",1)"),document.createElement("mdtitle")),a=(n.innerHTML=c+"<br>",document.createElement("mdtitle2"));a.innerHTML="<img src='icons/others/time.svg'>&nbsp;"+l+o,t.appendChild(i),i.appendChild(s),s.appendChild(n),s.appendChild(a)}function hidegfsites(){var e=localStorage.getItem("gfs"),t=document.getElementsByClassName("outcn");if(Date.parse(new Date)/1e3-e<86400)for(var n=0;n<t.length;n++)t[n].style.display="inline";else for(n=0;n<t.length;n++)t[n].style.display="none"}document.querySelector("#main").addEventListener("DOMMouseScroll",scrollFunc,!1),document.querySelector("#main").onmousewheel=scrollFunc,-1!=window.location.hostname.indexOf(".github.io")&&(window.addEventListener("load",function(){document.title+=i18nextify.i18next.t(" (Mirror)")}),"zh-CN"==navigator.language?console.log("您正在访问 WZQ'02 的小站的镜像版本。主站地址为 https://wzq02.top/"):console.log("You're visiting the mirror version of WZQ'02's site. The main site is at https://wzq02.top/")),req_sec_json(),hidegfsites();var detectgwfworker=new Worker("scripts/detectgwf.js"),bodyscroll=(detectgwfworker.onmessage=function(e){0==e.data&&(localStorage.setItem("gfs",Date.parse(new Date)/1e3),hidegfsites())},new Hammer(document.querySelector("#main"))),bodyscroll2=(bodyscroll.get("swipe").set({direction:Hammer.DIRECTION_VERTICAL}),bodyscroll.on("swipeup",function(e){scrolltopage2()}),bodyscroll.on("swipedown",function(e){sec_scroll_r&&scrolltopage1()}),bodyscroll.on("panup",function(e){scrolltopage2()}),bodyscroll.on("pandown",function(e){sec_scroll_r&&scrolltopage1()}),new Hammer(page2)),bodyscroll3=(bodyscroll2.on("swipeleft",function(e){secleft(),resetbodyscroll3()}),bodyscroll2.on("swiperight",function(e){secright(),resetbodyscroll3()}),new Hammer(document.getElementsByClassName("secdisplay")[0]));function resetbodyscroll3(){setTimeout(function(){bodyscroll3=Hammer(document.getElementsByClassName("secdisplay")[0])},"500")}const pic_list=["front_1","front_2","front_3","front_4","front_5","front_6","front_7","front_8","front_9","front_10","front_11","front_12"];var pic_size=96,last_msd_pos=[],timeoutcpposchg;function centerpic_initialize(){var e=document.createElement("div");e.style="width: 100vw; height: 100vh;",e.onmousedown=function(e){last_msd_pos[0]=e.clientX,last_msd_pos[1]=e.clientY},e.onmouseup=function(e){last_msd_pos[0]==e.clientX&&last_msd_pos[1]==e.clientY&&(cp_pos_changeall(),click_record())},document.getElementById("centerpic_container").appendChild(e);for(var t=0;t<pic_list.length;t++){var n=document.createElement("picture"),o=(n.className="centerpic_picelement",n.id=pic_list[t],n.style.position="absolute",n.style.left="calc(50vw - "+pic_size/2+"px)",n.style.top="calc(50vh - "+pic_size/2+"px)",cp_pos_initialize()),o=(n.style.transform="translate("+o[0]+"px,"+o[1]+"px) rotate("+360*Math.random()+"deg)",n.style.opacity=.6,n.style.transition="transform 1s cubic-bezier(0.05, 0.2, 0, 1), opacity 0.25s",document.createElement("source")),i=(o.srcset="images/centerpic/"+pic_list[t]+".webp",o.type="image/webp",document.createElement("img"));i.src="images/centerpic/"+pic_list[t]+".png",i.height=pic_size,i.width=pic_size,i.style.opacity=0,i.setAttribute("onload","var a=document.querySelector('#"+pic_list[t]+"').childNodes[1];a.style.opacity=1;a.style.transition='0.25s';"),n.appendChild(o),n.appendChild(i),n.ondragstart=function(e){e.preventDefault()},document.getElementById("centerpic_container").appendChild(n)}pic_size_adj(),setTimeout(function(){cp_pos_changeall()},5)}function cp_pos_initialize(){var e=Math.ceil(4*Math.random()),t=window.innerWidth,n=window.innerHeight;switch(e){case 1:return[-.5*t,n*(Math.random()-.5)];case 2:return[t*(Math.random()-.5),-.5*n];case 3:return[.5*t,n*(Math.random()-.5)];case 4:return[t*(Math.random()-.5),.5*n]}}function pic_size_adj(){pic_size=window.innerWidth<=864||window.innerHeight<=640?96:144;for(var e=0;e<pic_list.length;e++){var t=document.querySelector("#"+pic_list[e]);t.childNodes[1].height=pic_size,t.childNodes[1].width=pic_size}}function cp_resize_control(){timeoutcpposchg&&clearTimeout(timeoutcpposchg),timeoutcpposchg=setTimeout(function(){cp_pos_changeall(),pic_size_adj()},250)}function cp_pos_change(e,t){var e=document.getElementById(e),n=-.5,o=.8,i=-.5,s=.8;switch(t){case 1:n=-1.4,o=.4,s=1;break;case 2:o=n=.4,s=1;break;case 3:o=1,s=i=.4;break;case 4:o=1,i=-1.4,s=.4}e.style.transform="translate("+window.innerWidth*(Math.random()+n)*o+"px,"+window.innerHeight*(Math.random()+i)*s+"px) rotate("+360*Math.random()+"deg)"}function cp_pos_changeall(e){for(var t=0;t<pic_list.length;t++)cp_pos_change(pic_list[t],e)}function cp_rewoke(){window.onresize=function(){cp_resize_control()};for(var e=0;e<pic_list.length;e++){var t=cp_pos_initialize();document.querySelector("#"+pic_list[e]).style.transform="translate("+t[0]+"px,"+t[1]+"px) rotate("+360*Math.random()+"deg)"}setTimeout(function(){cp_pos_changeall()},5)}centerpic_initialize(),window.onresize=function(){cp_resize_control()};var pic_swipe=new Hammer(document.getElementById("centerpic_container")),pic_swipe_2=(pic_swipe.on("swipeleft",function(){cp_pos_changeall(1),click_record()}),pic_swipe.on("swiperight",function(){cp_pos_changeall(2),click_record()}),pic_swipe.on("swiperight",function(){cp_pos_changeall(2),click_record()}),new Hammer(document.getElementById("centerpic_container")));function cp_addprop(){for(let t=0;t<pic_list.length;t++){let e=document.getElementById(pic_list[t]);e.onmouseover=function(){e.style.opacity=1},e.onmousedown=function(){e.style.opacity=.35},"front_9"==e.id?e.onmouseup=function(){e.style.opacity=1,liubing_trigger()}:e.onmouseup=function(){e.style.opacity=1,cp_pos_change(e.id),click_record()},e.onmouseout=function(){e.style.opacity=.6}}}pic_swipe_2.get("swipe").set({direction:Hammer.DIRECTION_VERTICAL}),pic_swipe_2.on("swipedown",function(){cp_pos_changeall(3),click_record()}),pic_swipe_2.on("swipeup",function(){cp_pos_changeall(4),click_record()}),cp_addprop();var liubing_status=0,lbsb_autoremove,lbaudio,lbtrigger=0,lbm,lbn,dj=document.querySelector("#front_9").childNodes[1],djanim_timeout;function liubing_trigger(){1!=lbtrigger?(lbtrigger=1,dj.style.opacity=.2,lbn=setTimeout(function(){lbtrigger=0},400),lbm=setTimeout(function(){cp_pos_change("front_9"),dj.style.opacity=""},400)):(dj.style.opacity="",clearTimeout(lbm),clearTimeout(lbn),lbtrigger=0,liubing())}function liubing(e){if(0==liubing_status){for(liubing_status=1,djanim_timeout&&clearTimeout(djanim_timeout),dj.style.animation="spin 4s linear infinite",(lbaudio=document.createElement("audio")).autoplay=1;;){var t=Math.ceil(9*Math.random());if(window.randprev2!=t)break}if(window.randprev2=t,e)createliubingspan("♫&nbsp;&nbsp;"+(lbaudio.src=e));else{var n="https://demo.wzq02.top/otm_demos_ogg/";switch(t){case 1:lbaudio.src=n+"dabig_dance.ogg",createliubingspan("♫&nbsp;&nbsp;Dabig Dance.mp4");break;case 2:lbaudio.src=n+"o108rocket.ogg",createliubingspan("♫&nbsp;&nbsp;电棍：all in ♿你爸↑♿火箭少女♿♿♿丶");break;case 3:lbaudio.src=n+"otto_control.ogg",createliubingspan("♫&nbsp;&nbsp;电棍：思喂！♿控制♿♿（Mind Control）");break;case 4:lbaudio.src=n+"gun_it_up_unfinished.ogg",createliubingspan("♫&nbsp;&nbsp;电棍：Give It Up♿（未完成）");break;case 5:lbaudio.src=n+"luv_the_giaoatic.ogg",createliubingspan("♫&nbsp;&nbsp;Luv the GIAOatic???");break;case 6:lbaudio.src=n+"invitation_from_mr_aniki.ogg",createliubingspan("♫&nbsp;&nbsp;Invitation From Mr.Aniki♂");break;case 7:lbaudio.src=n+"nigga.ogg",createliubingspan("♫&nbsp;&nbsp;ruma");break;case 8:lbaudio.src=n+"glitch_otto.ogg",createliubingspan("♫&nbsp;&nbsp;【ottomania:2023】Glitch♿OTTO♿");break;case 9:lbaudio.src=n+"what_is_hitech_unfinished.ogg",createliubingspan("♫&nbsp;&nbsp;What♿is♿Hitech?（未完成）")}lbaudio.addEventListener("timeupdate",function(){lbaudio.duration-lbaudio.currentTime<=.2&&(liubing(),liubing())})}document.body.appendChild(lbaudio)}else{liubing_status=0;e=document.querySelector("audio");e.removeAttribute("src"),e.load(),e.parentNode.removeChild(e),removeliubingspan(),dj.style.animation="spinstop 0.15s ease-out",djanim_timeout=setTimeout(function(){dj.style.animation=""},145)}}function createliubingspan(e){var t=document.createElement("span");t.innerHTML="<p>"+e+"</p>",t.style.textAlign="right",t.style.animation="appear .25s 1",t.id="liubingspan",document.getElementsByTagName("textrt")[0].appendChild(t),lbsb_autoremove=setTimeout(function(){removeliubingspan()},5e3)}function removeliubingspan(){clearTimeout(lbsb_autoremove),document.querySelector("#liubingspan")&&(document.querySelector("#liubingspan").style.animation="disappear 0.25s",setTimeout(function(){document.getElementsByTagName("textrt")[0].removeChild(document.querySelector("#liubingspan"))},245))}var cp_click_statistics=[0,0,0,0,0,0],cp_click_last5=[],statistic_entry_created=0;function click_record(){var e=cp_click_statistics[0],t=cp_click_statistics[1],n=cp_click_statistics[2],o=cp_click_statistics[3],i=cp_click_statistics[4],s=cp_click_statistics[5];if(o<3){if(0!=e){var c=Date.now()-e;if(15<=c&&(o&&o--,cp_click_last5[cp_click_last5.length]=t=c,6<=cp_click_last5.length)){cp_click_last5.splice(0,1);for(var l=0,a=0;a<5;a++)l+=cp_click_last5[a];if(i=Number(parseFloat(5e3/l).toFixed(1)),0==statistic_entry_created&&5<=i&&(create_statistic_entry(),statistic_entry_created=1),10<=i)for(a=1;a<5;a++)Math.abs(cp_click_last5[a]-cp_click_last5[a-1])}}(0==n||t<n)&&(n=t),s<i&&(s=i),e=Date.now(),cp_click_statistics=[e,t,n,o,i,s]}}function display_cp_click_statistics(){var e,t,n,o;cp_click_statistics[1]?(e=cp_click_statistics[1]/1e3+" 秒",t=cp_click_statistics[2]/1e3+" 秒"):e=t="未统计",cp_click_statistics[4]?(n=cp_click_statistics[4]+" 次 / 秒",o=cp_click_statistics[5]+" 次 / 秒"):n=o="未统计",createalert("<h3>统计信息：</h3><p>上一次点击的时间间隔："+e+"</p><p>最短的点击时间："+t+"</p><p>最近 5 次的平均点击速度："+n+"</p><p>5 次点击平均速度最快："+o+"</p><p>统计数据将不会保存。<br>刷新或关闭本页后，数据将被重置。</p>",314)}function create_statistic_entry(){var e=document.createElement("a"),t=(e.title="查看统计信息",e.onmousedown=function(){display_cp_click_statistics()},document.createElement("div")),n=(t.class="othlnk",document.createElement("span"));n.innerText="查看统计信息",t.appendChild(n),e.appendChild(t),document.querySelector("#othlnks").appendChild(e)}function createprompt(e,t,n,o,i,s){document.getElementsByClassName("prompt")[0]&&destroyprompt(1);var c=document.createElement("div"),l=(c.className="pmpt_bg",c.style="width: 100vw; height: 100vh; position: absolute; left: 0px; bottom: 0px; animation: appear 0.4s ease; background-color: rgba(0, 0, 0, 0.4)",document.body.appendChild(c),document.createElement("div"));l.className="prompt",l.id=e,l.className="large"==n?"prompt largeprompt":"prompt smallprompt",o&&(l.style.backdropFilter="blur(32px)"),l.style.animation="secshowup2 0.4s cubic-bezier(0, 0.6, 0, 1) 1",document.body.appendChild(l),t&&(c=document.createElement("div"),e=document.createElement("img"),c.className="pmpt_closebtn",c.onclick=function(){destroyprompt()},e.src="icons/others/close.svg",document.getElementById("main"),document.getElementsByClassName("prompt")[0].appendChild(c),document.getElementsByClassName("pmpt_closebtn")[0].appendChild(e)),i&&(l.addEventListener("mousedown",function(e){l.style.transitionDuration="0s";var t=e.clientX-l.offsetLeft,n=e.clientY-l.offsetTop;function o(e){l.style.top=e.clientY-n+"px",l.style.left=e.clientX-t+"px"}document.addEventListener("mousemove",o),document.addEventListener("mouseup",function(){document.removeEventListener("mousemove",o),l.style.transition=""})}),l.addEventListener("touchstart",function(e){l.style.transitionDuration="0s";var e=e.targetTouches[0],t=e.clientX-l.offsetLeft,n=e.clientY-l.offsetTop;function o(e){e=e.targetTouches[0];l.style.top=e.clientY-n+"px",l.style.left=e.clientX-t+"px"}document.addEventListener("touchmove",o),document.addEventListener("touchend",function(){document.removeEventListener("touchmove",o),l.style.transition=""})})),s&&(n=document.createElement("div"),o=document.createElement("img"),n.className="pmpt_closebtn fullscrnbtn",n.onclick=function(){prompt_fullscreen()},o.src="icons/others/fullscreen.svg",o.id="pmpt_fullscrnbtn",document.getElementById("main"),document.getElementsByClassName("prompt")[0].appendChild(n),document.getElementsByClassName("fullscrnbtn")[0].appendChild(o))}function destroyprompt(e){var t=document.getElementsByClassName("pmpt_bg")[0],n=document.getElementsByClassName("prompt")[0];e?(document.body.removeChild(n),document.body.removeChild(t)):(n.style.animation="secgo 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1",t.style.animation="disappear 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1",setTimeout(function(){document.body.removeChild(n),document.body.removeChild(t)},"195"))}function createiframepmpt(e,t){createprompt("iframe_pmpt",1,"large",0,0,1);var n=document.createElement("iframe");n.src=e,n.style="position: relative; top: -56px; width: 100%; height: 100%; border-radius: 4px",n.frameborder=1,n.name=t,document.getElementsByClassName("prompt")[0].appendChild(n)}function createalert(e,t){createprompt("alert",1,"small",1,1,0);var n=document.getElementsByClassName("prompt")[0],t=(t&&(n.style.top="calc(50vh - "+t/2+"px)",n.style.height=t+"px"),document.createElement("div"));t.className="prompt_text",t.innerHTML=e,n.appendChild(t),i18nextify.i18next.isInitialized&&window.i18nextify.forceRerender()}function createobjpmpt(e,t){createprompt("object_pmpt",1,"large",0,0,1);var n=document.createElement("object");n.data=e,n.style="position: relative; top: -56px; border-radius: 4px",n.width="100%",n.height="100%",n.name=t,n.type="text/html",document.getElementsByClassName("prompt")[0].appendChild(n)}function createvideopmpt(e,t,n){createprompt("video_pmpt",1,"large",0,0,1);var o=document.createElement("video");o.src=e,o.style="position: relative; top: -56px; width: 100%; height: 100%; border-radius: 4px",o.controls=1,o.id=t,n&&(o.autoplay=1),document.getElementsByClassName("prompt")[0].appendChild(o)}function prompt_fullscreen(){var e=document.getElementsByClassName("prompt")[0],t=document.getElementById("pmpt_fullscrnbtn");"prompt fullscreenprompt"==e.className?(t.src="icons/others/fullscreen.svg",e.className="prompt largeprompt"):(t.src="icons/others/fullscreen-exit.svg",e.className="prompt fullscreenprompt")}var default_bgurl="https://bing.img.run/rand.php",background_url=default_bgurl,lock_animbg,lock2_animbg,lock3_animbg,bgstate_lock,bg_notfirst,q_counter=0,background_url,md_tags_list,marked_loaded,showdown_loaded,marked_failed;function show_background(e){lock_animbg=0,lock3_animbg=lock2_animbg=1,setTimeout(function(){lock_animbg=1},5e3);var t=e+"?"+q_counter,n=document.createElement("div"),o=document.createElement("span"),i=document.getElementsByTagName("textrt")[0],s=document.getElementById("links"),c=n.style;n.id="animbg",c.position="absolute",c.left="-16px",c.top="-16px",c.backgroundSize="cover",c.backgroundPosition="50%, 50%",c.width="calc(100vw + 32px)",c.height="calc(100vh + 32px)",c.animation="appear 2.5s 1",c.transition="1.5s",c.filter="brightness(100%) opacity(25%)",s.style.transition="0.4s",n.onmouseover=function(){c.filter="brightness(100%) opacity(100%)",i.style.opacity="0.25",s.style.opacity="0.25"},n.onmouseout=function(){c.filter="brightness(100%) opacity(25%)",i.style.opacity="",s.style.opacity=""},o.style.transition="0.25s",o.style.opacity="0",setTimeout(function(){o.style.opacity="1"},5),o.onmouseover=function(){window.matchMedia("(prefers-color-scheme: dark)").matches?o.style.filter="brightness(140%)":o.style.filter="brightness(65%)"},o.onmouseout=function(){o.style.filter=""},o.onmousedown=function(){window.matchMedia("(prefers-color-scheme: dark)").matches?o.style.filter="brightness(175%)":o.style.filter="brightness(25%)"};for(var l,a,r,d,m=0;m<6;m++)document.getElementsByClassName("sections")[m].style.backdropFilter="blur(24px)";-1!=t.indexOf(".mp4")||-1!=t.indexOf(".webm")?(l=1,a=document.createElement("video"),r=document.createElement("source"),a.id="bg_vid",a.autoplay="autoplay",a.muted="muted",a.loop="loop",r.src=t,(d=a.style).minWidth="100%",d.minHeight="100%",d.width="auto",d.height="auto",d.position="absolute",d.top="50%",d.left="50%",d.transform="translate(-50%,-50%)",-1!=t.indexOf(".mp4")?r.type="video/mp4":r.type="video/webm"):(c.backgroundImage="url("+t+")",setTimeout(function(){c.transform="scale(1.12)"},16),n.onclick=function(){lock_animbg&&(lock2_animbg=lock_animbg=0,c.transform="scale(1.4)",c.animation="disappear 0.5s 1",setTimeout(function(){document.getElementById("yabg").removeChild(n),c.transform="",t=e+"?"+ ++q_counter,c.backgroundImage="url("+t+")"},420),setTimeout(function(){c.filter="brightness(100%) opacity(100%)",c.animation="appear 2.5s 1",document.getElementById("yabg").appendChild(n),c.transition="1.5s",setTimeout(function(){c.transform="scale(1.12)"},16),lock2_animbg=1},440),setTimeout(function(){lock_animbg=1},5e3))},n.onmousedown=function(){c.transition="0.5s",lock_animbg&&(c.filter="brightness(125%) opacity(100%)")},document.addEventListener("mousemove",mvonmousemv),window.addEventListener("deviceorientation",mvondeviceori)),bg_notfirst?document.getElementById("centerpic_container").style="display:none":(bgstate_lock=1,document.getElementById("centerpic_container").style="transition:.15s;opacity:0",setTimeout(function(){document.getElementById("centerpic_container").style="display:none",bgstate_lock=0},150),bg_notfirst=1),o.innerHTML="<p><span onclick='createalert(\"<h3>Here are the tips:</h3>鼠标在本页上滑动时，图片会朝相反方向移动。<br>单击本页空白处可更换背景。<br>（有 5 秒的冷却时间）<br>如果要更换背景功能使用的 API，点击“使用的图片 API”下方的 URL，在弹出的窗口中填入你要使用的 API。<br><br>（目前仅支持直接返回图片数据的 API，不支持返回 JSON 的。点击“还原为默认”则可换回默认的图片 API）\",366)'>使用的图片 API: </span><br><span onclick='promptcustombgurl2()'>"+e+"</span></p>",background_url!=default_bgurl&&(o.innerHTML+="</p><p><span onclick='promptcustombgurl2()'>站长不对从第三方调用图片的内容负责。</span>"),o.style.textAlign="right",o.id="abspan",document.getElementById("yabg").appendChild(n),document.getElementsByTagName("textrt")[0].appendChild(o),l&&(document.getElementById("animbg").appendChild(a),document.getElementById("bg_vid").appendChild(r)),window.addEventListener("resize",resizezoom),document.getElementById("bgcon").style.opacity="0.6",document.getElementById("bgcon").title="禁用背景图片",i18nextify.i18next.isInitialized&&(document.getElementById("bgcon").title=i18nextify.i18next.t("禁用背景图片"))}function promptcustombgurl2(){createalert("<h3 style='opacity: 0.75'>更换背景图 API</h3><input type='text' id='custom_bg_url' placeholder='请填入你要使用的图片 API：'></input><c style='position: relative; float: left; top: 16px;' href='javascript:void(0)' onclick='promptcustombgurl3();'>更换</c><c style='position: relative; top: 16px; right: 8px; float: right' href='javascript:void(0)' onclick=\"custombgurl('')\";>还原为默认</c>",176),localStorage.getItem("bgurl")&&(document.getElementById("custom_bg_url").value=localStorage.getItem("bgurl")),document.getElementById("custom_bg_url").addEventListener("keydown",function(e){13==e.keyCode&&promptcustombgurl3()})}function promptcustombgurl3(){var e=document.getElementById("custom_bg_url");e.value?custombgurl(e.value):(e.style="background-color:#f205;transition:none",setTimeout(function(){e.style=""},30))}function custombgurl(e){removebg(),e?(background_url=e,localStorage.setItem("bgurl",e)):(background_url=default_bgurl,localStorage.removeItem("bgurl")),show_background(background_url),destroyprompt()}function chgbgstate(){bgstate_lock||(null!=localStorage.getItem("backgroundenabled")?(localStorage.removeItem("backgroundenabled"),bgstate_lock=1,document.getElementById("yabg").style="transition:.15s;opacity:0",document.getElementById("abspan").style.opacity="0",setTimeout(function(){removebg(),document.getElementById("yabg").style="",bg_notfirst=bgstate_lock=0},150)):(localStorage.setItem("backgroundenabled","yes"),show_background(background_url)))}function removebg(){document.getElementById("yabg").removeChild(document.querySelector("#animbg")),document.getElementsByTagName("textrt")[0].removeChild(document.querySelector("#abspan")),document.getElementById("centerpic_container").style="display: block; animation: appear 0.7s",document.getElementById("bgcon").style.opacity="",document.getElementById("bgcon").title="启用背景图片",i18nextify.i18next.isInitialized&&(document.getElementById("bgcon").title=i18nextify.i18next.t("启用背景图片"));for(var e=0;e<6;e++)document.getElementsByClassName("sections")[e].style.backdropFilter="";cp_rewoke&&cp_rewoke(),document.removeEventListener("mousemove",mvonmousemv),window.removeEventListener("deviceorientation",mvondeviceori),window.removeEventListener("resize",resizezoom)}function mvonmousemv(e){var t;lock2_animbg&&lock3_animbg&&((t=document.querySelector("#animbg").style).transition="1.5s ease-out",t.transform="translate("+.1*(.5*window.innerWidth-e.clientX)+"px, "+.1*(.5*window.innerHeight-e.clientY)+"px) scale(1.12)",lock3_animbg=0,setTimeout(function(){lock3_animbg=1},50))}function mvondeviceori(e){var t;lock2_animbg&&lock3_animbg&&((t=document.querySelector("#animbg").style).transition="1s ease-out",t.transform="translate("+-e.gamma/90*window.innerWidth*.1+"px, "+-e.beta/180*window.innerHeight*.1+"px) scale(1.16)",lock3_animbg=0,setTimeout(function(){lock3_animbg=1},50))}function resizezoom(){var e=document.querySelector("#animbg").style;e.transition="",setTimeout(function(){e.transition="1.5s"},5)}null!=localStorage.getItem("bgurl")&&(background_url=localStorage.getItem("bgurl")),null!=localStorage.getItem("backgroundenabled")&&show_background(background_url);var showdown_path="./scripts/thirdparty/showdown.min.js",marked_path="./scripts/thirdparty/marked.min.js";function gettaglist(){var e=new XMLHttpRequest;e.open("get","json/md_tags.json"),e.send(null),e.onload=function(){200==e.status&&(md_tags_list=JSON.parse(e.responseText))}}function createmdprompt(e,t,n,o,i){function s(){getmdfile(e,t,n,o,i)}createprompt("md_pmpt",1,"large",1,0,1),(t=marked_failed?1:t)&&!showdown_loaded?loadJS(showdown_path,function(){s(),showdown_loaded=1}):marked_loaded?s():loadJS(marked_path,function(){void 0===window.marked?(t=1,loadJS(showdown_path,function(){s(),marked_failed=showdown_loaded=1})):(s(),marked_loaded=1)})}function getmdfile(e,t,n,o,i){if(!n)try{n=md_tags_list[e].date||null,o=md_tags_list[e].tags||null}catch(e){}i=i&&e,window.i18nextify&&-1!=window.i18nextify.i18next.language.indexOf("en")?getmdfile2(e,t,n,o,i,1):getmdfile2(e,t,n,o,i)}function getmdfile2(e,t,n,o,i,s){var c=new XMLHttpRequest;1==s?c.open("get","md/en/"+e+".md"):c.open("get","md/"+e+".md"),c.send(null),c.onload=function(){200==c.status?rendermdprompt(c.responseText,t,n,o,i,s):1==s?getmdfile2(e,t,n,o,i,2):rendermdprompt("## 没有找到对应的文章额...")}}function rendermdprompt(e,t,n,o,i,s){var c,l,a=document.getElementsByClassName("prompt")[0],r=document.createElement("div");r.className="prompt_text mdpmpt",t=t?(c=e,(new showdown.Converter).makeHtml(c)):(c=e,marked.parse(c)),n&&o?l="<p class='article_top_text'><img src='icons/others/time.svg'>&nbsp;"+n+"&nbsp;&nbsp;&nbsp;<img src='icons/others/tag.svg'>&nbsp;"+o+"</p>":n&&(l="<p class='article_top_text'><img src='icons/others/time.svg'>&nbsp;"+n+"</p>"),2==s&&(l+="<notice>This article is not available in English yet. Consider using browser translation.</notice>\n"),n&&(t=0==t.indexOf("<h1>")?t.slice(0,t.indexOf("</h1>")+5)+l+t.slice(t.indexOf("</h1>")+5):l+t),r.innerHTML=t;for(var d,m=0;m<127&&r.childNodes[m];m++)"object"==typeof r.childNodes[m].childNodes[0]&&r.childNodes[m].childNodes[0].alt&&((d=document.createElement("p")).innerText=r.childNodes[m].childNodes[0].alt,d.style="opacity: 0.75; text-align: center",r.childNodes[m].appendChild(d));i&&((e=document.createElement("object")).data="/comment/?type=blog_"+i,e.width="100%",e.height="440",e.type="text/html",r.appendChild(e)),r.style="opacity:0",document.getElementsByClassName("mdpmpt")[0]&&a.removeChild(document.getElementsByClassName("mdpmpt")[0]),a.appendChild(r),setTimeout(function(){r.style=""},5)}gettaglist(),window.addEventListener("load",onhashchange),window.addEventListener("hashchange",onhashchange);var rp=["main","blog","filsvr","tv","demos","dl","about"];function tosec(e){e?("pagedisplay"!=document.getElementById("page2").getAttribute("class")&&scrolltopage2(),displaysec(e)):"pagedisplay"==document.getElementById("page2").getAttribute("class")&&scrolltopage1()}function onhashchange(){switch(location.hash){case"#/":case"":case"#/"+rp[0]:tosec();break;case"#/"+rp[1]:tosec(section1);break;case"#/"+rp[2]:tosec(section2);break;case"#/"+rp[3]:tosec(section3);break;case"#/"+rp[4]:tosec(section4);break;case"#/"+rp[5]:tosec(section5);break;case"#/"+rp[6]:tosec(section6);break;default:-1!=location.hash.indexOf("#/read/")&&createmdprompt(location.hash.slice(7))}}function ver(){var t=new XMLHttpRequest;t.open("get","json/ver.json"),t.send(null),t.onload=function(){var e;200==t.status&&(e=JSON.parse(t.responseText),document.getElementById("site_last_updated").innerHTML=e.version,document.getElementById("user_agent_info").innerHTML=navigator.userAgent,console.log("WZQ'02's site 3.1. version "+e.version),console.log("Current user-agent: "+navigator.userAgent))}}window.onload=function(){setTimeout(function(){ver()},50)};