//连接到服务器，指定常量
//const ws = new WebSocket('wss://wzq02.cf/websocketchat'),
//使用ReconnectingWebSocket脚本实现断线重连
const ws = new ReconnectingWebSocket('wss://wzq02.cf/websocketchat'),
	usrmsg = document.getElementById('usrmsg'),
	sendmsg = document.getElementById('sendmsg'),
	content = document.getElementById('chatcontent'),
	chgUsrName = document.getElementById('chgUsrName'),
	prompb = document.getElementById('prompb');

//cookie设置
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

//通知控制台已连接到服务器，并检查cookie里面的用户名
ws.addEventListener('open', (e) => {
	console.log("已连接到聊天服务器。");
	var usrName = getCookie('chatUserName');
	if (usrName == "") {
		askforusername();
	} else {
		ws.send(`setUsrName=${usrName}`);
		/*content.appendChild(format('您已连接到聊天室。'));*/
	}
	goBottom();
});
//接受服务器发送的信息，并呈现于chatcontent
ws.addEventListener('message', (e) => {
	console.log(e.data);
	content.appendChild(format(e.data));
	goBottom();
});

//发送消息
function sendusrmsg() {
	if (usrmsg.value.length <= 0) {
		alert(dystr(str1c));
	} else {
		ws.send(usrmsg.value);
		usrmsg.value = "";
	}
}
//回车发送消息
usrmsg.addEventListener('keydown',(e) => {
	if (e.keyCode == 13) {
		sendusrmsg();
	}
});

//第一次访问时向用户询问用户名
function askforusername() {
	var prompt = document.getElementById('askforusername');
	//更改用户名并刷新本页后，再次修改用户名时把原先用户名自动填写在usrname区
	document.getElementById('usrName').value = getCookie('chatUserName');
	prompb.style.display = "block";
	prompt.style.display = "block";
	usrName.addEventListener('keydown',(e) => {
		if (e.keyCode == 13) {
			chgusrname();
		}
	});
}
function chgusrname() {//用户提交用户名更改
	var usrName = document.getElementById('usrName');
	if (usrName.value == '') {
		alert(dystr(str2c));
	} else {
		setCookie('chatUserName',usrName.value,365);
		var usrName = getCookie('chatUserName');
		var prompt = document.getElementById('askforusername');
		ws.send(`setUsrName=${usrName}`);
		noticeUser();
		prompt.style.display = "";
	}
}
function noticeUser() {//显示注意事项
	var prompt = document.getElementById('notice');
	prompt.style.display = "block";
}
function closeprompt() {//关闭注意事项
	var prompt1 = document.getElementById('notice');
	var prompt2 = document.getElementById('info');
	if (prompt1.style.display == "block") {
		prompt1.style.animation = "zoomout 0.2s cubic-bezier(0.4, 0, 1, 0.4) 1";
		setTimeout(function(){prompt1.style.display = "none";prompt1.style.animation = ""},192);
	}
	if (prompt2.style.display == "block") {
		prompt2.style.animation = "zoomout 0.2s cubic-bezier(0.4, 0, 1, 0.4) 1";
		setTimeout(function(){prompt2.style.display = "none";prompt2.style.animation = ""},192);
	}
	prompb.style.animation = "disappear 0.2s ease 1";
	setTimeout(function(){prompb.style.display = "";prompb.style.animation = ""},192);
}
function displayinfo() {//显示信息
	var prompt = document.getElementById('info');
	var usrName = getCookie('chatUserName');
	var current = document.getElementById('currentusername');
	prompb.style.display = "block";
	prompt.style.display = "block";
	current.innerText = usrName
}
function alterusrname() {//信息页面修改用户名
	var prompt = document.getElementById('info');
	prompt.style.display = "none";
	askforusername();
}

//将服务器发送的信息格式化
function format(str) {
	const formatted = document.createElement('p');
	var roominfo = document.getElementById('roominfo');
	if (str.indexOf('{') == 0) {//服务器通知当前用户发出的信息或其他用户的相关信息
		let parseStr = JSON.parse(str);
		formatted.innerHTML = `<span class="timer">${parseStr.time}</span><br/><span class="msg">${parseStr.msg}</span>`;
		roominfo.innerText = parseStr.online;
		switch (parseStr.type) {
			case 0://用户离线时formatted的class
				formatted.className = "leave";
				break;
			case 1://用户加入时
				formatted.className = "entry";
				break;
			case 2://用户发言时
				formatted.className = "speak";
				break;
		}
	} else {//服务器通知当前用户已加入聊天室
		formatted.innerText = str;
	}
	return formatted;
}

//语录选择器
function quotechange(selector) {
	usrmsg.value = usrmsg.value + selector.options[selector.selectedIndex].value
}

//将滚动条位置置于底部
function goBottom() {
    content.scrollTop = content.scrollHeight;
}