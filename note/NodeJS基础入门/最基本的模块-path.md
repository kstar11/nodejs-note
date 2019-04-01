#最基本的模块-path
http协议是我们开发过程中使用的最多的协议,因此我们对于http模块也肯定不陌生,多写几次就一定能得心应手,这一节我们要解释的这个模块,我们工作中天天用到,但是你却不一定对它了解,它就是--path;

path模块可能是NodeJS中业务量最大的一个模块,path:路径,引路人,通常都是最繁忙的,我们读取文件,编写逻辑的过程中,很多时候都会用到path去解析路径,尤其是文件上传!

如同我们写html/css,为img标签指定src的时候,可以用绝对路径/相对路径,在NodeJS中,我们也是这样的概念;

这一节,我们也只介绍path模块的部分主要api,至于其他不常用的api,请大家自行练习;

___

#### 相对路径
path.relative(source,destination);
这个方法将返回从source到destination的相对路径,即是(./xxx/xxx || ../xxx/xxx),此方法用得较少;
path.join(path1,path2,path3...);
此方法将会把传入的path片段组成一个规范的路径地址返回,如:
```javascript {.line-numbers}
const path = require('path');
const path1 = path.join('examples','HelloNode','test.js');
console.log(path1);
// /examples/HelloNode/test.js
```
#### 绝对路径
path.resolve(path1,path2...);
这个方法将返回一个绝对路径,能生成绝对路径的path参数将被使用,不能生成的将被抛弃,如果不传参,返回当前工作目录的绝对路径;
```javascript {.line-numbers}
const path = require('path');
const path1 = path.resolve('examples','HelloNode');
console.log(path1);
// X:/NodeJS-Note/examples/HelloNode
```
在NodeJS中,有一个__dirname的全局变量,使用__dirname可以获得当前文件夹的绝对路径,于是乎,工作中一般会直接使用path.join(__dirname,'../xxx');

#### 其他
path.parse(path);
//返回一个对象,包含从path的根路径到文件名的全部信息;
path.isAbsolute(path);
//返回一个Boolean,判断path是否为绝对路径;

更多api,请自行阅读[NodeJS中文文档](http://nodejs.cn/api/)