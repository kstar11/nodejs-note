const http = require('http');


http.get('http://nodejs.cn/api/http.html#http_http_request_options_callback', (res) => {
    console.log(res)
})
