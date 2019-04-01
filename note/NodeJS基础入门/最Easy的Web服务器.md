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