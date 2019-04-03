const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(url.parse(req.url));
    res.writeHead(200,{'content-type':'text/html'});
    res.end(`您的IP地址是${req.url}`);
    //打开网页时,请在http://localhost:3000后面带上一小段路径或者查询参数
    //http://localhost:3000/user?username=oldwang
});

server.listen(3000);