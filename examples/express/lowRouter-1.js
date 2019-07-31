const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const route = url.parse(req.url).pathname;
  let htmlString;
  switch (route) {
    case "/login":
      htmlString = "您好！欢迎登陆！";
      break;
    case "/home":
      htmlString = "欢迎光临，这是我的个人首页！";
      break;
    default:
      htmlString = "这是一个简单网站的路由";
      break;
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(htmlString);
  res.end();
});

server.listen(3000);
