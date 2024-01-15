const serveredition = 1;
const ws = require('nodejs-websocket');
const POST = 8081;//服务所在端口号
let onlinecount = 0;//在线人数统计

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
				case 5:
					broadcast({
						type: 5
					});
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
					broadcast({
						type: 2,
						msg: `${connect.userName}: ${msg_content}`
					});
					console.log(`${connect.userName}: ${msg_content}`);
					break;
				case 2://更改用户名
					broadcast({
						type: 1,
						msg: `${connect.userName} ${dystr(str1c)}`
					});
					console.log(`${connect.userName} ${dystr(str1c)}`);
					break;
			}
		}
	});
	//用户退出
	connect.on('close',() => {
		onlinecount--;
		broadcast({
			type: 0,
			msg: `${connect.userName} ${dystr(str2c)}`
		})
		console.log(`${connect.userName} ${dystr(str2c)}`);
	})
	connect.on('error', (err) => {
		console.log("有人关掉了聊天窗口。");
	})
});

//广播
function broadcast(content) {
	let sendcontent = {
		type: content.type,
		msg: content.msg,
		time: new Date().toLocaleTimeString(),
		online: onlinecount,
		svrver: serveredition
	};
	server.connections.forEach((element)=>{
      element.send(JSON.stringify(sendcontent));//send参数必须是字符串
    });
}

//动态改变用户加入或离开时的提示字符
var str1c = ["加入了进来。", "来啦。", "出现了！", "刚刚降落了。"];
var str2c = ["离开了。", "溜走了。", "默默地离开了。", "已退。"];
function dystr(strxc) {
	return strxc[Math.floor(Math.random()*4)];
}

//发送POST请求，启动服务器
server.listen(POST,() => {
	console.log("服务器已启动。");
})