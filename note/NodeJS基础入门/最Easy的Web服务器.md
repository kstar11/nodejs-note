# 最 Easy 的 Web 服务器

##### 前面我们学习了 NodeJS 中几个最常用的模块,通过这些模块,我们可以组合出一个简单的 web 服务器进行使用,先上代码:

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
1 首先我们分别引入了 http,path,fs 模块;

2 随后我们使用 http.createServer 创建一个 web 应用;

3 使用 fs.readFileSync 读取 test.html 的内容,文件路径使用 path.join 进行解析;

4 使用 res 描述响应状态和 content-type;

5 将读取到的文件信息的字符串内容传递给 res 的内容区域;

6 完成并结束返回信息

---

###### 基础知识讲解到这里就结束了,但是还有很多模块和 api 不曾讲解,因为太多太细;

###### 有空的时候一定要把所有模块全部过一遍,不求甚解,起码要知道模块是干什么用的,能应对什么场景;

###### 在学习基本知识的时候,还是希望能多练习,因为后续一旦开始学习框架,你就不会再反过头来学习基础知识了,最终的后果就是头重脚轻,不得章法;

###### 后续我们将开启 express 学习!!
