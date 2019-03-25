const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let path1 = path.join(__dirname, '../HelloNode');
    // console.log('path1', path1);
    let path2 = path.resolve('note', 'NodeJS基础入门');
    // console.log('path2', path2);
    fs.readFile(path.join(__dirname, 'test.js'), 'utf8', (err, data) => {
        if (err) {
            // console.log('err', err)
        } else {
            // console.log('data', data)
        }
    });
    let file2 = fs.readFileSync(path.join(__dirname, 'test.js'), 'utf8');
    // console.log('file2', file2);
    let url1 = url.parse('www.baidu.com');
    // console.log('url1',url1);
    let url2 = new url.URL('/hello','http://www.baidu.com');
    // console.log('url2',url2);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello NodeJS');
});

server.listen(3000);