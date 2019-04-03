# 最基本的模块-url

这节我们一起来学习一下最后要单独讲解的NodeJS基础模块-url模块;

看到url这3个字母,你一定不陌生,甚至很熟悉!!是的,统一资源定位符-->简称url也就是我们常说的网址;

那么在NodeJS中url能处理什么事情呢?能应对什么样的功能场景呢?

**首先,这里透露一下,url一般会在我们分析request请求体的时候起作用**

接下来,看代码:

```javascript {.line-numbers}
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(url.parse(req.url));
    res.writeHead(200,{'content-type':'text/html'});
    res.end(`your are visiting ${req.url}`);
});
```
我们使用node命令运行这段代码,然后打开浏览器,与之前不同的是,这次我们要输入带路径带参数的地址,如[http://localhost:3000/user?username=oldjin&password=123456](http://localhost:3000/user?username=oldjin&password=123456)


之前强调过很多次,request(简写为req)是来自客户端的请求,而req.url则是用户访问的具体路径;

通过console.log和页面输出的内容,我们很容易理解req.url是神马东西,而这次要讲解的重点,则在于url模块

url模块提供了很多好用的api,一般都是用于解析url地址或者生成一个全新的url地址;

#### url.parse(url) 路径解析
此方法返回一个对象,对象的属性就是被解析后的url分解形成的;
用得最多的一般是:
* search || query (他们的区别就是一个?)
search就是我们get请求中的查询参数,queystring/queryparameters,当然这里我们拿到的是字符串string,但是经过转换后即可获得一个完整的对象,从而进行数据库查询或者其他判断事件;

* pathname
访问的具体地址,看到这个/user,不知你是否联想到了SPA单页应用中的路由!!而恰好,在NodeJS中实现路由,正是通过pathname;

* hash,port,path,href...
这些就不做太深入解释了,请大家自行了解;

#### new url.URL(path,host);

```javascript {.line-numbers}
const url = require('url');
const {URL} = url;
let myurl = new URL('/login','http://localhost:3000');
```
生成一个新的url地址,后面的参数是主机地址,前面是路径;

---

更多api,请自行阅读[NodeJS中文文档](http://nodejs.cn/api/url.html)
