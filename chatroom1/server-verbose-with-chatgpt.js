// Require direct connection to api.openai.com for this to work. Also you will need to provide your own API key and organization info.

const ws = require('nodejs-websocket');
var openai = require('openai');
const POST = 8081;//服务所在端口号
let onlinecount = 0;//在线人数统计
var configuration = new openai.Configuration({
    organization: "Insert_Your_Organization_Here",
    apiKey: "Insert_Your_API_Key_Here",
});
var openai = new openai.OpenAIApi(configuration);//OpenAI配置
chatgpt_msg = [];
chatgpt_msg_count = 0

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
		} else if (msgg.indexOf('*reset') != -1) {//接收手动重置chatgpt的请求，并执行
		    chatgpt_msg = [];
            chatgpt_msg_count = 0;
            broadcast({
			    type: 0,
			    msg: `${connect.userName} 手动重置了 ChatGPT。`
		    })
		    console.log(`${connect.userName} 手动重置了 ChatGPT。`);
		} else if (msgg.indexOf('*') != -1) {//接收与chatgpt对话的请求
			msgg = msgg.slice(1);
			broadcast({
				type: 2,
				msg: `${connect.userName}: *${msgg}`
		  	});
			console.log(`${connect.userName}: *${msgg}`);
			if (chatgpt_msg_count <= 9) {//未达到对话上限
			    chatgpt_msg[chatgpt_msg_count] = {role: "user", content: msgg};
			    chatgpt_msg_count++;
			} else {//达到对话次数上限后，通知用户并重置计数
			    chatgpt_msg = [];
                chatgpt_msg_count = 0;
                broadcast({
			        type: 0,
			        msg: `10 次连续对话上限已用完。ChatGPT 已被重置。`
		        })
		        console.log(`10 次连续对话上限已用完。ChatGPT 已被重置。`);
                chatgpt_msg[chatgpt_msg_count] = {role: "user", content: msgg};
			    chatgpt_msg_count++;
			}
			async function start_chat() {//异步发出对话请求的函数
				var completion = await openai.createChatCompletion({
                	model: "gpt-3.5-turbo",
                	messages: chatgpt_msg,
            	})
				if (completion.data.choices[0].message) {
                	res_content = completion.data.choices[0].message.content;
                	chatgpt_msg[chatgpt_msg_count] = {role: "assistant", content: res_content};
                	broadcast({
						type: 2,
						msg: `ChatGPT: [${chatgpt_msg_count}/10]${res_content}`
					});
					console.log(`ChatGPT: [${chatgpt_msg_count}/10]${res_content}`)
            	}
			}
			start_chat()//发出对话请求
		} else {//接收并处理用户发送的一般信息
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
      element.send(JSON.stringify(sendcontent,null,2));//send参数必须是字符串
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