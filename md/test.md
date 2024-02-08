# Markdown 渲染功能测试

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

    let test = "test";
    let test = "test";
```python
xar = "114514"
print(xar)
```
```javascript
function createmdprompt(mdname,engine) {//第二个参数指定使用的md转html引擎，不为0则使用showdown，否则使用marked
    createprompt("md_pmpt",1,"large",1,0,1);
    getmdfile(mdname,engine);
}

function getmdfile(mdname,e) {
    var request = new XMLHttpRequest();
    var mdc;
    request.open("get", "md/"+mdname+".md");
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            mdc = request.responseText;
            rendermdprompt(mdc,e);
        }
    }
}

function rendermdprompt(mdc,e) {
    var current = document.getElementsByClassName("prompt")[0];
    var innercon = document.createElement("div");
    innercon.className = "prompt_text mdpmpt";
    if (e) {
        var converter = new showdown.Converter(),
        text = mdc,
        html = converter.makeHtml(text);
    } else {
        text = mdc,
        html = marked.parse(text);
    }
    innercon.innerHTML = html;
    current.appendChild(innercon);
}
```
``console.log("this is a test")``

//字体加粗
**这里面的字体会加粗哦**

//字体高亮显示
==我会发光哦！==

//删除线
~~什么东西挡住我的视线了~~

//斜体
*我歪了*

>大家好啊，我是
>>大家好啊，我是
>>>大家好啊，我是

test
---
test

test
***
test

[测试链接](https://space.bilibili.com/12367945)

//无序列表
- otto
- theshy
- dota

//有序列表
1. 我阐释你的梦！
2. 好好好
3. 爽！太爽！


| 哎呀米诺 | 诶乌兹 |
| ---- | ---- |
| otto | 奥利安费，allin |

2^10^ 
H~2~O

pie
    title Pie Chart
    "电棍" : 91
    "山泥若" : 7
    "炫狗" : 2 

什么，这不是fio，这是我们的thwy兄贵[（原图作者：かくさとう / kakusatou_3333 @X）](https://twitter.com/kakusatou_3333)

![这是一行图片注解](https://wzq02.top/images/others/07966e7217d88236c4f583f7a21644bb2586a138.jpg)

这是另一张

![什么？你看不到这张？那看来你的网络条件不是很好额...](https://pbs.twimg.com/media/F8o3InTaIAAkHCT?format=webp)