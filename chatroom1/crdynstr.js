//本脚本的作用是生成随机数改变chatroom页面的部分字符串

var str1c = ["消息不能为空", "你咋不说话啊", "空消息是发不出来的，别试啦"];
var str2c = ["用户名不能为空，怕你不知道跟你说一下", "起个昵称吧", "你不起名字，别人咋认得你是谁啊"];

function dystr(strxc) {
	return strxc[Math.floor(Math.random()*3)];
}