const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const queryString = require('querystring');

const server = http.createServer((req, res) => {
  console.log(url.parse(req.url).pathname);
  console.log(req.method);
  console.log(queryString.parse(url.parse(req.url).query));
  let htmlString = fs.readFileSync(path.join(__dirname, 'test.html'), 'utf8');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(htmlString);
  res.end();
});

server.listen(3000);
