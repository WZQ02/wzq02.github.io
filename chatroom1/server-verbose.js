const serveredition = 1;
const displaytime = 0;//console上输出时间信息
const showdate = 1;//显示日期

const ws = require('nodejs-websocket');
const POST = 8081;//服务所在端口号
let onlinecount = 0;//在线人数统计

let prev_msgs = {}//过往的消息记录，保存在内存

const server = ws.createServer((connect) => {
	onlinecount++;

	//用户加入
	connect.on('text',(msgg) => {
		//改用json解析方式，同时考虑到客户端不发送json时的错误处理
		let user_msg_type, msg_content;
		try {
			msg_json_parsed = JSON.parse(msgg)
			switch (msg_json_parsed.type) {
				case 1://正常消息
					msg_content = msg_json_parsed.msg;
					user_msg_type = 1;
					break
				case 2://更改用户名
					connect.userName = msg_json_parsed.username;
					user_msg_type = 2;
					break
				case 5://客户端发送心跳包
					format_broadcast({
						type: 5
					});
					break
				case 9://客户端请求之前的消息记录
					send_previous_msgs(connect.userName)
					break
				case 90://客户端请求清空消息记录
					prev_msgs = {}
					clog(`${connect.userName} 清空了消息记录。`)
					break
			}
		}
		catch {//使用原先的处理逻辑
			if (msgg.indexOf('setUsrName=') != -1) {//接收并处理用户发送的用户名
				connect.userName = msgg.slice(11);
				user_msg_type = 2;
			} else {//接收并处理用户发送的信息
				msg_content = msgg;
				user_msg_type = 1;
			}
		}
		finally {
			switch (user_msg_type) {
				case 1://正常消息
					format_broadcast({
						type: 2,
						msg: `${connect.userName}: ${msg_content}`,
						username: connect.userName
					});
					store_msg({
						msg: msg_content,
						time: datetime(),
						username: connect.userName
					})
					clog(`${connect.userName}: ${msg_content}`);
					break;
				case 2://更改用户名
					format_broadcast({
						type: 1,
						msg: `${connect.userName} ${dystr(str1c)}`
					});
					clog(`${connect.userName} ${dystr(str1c)}`);
					break;
			}
		}
	});
	//用户退出
	connect.on('close',() => {
		onlinecount--;
		format_broadcast({
			type: 0,
			msg: `${connect.userName} ${dystr(str2c)}`
		})
		clog(`${connect.userName} ${dystr(str2c)}`);
	})
	connect.on('error', (err) => {
		clog(`有人关掉了聊天窗口。`);
	})
});

//格式化广播信息
function format_broadcast(content) {
	let temp_username = "";
	if (content.username) {
		temp_username = content.username;
	}
	let sendcontent = {
		type: content.type,
		msg: content.msg,
		time: datetime(),
		online: onlinecount,
		svrver: serveredition,
		username: temp_username
	};
	broadcast(JSON.stringify(sendcontent))//send参数必须是字符串
}
//存储发送的信息
function store_msg(content) {
	let msg_num = Object.keys(prev_msgs).length;
	prev_msgs[msg_num] = content;
	if (msg_num >= 10) {
		delete prev_msgs[0];
		for (let i=0; i<msg_num; i++) {
			prev_msgs[i] = prev_msgs[i+1];
		}
		delete prev_msgs[msg_num];
	}
}
//向特定用户发送先前消息
function send_previous_msgs(username) {
	let sendcontent = {
		type: 9,
		prev_msg: prev_msgs,
		time: datetime(),
		online: onlinecount,
		svrver: serveredition,
		username: ""
	}
	touser(JSON.stringify(sendcontent),username)
}

//广播
function broadcast(content) {
	server.connections.forEach((element)=>{
      	element.send(content);
    });
}
//向特定用户发送
function touser(content,username) {
	server.connections.forEach((element)=>{
		if (element.userName == username) {
			element.send(content);
		}
	});
}
//请求当前时间和日期
function datetime() {
	if (showdate) {
		return new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString()
	} else {
		return new Date().toLocaleTimeString()
	}
}
//console.log封装
function clog(msg) {
	if (displaytime) {
		console.log(`[${datetime()}] ${msg}`)
	} else {
		console.log(msg)
	}
}

//动态改变用户加入或离开时的提示字符
var str1c = ["加入了进来。", "来啦。", "出现了！", "刚刚降落了。"];
var str2c = ["离开了。", "溜走了。", "默默地离开了。", "已退。"];
function dystr(strxc) {
	return strxc[Math.floor(Math.random()*4)];
}

//发送POST请求，启动服务器
server.listen(POST,() => {
	clog(`服务器已启动。`);
})