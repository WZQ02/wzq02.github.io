const displaytime = 0;//console上输出时间信息
const POST = 8081;//服务所在端口号
const verbose = 0;//是否在console中输出用户进出行为

const serveredition = 2;
const showdate = 1;//显示日期
const save_history = 1;//是否保存聊天历史记录
const max_history = 25;//历史记录最大条数
const history_file_path = './history.json'//历史记录json文件路径

const fs = require('fs');
const ws = require('nodejs-websocket');

let onlinecount = 0;//在线人数统计

let prev_msgs = {}//过往的消息记录，保存在内存

if (save_history) {//如果启用保存历史记录，服务器启动时载入上次的历史记录
	fs.readFile(history_file_path,{encoding:"utf-8"},function(err,fr){
		if (!err) {
			prev_msgs = JSON.parse(fr)
		}
	})
}
function save_history_to_disk() {
	let parsed = JSON.stringify(prev_msgs)
	fs.writeFile(history_file_path,parsed,function(err) {
		if (err) {
			clog("历史记录保存失败。"+err)
		}
	})
}

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
					//send_previous_msgs(connect.userName)
					send_previous_msgs(connect.key)
					send_sid_list();//同时，更新sid_list
					break
				case 20://客户端发送信标
					format_broadcast({
						type: 20,
						username: connect.userName,
						sid: connect.key
					});
					if (verbose) {clog(`${connect.userName} 发送了信标。`)}
					break
				case 90://客户端请求清空消息记录
					prev_msgs = {}
					clog(`${connect.userName} 清空了消息记录。`)
					break
			}
		}
		catch(err) {//使用原先的处理逻辑(客户端不发送json，或者上面的处理方式报错)
			if (msgg.indexOf('setUsrName=') != -1) {//接收并处理用户发送的用户名
				connect.userName = msgg.slice(11);
				user_msg_type = 2;
			} else {//接收并处理用户发送的信息
				msg_content = msgg;
				user_msg_type = 1;
			}
			if (verbose) {clog(err)}
		}
		finally {
			switch (user_msg_type) {
				case 1://正常消息
					format_broadcast({
						type: 2,
						msg: `${connect.userName}: ${msg_content}`,
						username: connect.userName,
						sid: connect.key
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
						msg: `${connect.userName} ${dystr(str1c)}`,
						username: connect.userName,
						sid: connect.key
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
			msg: `${connect.userName} ${dystr(str2c)}`,
			sid: connect.key
		})
		if (verbose) {clog(`${connect.userName} ${dystr(str2c)}`)};
	})
	connect.on('error', (err) => {
		if (verbose) {clog(`有人关掉了聊天窗口。`)};
	})
});

//格式化广播信息
function format_broadcast(content) {
	let temp_username = "";
	let temp_sid = "";
	if (content.username) {
		temp_username = content.username;
	}
	if (content.sid) {
		temp_sid = content.sid.slice(0,8);
	}
	let sendcontent = {
		type: content.type,
		msg: content.msg,
		time: datetime(),
		online: onlinecount,
		svrver: serveredition,
		username: temp_username,
		sid: temp_sid
	};
	broadcast(JSON.stringify(sendcontent))//send参数必须是字符串
}
//存储发送的信息
function store_msg(content) {
	let msg_num = Object.keys(prev_msgs).length;
	prev_msgs[msg_num] = content;
	if (msg_num >= max_history) {
		delete prev_msgs[0];
		for (let i=0; i<msg_num; i++) {
			prev_msgs[i] = prev_msgs[i+1];
		}
		delete prev_msgs[msg_num];
	}
	if (save_history) {save_history_to_disk()};
}
//向特定用户发送先前消息
function send_previous_msgs(key) {
	let sendcontent = {
		type: 9,
		prev_msg: prev_msgs,
		time: datetime(),
		online: onlinecount,
		svrver: serveredition,
		username: ""
	}
	touser(JSON.stringify(sendcontent),key)
}
//更新sid_list
function send_sid_list() {
	let list = {}//获取当前sid list
	server.connections.forEach((element)=>{
		list[element.key.slice(0,8)] = element.userName || "?";
	});
	let sendcontent = {
		type: 11,
		time: datetime(),
		online: onlinecount,
		svrver: serveredition,
		username: "",
		sid_list: list
	}
	broadcast(JSON.stringify(sendcontent))
}

//广播
function broadcast(content) {
	server.connections.forEach((element)=>{
      	element.send(content);
    });
}
//向特定用户发送
function touser(content,key) {
	server.connections.forEach((element)=>{
		if (element.key == key) {
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