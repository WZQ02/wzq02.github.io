function autoredirect(){var e=window.location.href;-1==e.indexOf(".cf:")&&-1==e.indexOf(".215")&&-1==e.indexOf("acg.tv")||(window.location.href="https://wzq02.cf/")}function setCookie(e,t,n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);o="expires="+o.toGMTString();document.cookie=e+"="+t+"; "+o}function getCookie(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){var i=n[o].trim();if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}function C2Stransfer(e){var t=getCookie(e);""!=t&&(localStorage.setItem(e,t),setCookie(e,"",-1))}for(autoredirect(),c2l_list=["visited","themecolor","bgurl","backgroundenabled","lite_mode"],i=0;i<=c2l_list.length;i++)C2Stransfer(c2l_list[i]);function autochgthemecolor(){var e=localStorage.getItem("themecolor");null!=e&&(document.getElementById("color_scheme").href="css/cs_"+e+".css")}autochgthemecolor();var lock_csc=1;function showcschooser(){var e;lock_csc&&(lock_csc=0,"block"==(e=document.getElementById("cschooser")).style.display?hidecschooser():e.style.display="block",setTimeout(function(){lock_csc=1},"250"))}function themecolor(e){hidecschooser(),e?(localStorage.setItem("themecolor",e),document.getElementById("color_scheme").href="css/cs_"+e+".css"):(localStorage.removeItem("themecolor"),document.getElementById("color_scheme").href="")}function hidecschooser(){var e=document.getElementById("cschooser");e.style.animation="lnkhide2 0.25s cubic-bezier(0, 0, 0.67, 0) 1",setTimeout(function(){e.style.display="none",e.style.animation=""},"245")}var visited=localStorage.getItem("visited");null==visited&&localStorage.setItem("visited","1"),tip1();var section1=document.getElementById("section1"),section2=document.getElementById("section2"),section3=document.getElementById("section3"),section4=document.getElementById("section4"),section5=document.getElementById("section5");section1.classList.add("secdisplay"),highlightseclnk();var lock_lnk=1,showlt="";function lnklist(){var e=document.getElementById("othlnks"),t=document.getElementById("lt");"block"==e.style.display?lock_lnk&&(lock_lnk=0,e.style.animation="lnkhide 0.2s cubic-bezier(1, 0, 1, 1) 1",setTimeout(function(){e.style.animation="",e.style.display="none"},"195"),setTimeout(function(){lock_lnk=1},"200"),showlt=setTimeout(function(){t.style.transition="1s",t.style.opacity="1.0"},"2000")):(lock_lnk=0,clearTimeout(showlt),t.style.animation="none",e.style.display="block",t.style.transition="0.25s",t.style.opacity="0",setTimeout(function(){lock_lnk=1},"250"))}function chglang(){var e=window.i18nextify.i18next.language;window.location.href;-1!=e.indexOf("zh")?localStorage.setItem("i18nextLng","en"):localStorage.setItem("i18nextLng","zh"),window.i18nextify.init();var t=new XMLHttpRequest;t.open("get","locales/"+e+"/translation.json"),t.send(null),t.onload=function(){setTimeout(function(){window.i18nextify.forceRerender()},250)}}function tip1(){var e=document.getElementById("tip1");e.style.display="none",DetectIEVer()<=12&&(document.body.style.backgroundColor="#EEE",e.style.display="block","zh-CN"==navigator.language?e.innerHTML="<span>*检测到你正在使用 Internet Explorer，页面内容将不会按照预期显示，请更换浏览器。</span>":e.innerHTML="<span>*You are using Internet Explorer. Content on this page would not display as intended.</span>")}var lock1=1;function scrolltopage2(){lock1&&(lock1=0,scrolltopage2a(),setTimeout(function(){lock1=1},"500"))}function scrolltopage2a(){var e=document.getElementById("centerpic_container"),t=document.getElementById("links"),n=document.getElementById("page2");n.classList.add("pagedisplay"),e.style.animation="pg1go 0.25s cubic-bezier(0.4, 0, 1, 0) 1",t.style.animation="disappear 0.5s 1",hidecschooser(),setTimeout(function(){n.style.animation="pg2showup 0.25s cubic-bezier(0, 0.4, 0, 1) 1",n.style.display="block",e.style.display="none"},"250"),setTimeout(function(){t.style.display="none"},"500");var o=document.getElementById("othlnks"),i=document.getElementById("lt");"block"==o.style.display&&(setTimeout(function(){o.style.animation="lnkhide 0.15s cubic-bezier(1, 0, 1, 1) 1"},"150"),setTimeout(function(){o.style.animation="",o.style.display="none"},"245"),setTimeout(function(){i.style.transition="1s",i.style.opacity="1.0"},"250")),document.querySelector("#dot_1").classList.remove("highlighted_dot"),document.querySelector("#dot_2").classList.add("highlighted_dot")}function scrolltopage1(){lock1&&(lock1=0,scrolltopage1a(),setTimeout(function(){lock1=1},"500"),-1!=window.location.href.indexOf("#/")&&(window.location.href="#/"))}function scrolltopage1a(){var e=document.getElementById("centerpic_container"),t=document.getElementById("links"),n=document.getElementById("page2");n.classList.remove("pagedisplay"),n.style.animation="pg2go 0.25s cubic-bezier(0.4, 0, 1, 0) 1",setTimeout(function(){n.style.display="none",t.style.display="block"},250),null==document.querySelector("#animbg")&&(setTimeout(function(){e.style.display="block"},250),e.style.animation="pg1showup 0.25s cubic-bezier(0, 0.4, 0, 1) 1"),t.style.animation="appear 0.5s 1",document.querySelector("#dot_1").classList.add("highlighted_dot"),document.querySelector("#dot_2").classList.remove("highlighted_dot")}function secleft(){var e;"pagedisplay"==document.getElementById("page2").getAttribute("class")&&(e=document.getElementsByClassName("secdisplay")[0],(e=parseInt(e.getAttribute("id").substring(7)))<6&&(location.hash="#/"+rp[e+1]))}function secright(){var e;"pagedisplay"==document.getElementById("page2").getAttribute("class")&&(e=document.getElementsByClassName("secdisplay")[0],1<(e=parseInt(e.getAttribute("id").substring(7)))&&(location.hash="#/"+rp[e-1]))}function highlightseclnk(){document.getElementsByClassName("lnkhighlight")[0]&&(document.getElementsByClassName("lnkhighlight")[0].style.opacity="1.0")}function addhighlgt(){var seccurrent=document.getElementsByClassName("secdisplay")[0],seccurnum=parseInt(seccurrent.getAttribute("id").substring(7));eval("seclink"+seccurnum).childNodes[0].classList.add("lnkhighlight")}function removehighlgt(){var seccurrent=document.getElementsByClassName("secdisplay")[0],seccurnum=parseInt(seccurrent.getAttribute("id").substring(7));document.getElementsByClassName("lnkhighlight")[0]&&(document.getElementsByClassName("lnkhighlight")[0].style.opacity=""),eval("seclink"+seccurnum).childNodes[0].classList.remove("lnkhighlight")}var lock2=1;function displaysec(e){lock2&&(lock2=0,displayseca(e),setTimeout(function(){lock2=1},"410"))}function displayseca(e){var t=document.getElementsByClassName("secdisplay")[0],n=e;t.getAttribute("id")<n.getAttribute("id")?(t.style.animation="secgo 0.4s cubic-bezier(0.4, 0, 1, 0) 1",setTimeout(function(){t.classList.remove("secdisplay"),n.classList.add("secdisplay"),n.style.animation="secshowup 0.4s cubic-bezier(0, 0.4, 0, 1) 1"},"400")):t.getAttribute("id")>n.getAttribute("id")&&(t.style.animation="secgo2 0.4s cubic-bezier(0.4, 0, 1, 0) 1",setTimeout(function(){t.classList.remove("secdisplay"),n.classList.add("secdisplay"),n.style.animation="secshowup2 0.4s cubic-bezier(0, 0.4, 0, 1) 1"},"400")),removehighlgt(),setTimeout(function(){addhighlgt(),highlightseclnk()},"410"),window.removeEventListener("resize",checkscrollonresize),t.removeEventListener("scroll",checkscrollonscroll),sec_scroll_r=sec_scroll_l=0,setTimeout(function(){checkscrollonsecalter(n),window.addEventListener("resize",checkscrollonresize),n.addEventListener("scroll",checkscrollonscroll)},"405")}function checkscrollonsecalter(e){sec_scroll_l=e.scrollHeight-e.clientHeight-e.scrollTop<4?1:0,sec_scroll_r=e.scrollTop<2?1:0}function checkscrollonscroll(){checkscrollonsecalter(this)}function checkscrollonresize(){setTimeout(function(){checkscrollonsecalter(document.getElementsByClassName("secdisplay")[0])},"250")}var sec_scroll_l=1,sec_scroll_r=1,scrollFunc=function(e){e=e||window.event;var t=document.getElementsByClassName("secdisplay")[0];e.wheelDelta<0?(sec_scroll_l&&secleft(),setTimeout(function(){scrolltopage2()},0)):0<e.wheelDelta?sec_scroll_r&&("section1"==t.getAttribute("id")&&scrolltopage1(),secright()):0<e.detail?(sec_scroll_l&&secleft(),setTimeout(function(){scrolltopage2()},0)):e.detail<0&&sec_scroll_r&&("section1"==t.getAttribute("id")&&scrolltopage1(),secright())};function okeys(e){return Object.keys(e)}function ovalues(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function req_sec_json(){for(var e=1;e<7;e++)req_specified_json(e)}function req_specified_json(o){var i=new XMLHttpRequest;i.open("get","/json/section"+o+"_content.json"),i.send(null),i.onload=function(){var e,t,n;200==i.status&&(e=(t=JSON.parse(i.responseText)).stitle,t=okeys(n=t.content),n=ovalues(n),createsection(o,e),section_addstuff(o,t,n))}}function createsection(e,t){var n=document.createElement("div");n.innerHTML=t,n.className="stitle",document.getElementById("section"+e).appendChild(n)}function section_addstuff(e,t,n){for(var o=document.getElementById("section"+e),i=0,s=0;s<127&&t[s];s++)-1!=t[s].indexOf("sinfo")&&createsinfo(s,o,n),-1!=t[s].indexOf("slink")&&createslink(s,o,n),-1!=t[s].indexOf("screenshots")&&(createsscreenshots(s,o,n,i),i++),-1!=t[s].indexOf("article_shortcut")&&createarticleshort(s,o,n)}function createsinfo(e,t,n){var o=document.createElement("div");o.className="sinfo",o.innerHTML=n[e],t.appendChild(o)}function createslink(i,current_sec,sc_values){var slink_container=document.createElement("div"),slink=document.createElement("a"),slk_command;slink.id=ovalues(sc_values[i])[0],slink.title=ovalues(sc_values[i])[1],slink.innerText=ovalues(sc_values[i])[2],slink.href=ovalues(sc_values[i])[3],slink.className="stitle2 slink",slink_container.id="slink_container",current_sec.appendChild(slink_container),slink_container.appendChild(slink),ovalues(sc_values[i])[4]&&(slk_command=ovalues(sc_values[i])[4],slink.onclick=function(){eval(slk_command)})}function createsscreenshots(e,t,n,o){var i=document.createElement("div"),s=document.createElement("div");i.className="stitle2 title",i.innerText="屏幕截图",s.className="sscreenshots",t.appendChild(i),t.appendChild(s),t.getElementsByClassName("sscreenshots")[o]&&((i=document.createElement("picture")).className="ss_pic",t.getElementsByClassName("sscreenshots")[o].appendChild(i),s=document.createElement("source"),i=document.createElement("img"),s.srcset=ovalues(ovalues(n[e])[1])[0],s.type="image/webp",i.src=ovalues(ovalues(n[e])[0])[0],i.style.width="100%",i.style.height="100%",t.getElementsByClassName("ss_pic")[o].appendChild(s),t.getElementsByClassName("ss_pic")[o].appendChild(i))}function createarticleshort(e,t,n){var o=document.createElement("div"),i=document.createElement("div");o.className="article_shortcut",i.className="article_shortcut_text";var s,c,l=ovalues(n[e])[0],a=ovalues(n[e])[1],r=ovalues(n[e])[2];c=ovalues(n[e])[3]?(s="&nbsp;&nbsp;&nbsp;&nbsp;<img src='icons/others/tag.svg'>&nbsp;"+(c=ovalues(n[e])[3]),',"'+a+'","'+c+'"'):(s="",',"'+a+'"'),i.innerHTML="<div href='javascript:void(0)' onclick='createmdprompt("+r+",0"+c+")'><mdtitle>"+l+"</mdtitle><br><mdtitle2><img src='icons/others/time.svg'>&nbsp;"+a+s+"</mdtitle2></div>",t.appendChild(o),o.appendChild(i)}function hidegfsites(){var e=getCookie("gfstate"),t=document.getElementsByClassName("outcn");if(""==e)for(var n=0;n<t.length;n++)t[n].style.display="none";else for(n=0;n<t.length;n++)t[n].style.display="inline"}document.querySelector("#main").addEventListener("DOMMouseScroll",scrollFunc,!1),document.querySelector("#main").onmousewheel=scrollFunc,-1!=window.location.href.indexOf(".github.io")&&window.addEventListener("load",function(){document.title=document.title+" (Mirror)"}),req_sec_json(),hidegfsites();var detectgwfworker=new Worker("scripts/detectgwf.js");detectgwfworker.onmessage=function(e){0==e.data&&(setCookie("gfstate","1",7),hidegfsites())};var bodyscroll=new Hammer(document.querySelector("#main"));bodyscroll.get("swipe").set({direction:Hammer.DIRECTION_VERTICAL}),bodyscroll.on("swipeup",function(e){scrolltopage2()}),bodyscroll.on("swipedown",function(e){sec_scroll_r&&scrolltopage1()}),bodyscroll.on("panup",function(e){scrolltopage2()}),bodyscroll.on("pandown",function(e){sec_scroll_r&&scrolltopage1()});var bodyscroll2=new Hammer(page2);bodyscroll2.on("swipeleft",function(e){secleft(),resetbodyscroll3()}),bodyscroll2.on("swiperight",function(e){secright(),resetbodyscroll3()});var bodyscroll3=new Hammer(document.getElementsByClassName("secdisplay")[0]);function resetbodyscroll3(){setTimeout(function(){bodyscroll3=Hammer(document.getElementsByClassName("secdisplay")[0])},"500")}const pic_list=["front_1","front_2","front_3","front_4","front_5","front_6","front_7","front_8","front_9","front_10","front_11","front_12"];var pic_size=96,timeoutcpposchg;function centerpic_initialize(){var e=document.createElement("div");e.style="width: 100vw; height: 100vh;",e.onmouseup=function(){cp_pos_changeall(),click_record()},document.getElementById("centerpic_container").appendChild(e);for(var t=0;t<pic_list.length;t++){var n=document.createElement("picture");n.className="centerpic_picelement",n.id=pic_list[t],n.style.position="absolute",n.style.left="calc(50vw - "+pic_size/2+"px)",n.style.top="calc(50vh - "+pic_size/2+"px)";var o=cp_pos_initialize();n.style.transform="translate("+o[0]+"px,"+o[1]+"px) rotate("+360*Math.random()+"deg)",n.style.opacity=.6,n.style.transition="transform 1s cubic-bezier(0.05, 0.2, 0, 1), opacity 0.25s";var i=document.createElement("source");i.srcset="images/centerpic/"+pic_list[t]+".webp",i.type="image/webp";o=document.createElement("img");o.src="images/centerpic/"+pic_list[t]+".png",o.height=pic_size,o.width=pic_size,o.style.opacity=0,o.setAttribute("onload","var a=document.querySelector('#"+pic_list[t]+"').childNodes[1];a.style.opacity=1;a.style.transition='0.25s';"),n.appendChild(i),n.appendChild(o),document.getElementById("centerpic_container").appendChild(n)}pic_size_adj(),setTimeout(function(){cp_pos_changeall()},5)}function cp_pos_initialize(){var e=Math.ceil(4*Math.random()),t=window.innerWidth,n=window.innerHeight;switch(e){case 1:return[-.5*t,n*(Math.random()-.5)];case 2:return[t*(Math.random()-.5),-.5*n];case 3:return[.5*t,n*(Math.random()-.5)];case 4:return[t*(Math.random()-.5),.5*n]}}function pic_size_adj(){pic_size=window.innerWidth<=864||window.innerHeight<=640?96:144;for(var e=0;e<pic_list.length;e++){var t=document.querySelector("#"+pic_list[e]);t.childNodes[1].height=pic_size,t.childNodes[1].width=pic_size}}function cp_resize_control(){timeoutcpposchg&&clearTimeout(timeoutcpposchg),timeoutcpposchg=setTimeout(function(){cp_pos_changeall(),pic_size_adj()},250)}function cp_pos_change(e){document.querySelector("#"+e).style.transform="translate("+window.innerWidth*(Math.random()-.5)*.8+"px,"+window.innerHeight*(Math.random()-.5)*.8+"px) rotate("+360*Math.random()+"deg)"}function cp_pos_changeall(){for(var e=0;e<pic_list.length;e++)cp_pos_change(pic_list[e])}function cp_rewoke(){window.onresize=function(){cp_resize_control()};for(var e=0;e<pic_list.length;e++){var t=cp_pos_initialize();document.querySelector("#"+pic_list[e]).style.transform="translate("+t[0]+"px,"+t[1]+"px) rotate("+360*Math.random()+"deg)"}setTimeout(function(){cp_pos_changeall()},5)}function cp_addprop(){for(var t=0;t<pic_list.length;t++){let e=document.querySelector("#"+pic_list[t]);e.onmouseover=function(){e.style.opacity=1},e.onmousedown=function(){e.style.opacity=.35},"front_9"==e.id?e.onmouseup=function(){e.style.opacity=1,liubing_trigger()}:e.onmouseup=function(){e.style.opacity=1,cp_pos_change(e.id),click_record()},e.onmouseout=function(){e.style.opacity=.6}}}centerpic_initialize(),window.onresize=function(){cp_resize_control()},cp_addprop();var liubing_status=0,lbsb_autoremove,lbaudio,lbtrigger=0,lbm,lbn,dj=document.querySelector("#front_9").childNodes[1];function liubing_trigger(){1!=lbtrigger?(lbtrigger=1,dj.style.opacity=.2,lbn=setTimeout(function(){lbtrigger=0},400),lbm=setTimeout(function(){cp_pos_change("front_9"),dj.style.opacity=""},400)):(dj.style.opacity="",clearTimeout(lbm),clearTimeout(lbn),lbtrigger=0,liubing())}function liubing(e){if(0==liubing_status){for(liubing_status=1,dj.style.animation="spin 4s linear infinite",(lbaudio=document.createElement("audio")).autoplay=1,lbaudio.loop=1;;){var t=Math.ceil(8*Math.random());if(window.randprev2!=t)break}if(window.randprev2=t,e)createliubingspan("♫&nbsp;&nbsp;"+(lbaudio.src=e));else{var n="https://wzq02.cf/demos/otm_demos_ogg/";switch(t){case 1:lbaudio.src=n+"dabig_dance.ogg",createliubingspan("♫&nbsp;&nbsp;Dabig Dance.mp4");break;case 2:lbaudio.src=n+"o108rocket.ogg",createliubingspan("♫&nbsp;&nbsp;电棍：all in ♿你爸↑♿火箭少女♿♿♿丶");break;case 3:lbaudio.src=n+"otto_control.ogg",createliubingspan("♫&nbsp;&nbsp;电棍：思喂！♿控制♿♿（Mind Control）");break;case 4:lbaudio.src=n+"gun_it_up_unfinished.ogg",createliubingspan("♫&nbsp;&nbsp;电棍：Give It Up♿（未完成）");break;case 5:lbaudio.src=n+"luv_the_giaoatic.ogg",createliubingspan("♫&nbsp;&nbsp;Luv the GIAOatic???");break;case 6:lbaudio.src=n+"invitation_from_mr_aniki.ogg",createliubingspan("♫&nbsp;&nbsp;Invitation From Mr.Aniki♂");break;case 7:lbaudio.src=n+"nigga.ogg",createliubingspan("♫&nbsp;&nbsp;ruma");break;case 8:lbaudio.src=n+"glitch_otto.ogg",createliubingspan("♫&nbsp;&nbsp;【ottomania:2023】Glitch♿OTTO♿")}}document.body.appendChild(lbaudio)}else{liubing_status=0;e=document.querySelector("audio");e.parentNode.removeChild(e),removeliubingspan(),dj.style.animation="spinstop 0.15s ease-out",setTimeout(function(){dj.style.animation=""},145)}}function createliubingspan(e){var t=document.createElement("span");t.innerHTML="<p>"+e+"</p>",t.style.textAlign="right",t.style.animation="appear .25s 1",t.id="liubingspan",document.getElementsByTagName("textrt")[0].appendChild(t),lbsb_autoremove=setTimeout(function(){removeliubingspan()},5e3)}function removeliubingspan(){clearTimeout(lbsb_autoremove),document.querySelector("#liubingspan")&&(document.querySelector("#liubingspan").style.animation="disappear 0.25s",setTimeout(function(){document.getElementsByTagName("textrt")[0].removeChild(document.querySelector("#liubingspan"))},245))}var cp_click_statistics=[0,0,0,0,0,0],cp_click_last5=[],statistic_entry_created=0,default_bgurl,default_bgurl;function click_record(){var e=cp_click_statistics[0],t=cp_click_statistics[1],n=cp_click_statistics[2],o=cp_click_statistics[3],s=cp_click_statistics[4],c=cp_click_statistics[5];if(o<3){if(0!=e){var l=Date.now()-e;if(15<=l){if(t=l,o&&o--,cp_click_last5[cp_click_last5.length]=t,6<=cp_click_last5.length){cp_click_last5.splice(0,1);var a=0;for(i=0;i<5;i++)a+=cp_click_last5[i];if(s=Number(parseFloat(5e3/a).toFixed(1)),0==statistic_entry_created&&5<=s&&(create_statistic_entry(),statistic_entry_created=1),10<=s){var r=0;for(i=1;i<5;i++)r+=Math.abs(cp_click_last5[i]-cp_click_last5[i-1]);r<10&&(o=3,console.log("检测到疑似连点器行为，已暂停统计点击速度。"),createalert("<h1 style='font-size: 56px'>连点器？</h1><p>没想到吧，我连连点检测都做出来了，哼哼...</p>",200),t=n=s=c=0)}}}else 3<=++o&&(console.log("两次点击间隔太短，已暂停统计点击速度。"),createalert("<h1 style='font-size: 56px'>脚本挂！？</h1><p>不是吧，这你都要开挂啊...</p>",174),t=n=s=c=0)}(0==n||t<n)&&(n=t),c<s&&(c=s),e=Date.now(),cp_click_statistics=[e,t,n,o,s,c]}}function display_cp_click_statistics(){var e,t,n,o;cp_click_statistics[1]?(e=cp_click_statistics[1]/1e3+" 秒",t=cp_click_statistics[2]/1e3+" 秒"):e=t="未统计",cp_click_statistics[4]?(n=cp_click_statistics[4]+" 次 / 秒",o=cp_click_statistics[5]+" 次 / 秒"):n=o="未统计",createalert("<h3>统计信息：</h3><p>上一次点击的时间间隔："+e+"</p><p>最短的点击时间："+t+"</p><p>最近 5 次的平均点击速度："+n+"</p><p>5 次点击平均速度最快："+o+"</p><p>统计数据将不会保存。<br>刷新或关闭本页后，数据将被重置。</p>",314)}function create_statistic_entry(){var e=document.createElement("a");e.title="查看统计信息",e.onmousedown=function(){display_cp_click_statistics()};var t=document.createElement("div");t.class="othlnk";var n=document.createElement("span");n.innerText="查看统计信息",t.appendChild(n),e.appendChild(t),document.querySelector("#othlnks").appendChild(e)}function createprompt(e,t,n,o,i,s){document.getElementsByClassName("prompt")[0]&&destroyprompt(1);var c=document.createElement("div");c.className="pmpt_bg",c.style="width: 100vw; height: 100vh; position: absolute; left: 0px; bottom: 0px; animation: appear 0.4s ease; background-color: rgba(0, 0, 0, 0.4)",document.body.appendChild(c);var l=document.createElement("div");l.className="prompt",l.id=e,l.className="large"==n?"prompt largeprompt":"prompt smallprompt",o&&(l.style.backdropFilter="blur(32px)"),l.style.animation="secshowup2 0.4s cubic-bezier(0, 0.6, 0, 1) 1",document.body.appendChild(l),t&&(o=document.createElement("div"),t=document.createElement("img"),o.className="pmpt_closebtn",o.onclick=function(){destroyprompt()},t.src="icons/others/close.svg",document.getElementById("main"),document.getElementsByClassName("prompt")[0].appendChild(o),document.getElementsByClassName("pmpt_closebtn")[0].appendChild(t)),i&&(l.addEventListener("mousedown",function(e){l.style.transitionDuration="0s";var t=e.clientX-l.offsetLeft,n=e.clientY-l.offsetTop;function o(e){l.style.top=e.clientY-n+"px",l.style.left=e.clientX-t+"px"}document.addEventListener("mousemove",o),document.addEventListener("mouseup",function(){document.removeEventListener("mousemove",o),l.style.transition=""})}),l.addEventListener("touchstart",function(e){l.style.transitionDuration="0s";var e=e.targetTouches[0],t=e.clientX-l.offsetLeft,n=e.clientY-l.offsetTop;function o(e){e=e.targetTouches[0];l.style.top=e.clientY-n+"px",l.style.left=e.clientX-t+"px"}document.addEventListener("touchmove",o),document.addEventListener("touchend",function(){document.removeEventListener("touchmove",o),l.style.transition=""})})),s&&(i=document.createElement("div"),s=document.createElement("img"),i.className="pmpt_closebtn fullscrnbtn",i.onclick=function(){prompt_fullscreen()},s.src="icons/others/fullscreen.svg",s.id="pmpt_fullscrnbtn",document.getElementById("main"),document.getElementsByClassName("prompt")[0].appendChild(i),document.getElementsByClassName("fullscrnbtn")[0].appendChild(s))}function destroyprompt(e){var t=document.getElementsByClassName("pmpt_bg")[0],n=document.getElementsByClassName("prompt")[0];if(e)return document.body.removeChild(n),void document.body.removeChild(t);n.style.animation="secgo 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1",t.style.animation="disappear 0.2s cubic-bezier(0.6, 0, 1, 0.6) 1",setTimeout(function(){document.body.removeChild(n),document.body.removeChild(t)},"195")}function createiframepmpt(e,t){createprompt("iframe_pmpt",1,"large",0,0,1);var n=document.createElement("iframe");n.src=e,n.style="position: relative; top: -56px; width: 100%; height: 100%; border-radius: 16px",n.frameborder=1,n.name=t,document.getElementsByClassName("prompt")[0].appendChild(n)}function createalert(e,t){createprompt("alert",1,"small",1,1,0);var n=document.getElementsByClassName("prompt")[0];t&&(n.style.top="calc(50vh - "+t/2+"px)",n.style.height=t+"px");t=document.createElement("div");t.className="prompt_text",t.innerHTML=e,n.appendChild(t),i18nextify.i18next.isInitialized&&window.i18nextify.forceRerender()}function createobjpmpt(e,t){createprompt("object_pmpt",1,"large",0,0,1);var n=document.createElement("object");n.data=e,n.style="position: relative; top: -56px; width: 100%; height: 100%; border-radius: 16px",n.name=t,n.type="text/html",document.getElementsByClassName("prompt")[0].appendChild(n)}function createvideopmpt(e,t,n){createprompt("video_pmpt",1,"large",0,0,1);var o=document.createElement("video");o.src=e,o.style="position: relative; top: -56px; width: 100%; height: 100%; border-radius: 16px",o.controls=1,o.id=t,n&&(o.autoplay=1),document.getElementsByClassName("prompt")[0].appendChild(o)}function prompt_fullscreen(){var e=document.getElementsByClassName("prompt")[0],t=document.getElementById("pmpt_fullscrnbtn");"prompt fullscreenprompt"==e.className?(t.src="icons/others/fullscreen.svg",e.className="prompt largeprompt"):(t.src="icons/others/fullscreen-exit.svg",e.className="prompt fullscreenprompt")}default_bgurl=-1!=window.location.href.indexOf("wzq02.cf")?"api/pic1":"https://bing.img.run/rand.php";var background_url=default_bgurl,lock_animbg=0,lock2_animbg=1,lock3_animbg=1,background_url;function show_background(e){var t=document.createElement("div"),n=document.createElement("span"),o=document.getElementsByTagName("textrt")[0],i=document.getElementById("links"),s=document.getElementById("cschooser"),c=t.style;t.id="animbg",c.position="absolute",c.left="-16px",c.top="-16px",c.backgroundSize="cover",c.backgroundPosition="50%, 50%",c.width="calc(100vw + 32px)",c.height="calc(100vh + 32px)",c.animation="appear 2.5s 1",c.transition="1.5s",c.filter="brightness(100%) opacity(25%)",i.style.transition="0.4s",s.style.transition="0.25s",t.onmouseover=function(){c.filter="brightness(100%) opacity(100%)",o.style.opacity="0.25",i.style.opacity="0.25",s.style.opacity="0.25"},t.onmouseout=function(){c.filter="brightness(100%) opacity(25%)",o.style.opacity="",i.style.opacity="",s.style.opacity=""},window.onresize=function(){c.transition="",setTimeout(function(){c.transition="1.5s"},5)},n.style.transition="0.25s",n.onmouseover=function(){window.matchMedia("(prefers-color-scheme: dark)").matches?n.style.filter="brightness(140%)":n.style.filter="brightness(65%)"},n.onmouseout=function(){n.style.filter=""},n.onmousedown=function(){window.matchMedia("(prefers-color-scheme: dark)").matches?n.style.filter="brightness(175%)":n.style.filter="brightness(25%)"},n.onmouseup=function(){createalert("<h3>Here are the tips:</h3>鼠标在本页上滑动时，图片会朝相反方向移动。<br>单击本页空白处可更换背景（有 5 秒的冷却时间）。<br>如果要更换背景功能使用的 api，在配色方案菜单中点击“更换背景图 API”，在弹出的窗口中填入你要使用的 API。<br>（点击“还原为默认”则可换回默认的图片 API）")};for(var l,a,r,d,m=0;m<6;m++)document.getElementsByClassName("sections")[m].style.backdropFilter="blur(24px)";-1!=e.indexOf(".mp4")||-1!=e.indexOf(".webm")?(l=1,a=document.createElement("video"),r=document.createElement("source"),a.id="bg_vid",a.autoplay="autoplay",a.muted="muted",a.loop="loop",r.src=e,(d=a.style).minWidth="100%",d.minHeight="100%",d.width="auto",d.height="auto",d.position="absolute",d.top="50%",d.left="50%",d.transform="translate(-50%,-50%)",-1!=e.indexOf(".mp4")?r.type="video/mp4":r.type="video/webm"):(c.backgroundImage="url("+e+")",setTimeout(function(){c.transform="scale(1.12)"},16),t.onclick=function(){lock_animbg&&(lock2_animbg=lock_animbg=0,c.transform="scale(1.4)",c.animation="disappear 0.5s 1",setTimeout(function(){document.getElementById("yabg").removeChild(t),c.transform="",e+="?1",c.backgroundImage="url("+e+")"},420),setTimeout(function(){c.filter="brightness(100%) opacity(100%)",c.animation="appear 2.5s 1",document.getElementById("yabg").appendChild(t),c.transition="1.5s",setTimeout(function(){c.transform="scale(1.12)"},16),lock2_animbg=1},440),setTimeout(function(){lock_animbg=1},5e3))},t.onmousedown=function(){c.transition="0.5s",lock_animbg&&(c.filter="brightness(125%) opacity(100%)")},document.addEventListener("mousemove",function(e){lock2_animbg&&lock3_animbg&&(c.transition="1.5s",c.transform="translate("+.1*(.5*window.innerWidth-e.clientX)+"px, "+.1*(.5*window.innerHeight-e.clientY)+"px) scale(1.12)",lock3_animbg=0,setTimeout(function(){lock3_animbg=1},50))}),window.addEventListener("deviceorientation",function(e){lock2_animbg&&lock3_animbg&&(c.transition="1s",c.transform="translate("+-e.gamma/90*window.innerWidth*.1+"px, "+-e.beta/180*window.innerHeight*.1+"px) scale(1.16)",lock3_animbg=0,setTimeout(function(){lock3_animbg=1},500))})),document.getElementById("centerpic_container").style.display="none",n.innerHTML="<p>使用的图片 API: <br>"+e+"</p><p>站长不对从第三方调用图片的内容负责。",n.style.textAlign="right",n.id="abspan",document.getElementById("yabg").appendChild(t),document.getElementsByTagName("textrt")[0].appendChild(n),l&&(document.getElementById("animbg").appendChild(a),document.getElementById("bg_vid").appendChild(r)),cschooseraddbgoptions(),document.getElementById("bgcon").style.opacity="0.6",document.getElementById("bgcon").title="禁用背景图片",i18nextify.i18next.isInitialized&&(document.getElementById("bgcon").title=i18nextify.i18next.t("禁用背景图片"))}function cschooseraddbgoptions(){var e=document.createElement("div");e.innerHTML="<c onclick='promptcustombgurl2()' style='position: relative; top:46px; left:4.5px;'>更换背景图 API</c>",e.id="bgoptions",document.getElementById("cschooser").appendChild(e),document.getElementById("cschooser").style.height="78px",window.matchMedia("(prefers-color-scheme: dark)").matches?e.style.color="#aaa":e.style.color="#444"}function promptcustombgurl2(){createalert("<h3 style='opacity: 0.75'>更换背景图 API</h3><input type='text' id='custom_bg_url' placeholder='请填入你要使用的图片 API：'></input><c style='position: relative; float: left; top: 16px;' href='javascript:void(0)' onclick='promptcustombgurl3();'>更换</c><c style='position: relative; top: 16px; right: 8px; float: right' href='javascript:void(0)' onclick=\"custombgurl('')\";>还原为默认</c>",180),localStorage.getItem("bgurl")&&(document.getElementById("custom_bg_url").value=localStorage.getItem("bgurl")),document.getElementById("custom_bg_url").addEventListener("keydown",function(e){13==e.keyCode&&promptcustombgurl3()})}function promptcustombgurl3(){var e=document.getElementById("custom_bg_url");e.value?custombgurl(e.value):(e.style="background-color:#f205;transition:none",setTimeout(function(){e.style=""},30))}function custombgurl(e){removebg(),e?(background_url=e,localStorage.setItem("bgurl",e)):(background_url=default_bgurl,localStorage.removeItem("bgurl")),show_background(background_url),destroyprompt()}function chgbgstate(){null!=localStorage.getItem("backgroundenabled")?(localStorage.removeItem("backgroundenabled"),removebg()):(localStorage.setItem("backgroundenabled","yes"),show_background(background_url))}function removebg(){document.getElementById("yabg").removeChild(document.querySelector("#animbg")),document.getElementsByTagName("textrt")[0].removeChild(document.querySelector("#abspan")),document.getElementById("cschooser").removeChild(document.querySelector("#bgoptions")),document.getElementById("cschooser").style.height="",document.getElementById("centerpic_container").style="display: block; animation: appear 0.7s",document.getElementById("bgcon").style.opacity="",document.getElementById("bgcon").title="启用背景图片",i18nextify.i18next.isInitialized&&(document.getElementById("bgcon").title=i18nextify.i18next.t("启用背景图片"));for(var e=0;e<6;e++)document.getElementsByClassName("sections")[e].style.backdropFilter="";cp_rewoke&&cp_rewoke()}function createmdprompt(e,t,n,o){createprompt("md_pmpt",1,"large",1,0,1),getmdfile(e,t,n,o)}function getmdfile(e,t,n,o){var i=new XMLHttpRequest;i.open("get","md/"+e+".md"),i.send(null),i.onload=function(){200==i.status&&rendermdprompt(i.responseText,t,n,o)}}function rendermdprompt(e,t,n,o){var s,c,l,a=document.getElementsByClassName("prompt")[0],r=document.createElement("div");for(r.className="prompt_text mdpmpt",void 0===window.marked&&(t=1),s=t?(s=e,(new showdown.Converter).makeHtml(s)):(s=e,marked.parse(s)),n&&o?c="<p class='article_top_text'><img src='icons/others/time.svg'>&nbsp;"+n+"&nbsp;&nbsp;&nbsp;<img src='icons/others/tag.svg'>&nbsp;"+o+"</p>":n&&(c="<p class='article_top_text'><img src='icons/others/time.svg'>&nbsp;"+n+"</p>"),n&&(s=0==s.indexOf("<h1>")?s.slice(0,s.indexOf("</h1>")+5)+c+s.slice(s.indexOf("</h1>")+5):c+s),r.innerHTML=s,i=0;i<127&&r.childNodes[i];i++)"object"==typeof r.childNodes[i].childNodes[0]&&r.childNodes[i].childNodes[0].alt&&((l=document.createElement("p")).innerText=r.childNodes[i].childNodes[0].alt,l.style="opacity: 0.75; text-align: center",r.childNodes[i].appendChild(l));a.appendChild(r)}function s_detect(){-1!=window.location.href.indexOf("s.wzq02")&&createalert("<h3>短链接</h3><p>本站现已提供短链跳转功能。</p><p>前缀跳转：<br>s.wzq02.cf/BV（哔哩哔哩视频）<br>s.wzq02.cf/av（哔哩哔哩视频）<br>s.wzq02.cf/ac（Acfun 视频）<br>s.wzq02.cf/sm（Niconico 视频）</p><p>社交平台：<br>s.wzq02.cf/bili（哔哩哔哩个人主页）<br>s.wzq02.cf/github（GitHub 主页）<br>s.wzq02.cf/ask（提问箱）<br>s.wzq02.cf/qqgroup（个人 QQ 群）</p><p>其他跳转：<br>s.wzq02.cf/1drive（个人网盘）<br>s.wzq02.cf/tv（私人直播间）<br>s.wzq02.cf/airasoft（艾拉软件库）</p><p>若不想再看到此提示，则请将地址栏中的前缀“s.”去掉。</p>")}setTimeout(function(){lock_animbg=1},5e3),null!=localStorage.getItem("bgurl")&&(background_url=localStorage.getItem("bgurl")),null!=localStorage.getItem("backgroundenabled")&&show_background(background_url),s_detect(),window.addEventListener("DOMContentLoaded",onhashchange),window.addEventListener("hashchange",onhashchange);var rp=["main","blog","filsvr","tv","demos","dl","about"];function tosec(e){e?("pagedisplay"==document.getElementById("page2").getAttribute("class")||scrolltopage2(),displaysec(e)):"pagedisplay"==document.getElementById("page2").getAttribute("class")&&scrolltopage1()}function onhashchange(){switch(location.hash){case"#/":case"":case"#/"+rp[0]:tosec();break;case"#/"+rp[1]:tosec(section1);break;case"#/"+rp[2]:tosec(section2);break;case"#/"+rp[3]:tosec(section3);break;case"#/"+rp[4]:tosec(section4);break;case"#/"+rp[5]:tosec(section5);break;case"#/"+rp[6]:tosec(section6);break;default:-1!=location.hash.indexOf("#/read/")&&createmdprompt(location.hash.slice(7))}}function ver(){var t=new XMLHttpRequest;t.open("get","json/ver.json"),t.send(null),t.onload=function(){var e;200==t.status&&(e=JSON.parse(t.responseText),document.getElementById("site_last_updated").innerHTML=e.version,document.getElementById("user_agent_info").innerHTML=navigator.userAgent,console.log("WZQ'02's site 3.1. version "+e.version),console.log("Current user-agent: "+navigator.userAgent))}}window.onload=function(){setTimeout(function(){ver()},50)};