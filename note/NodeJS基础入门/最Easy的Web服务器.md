# 最Easy的Web服务器

##### 前面我们学习了NodeJS中几个最常用的模块,通过这些模块,我们可以组合出一个简单的web服务器进行使用,先上代码:
```Javascript {.line-numbers}
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let htmlString = fs.readFileSync(path.join(__dirname, 'test.html'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(htmlString);
    res.end();
});

server.listen(3000);
```
代码解析:
1 首先我们分别引入了http,path,fs模块;

2 随后我们使用http.createServer创建一个web应用;

3 使用fs.readFileSync读取test.html的内容,文件路径使用path.join进行解析;

4 使用res描述响应状态和content-type;

5 将读取到的文件信息的字符串内容传递给res的内容区域;

6 完成并结束返回信息

---
###### 基础知识讲解到这里就结束了,但是还有很多模块和api不曾讲解,因为太多太细;
###### 有空的时候一定要把所有模块全部过一遍,不求甚解,起码要知道模块是干什么用的,能应对什么场景;
###### 在学习基本知识的时候,还是希望能多练习,因为后续一旦开始学习框架,你就不会再反过头来学习基础知识了,最终的后果就是头重脚轻,不得章法;
###### 后续我们将开启express学习!!
