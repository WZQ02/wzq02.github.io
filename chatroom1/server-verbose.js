const ws = require('nodejs-websocket');
const POST = 8081;//服务所在端口号
let onlinecount = 0;//在线人数统计

const server = ws.createServer((connect) => {
	onlinecount++;

	//用户加入
	connect.on('text',(msgg) => {
		if (msgg.indexOf('setUsrName=') != -1) {//接收并处理用户发送的用户名
            connect.userName = msgg.slice(11);
            broadcast({
          	    type: 1,
          	    msg: `${connect.userName} ${dystr(str1c)}`
            });
            console.log(`${connect.userName} ${dystr(str1c)}`);
		} else {//接收并处理用户发送的信息
			broadcast({
          	    type: 2,
          	    msg: `${connect.userName}: ${msgg}`
            });
            console.log(`${connect.userName}: ${msgg}`);
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
});

//广播
function broadcast(content) {
	let sendcontent = {
		type: content.type,
		msg: content.msg,
		time: new Date().toLocaleTimeString(),
		online: onlinecount
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