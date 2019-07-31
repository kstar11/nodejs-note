const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const requestMethod = req.method;
  let message = '';
  let route = url.parse(req.url).pathname;
  let queryParameters = url.parse(req.url).query;
  switch (requestMethod) {
    case 'GET':
      message = `您现在访问的路由是${route},您使用的请求类型是${requestMethod},您的查询参数是${queryParameters}`;
      break;
    case 'POST':
      let postData = '';
      req.on('data', chunk => {
        postData += chunk;
      });
      req.on('end', () => {
        console.log(postData)
      });
      message = `您现在访问的路由是${route},您使用的请求类型是${requestMethod},您的查询参数是${queryParameters}`;
      break;
    case 'PATCH':
      message = `您现在访问的路由是${route},您使用的请求类型是${requestMethod}`;
      break;
    case 'DELETE':
      message = `您现在访问的路由是${route},您使用的请求类型是${requestMethod}`;
      break;
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(message));
  res.end();
});

server.listen(3000);
