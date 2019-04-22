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
