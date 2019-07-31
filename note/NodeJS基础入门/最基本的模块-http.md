# 最基本的模块-http

在 NodeJS 中,有很多内置的功能模块,分别应对不同的场景,使用它们,只需要通过 require('模块名')即可,作为 web 前端开发,我们最熟悉,遇到过最多的场景,一般就是 http,毕竟 web 网页都是基于 http 协议的;

NodeJS 的 http 模块,功能十分强劲,有很多实用的 api,如果一一解析,那肯定是讲不完的,这里我们只列举工作中最常用的 api 进行解释,后续如果有时间,一定要仔细地研究一遍哦~!

- #### http 作为服务端

http 作为服务端的效果,在上一节我们已经体验过了,我们可以调用 http.createServer 方法创建一个应用,然后安排一个端口监听这个应用即可完成一个最简单的 web 服务器;

无须怀疑,这个简单的 web 服务器,在解析静态资源文件方面的性能,绝对不比常见的 Apache/Tomcat/Nginx 逊色,而且更加灵活,小巧;

_PS:如果你使用 VScode 工具进行开发,并且安装过 EaseServer/liveServer 等插件,也许你会对这 2 个插件的源码感兴趣_

使用 http.createServer 的时候,最重要就是后续的回调函数,这个回调函数决定了我们应用的全部内容,再次重申:

- ##### request 参数是来自请求方的信息,我们可以从 request 里面获得客户端的 cookie,content-type,查询参数(?a=1&b=2...),请求方式(get,post,delete,patch,put...);

- ##### response 参数是我们当前应用要返回给请求者的信息,我们可以根据条件设置响应状态,响应媒体 content-type,响应头部信息,响应数据等;

- #### http 作为客户端

使用 http 模块作为客户端,一般是用于发送请求;

使用方式及其简单,http.request(url,options,callback)即可发送最简单的请求;

当然 http.get(url,options,callback)这样的方式也是可以的;

**实际开发中我们一般会使用第三方插件进行请求,例如 superagent,fetch,curl 等,原生 http.request 的方法要把值解析出来还挺麻烦的,当然,有空的话,一定要试着自己去解析一波!**

更多 api,请自行阅读[NodeJS 中文文档](http://nodejs.cn/api/http.html)
