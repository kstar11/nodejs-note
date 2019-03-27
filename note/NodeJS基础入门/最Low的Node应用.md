## 最Low的Node应用
接上一节,我们已经大约知道了Node是如何运作的:
* NodeJS的代码就是JavaScript的语法;
* NodeJS的程序运行脱离开了浏览器;

然后小白同学可能就疑问了,如果NodeJS的运行脱离了浏览器,那么我怎么写页面呢?
不要方,接下来,我们就马上尝试一下,怎么用NodeJS写页面;
先上代码,我们可以先复制下面这段代码,尝试运行,之后,我们再来一行一行的解释代码用意;
```Javascript {.line-numbers}
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Low</title>
    </head>
    <body>
        <h1>这是一个很low的应用!</h1>
    </body>
    </html>
    `);
    res.end();
});

server.listen(3000);
```
新建在myNode文件夹下,新建low.js,粘贴以上代码并保存,之后打开命令行,输入:
```bash
node low.js
```
接下来,我们打开浏览器,并在地址栏输入
```
http://localhost:3000
```
是否看到网页中显示着 **这是一个很low的应用!**

---
下面,我们一起来逐行分析代码:

```Javascript {.line-numbers}
const http = require('http');
// const不多做解释,后面的require('http')则表示引入NodeJS的http模块
```
首先,强制性告诉大家并记住,NodeJS是遵从commonjs规范的,而commonjs引入其他的文件/模块就是以require(路径)的方式进行;
**至于什么是commonjs规范,什么是ESModule请大家自行百度阮一峰前辈,或者廖雪峰前辈,他们的个人博客上面都有非常详细的介绍**
其后,你可以暂时理解require(路径)等效于我们html中的
```
<script src="路径"></script>
```
最后,http模块是NodeJS众多内置模块中常用的模块之一;
在下一节,我们会详细讲解NodeJS的几大常用模块,现在,我们继续分析代码;
```Javascript {.line-numbers}
const server = http.createServer((req, res) => {
//前面我们引入的http模块,他是一个对象,在这里,我们调用他的createServer方法;
//createServer他在执行之后会创建一个web服务,这个方法有2个参数
## 升阶思考:为什么这里会用一个回调函数来进行操作? ##
//一个request,这个是来自请求方的信息合集
//一个response,由我们(Node)返回过去给请求方的
```
对于http,想必大家不陌生,关于三次握手这种经典的面试题就不在赘述了,这里最重要的东西就是req和res,这2大金刚将伴随我们的NodeJS生涯,搞懂了req跟res,NodeJS你就掌握了一大半,所以,请牢记;
这次的low应用,我们并没使用req对象,没有从请求方获取信息;
但是对于res,且看我们仔细分析:
```Javascript {.line-numbers}
res.writeHead(200, { 'Content-Type': 'text/html' });
//通过res对象,将当前返回信息的状态进行修改,并制定content-type类型
res.write(`hello`);
//通过res对象编写请求反馈 ==>这里为了节省代码量,用hello替代了原代码中的html字符串
res.end();
//通过res的end方法,告诉对方,我的表演完毕
server.listen(3000);
//这句话的意思就是说我们这个Node应用去监听3000端口,端口改动了,我们在浏览器里面访问的地址也要相应的改动
```
首先的res.writeHead是先告诉对方,你这次请求的反馈状态,如我们一般所知的200,400,404,500等,都是现有请求状态,在继续后续的动作;

**PS:把writeHead里面的200改成400(403,404,500),看看会有什么效果 ==>记得打开控制台,看network**

紧跟在200后面的对象,是一个属性描述,告诉请求者,我反馈给你的信息的content-type是text/html类型,也就是我们常说的web网页;

**PS:把text/html改成text/plain试试看**

res.write这个方法则是描写返回信息的详细内容,一般是sting或者num才接受;

**PS:用write写一个obj或者arr试试看**

res.end这个方法是告诉请求者,我表演完了,没东西再给你了,你自己玩吧,我要挂断这次请求了!

**PS:把res.end()这个方法注释掉,看看会发生什么**

### 到这里,我们完成了一次经典的http会话
* #### 通过打开浏览器并访问[http://localhost:3000]()的方式向我们这个low.js所建立起来的web应用发送访问请求;
* #### low.js建立的web应用在收到请求之后,首先是将自己的反馈状态定义为200,接下来告诉请求者,我要反馈给你的是text/html类型的数据;
* #### 在定义完状态及反馈类型之后,再将要发送的数据返回给请求方;
* #### 最后,告诉请求者,这次就这么多东西给你,还要的话请下次再来!

---
##### 至此,我们这个最low的Node应用就完成了,请大家牢记req和res这2大金刚!!
##### 也希望大家把PS里面的提问执行一遍,看看会有什么不同的效果,加深一下印象及理解!!
##### 下一节我们将开始详细讲解NodeJS的常用模块~飙车正式提速!
