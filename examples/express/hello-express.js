const express = require('express');
const app = express();

app.get('/',(req,res)=>res.send('你好,顺丰快递!'));
app.post('/',(req,res)=>res.send({name:'顺丰',type:'快递'}));

app.listen(3000);
