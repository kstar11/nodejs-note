# 最基本的模块-fs

前面我们讲解了http模块和path模块,这2个模块,理解起来并不难,使用起来也很方便,因为我们在工作中经常与路径,web服务打交道;

这一节我们讲解的模块是fs模块,看到fs你是不是脑壳一懵,fs是神马鬼?

fs模块是NodeJS用于应对解析文件和文件夹这一场景的,我们前端程序员,之前除了在文件上传中会操作到文件系统,平时一般没机会操作文件,所以这一节,大家要多多用心!!

---
* ##### 读取文件

fs.readFile(path,options,callback)
```javascript {.line-numbers}
const fs = require('fs');
fs.readFile('../NodeJS基础入门/从开始写起.md','utf8',(err,data)=>{
    if(!err){
        console.log(data)
    }
})
// 当文件不存在或者路径解析错误时将触发err
```
从上面的例子,我们不难看出,fs.readFile方法是一个经典的异步回调方法,就如我们在经典ajax中的success一样,离开callback的范围,文件的内容将无法获得;

fs.readFileSync(path,options);

```javascript {.line-numbers}
const fs = require('fs');
const mdfile = fs.readFileSync('../NodeJS基础入门/从开始写起.md','utf8');
console.log(mdfile);
// 当文件不存在或者路径解析错误时将触发err
```
通过这个例子,我们不难想象,ES6+提出的async/await(当然,如果你没了解过async/await,请百度);

* ##### 读取文件夹

fs.readdir(path,options,callback);

与readFile一样,readdir返回的是path所在的目录下所有的文件以及文件夹;

fs.readdirSync同readFileSync;

* ##### 写入文件

fs.writeFile(file,data,options,callback);

```javascript {.line-numbers}
const fs = require('fs');
fs.writeFile('./text.txt','测试一下文件写入','utf8',(err)=>{
    if(err) throw err;
    console.log('文件已保存!');
})
// 当文件不存在时自动创建
// 因为NodeJS的异步问题,杜绝同时对一个文件进行多次写入
```
fs.writeFileSync(file,data,options);

此api返回undefined,调用即执行;

---
其他api:

//文件信息

fs.stat() 

//复制文件 =>有sync版本

fs.copyFile(source,destination,options,callback);

//创建文件夹 =>有sync版本

fs.mkdir(source,destination,options,callback);

更多api,请自行阅读[NodeJS中文文档](http://nodejs.cn/api/fs.html)
