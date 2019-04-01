# 最基本的模块-http
在NodeJS中,有很多内置的功能模块,分别应对不同的场景,使用它们,只需要通过require('模块名')即可,作为web前端开发,我们最熟悉,遇到过最多的场景,一般就是http,毕竟web网页都是基于http协议的;
NodeJS的http模块,功能十分强劲,有很多实用的api,如果一一解析,那肯定是讲不完的,这里我们只列举工作中最常用的api进行解释,后续如果有时间,一定要仔细地研究一遍哦~!

* #### http作为服务端
http作为服务端的效果,在上一节我们已经体验过了,我们可以调用http.createServer方法创建一个应用,然后安排一个端口监听这个应用即可完成一个最简单的web服务器;
无须怀疑,这个简单的web服务器,在解析静态资源文件方面的性能,绝对不比常见的Apache/Tomcat/Nginx逊色,而且更加灵活,小巧;
*PS:如果你使用VScode工具进行开发,并且安装过EaseServer/liveServer等插件,也许你会对这2个插件的源码感兴趣*

使用http.createServer的时候,最重要就是后续的回调函数,这个回调函数决定了我们应用的全部内容,再次重申:
* ##### request参数是来自请求方的信息,我们可以从request里面获得客户端的cookie,content-type,查询参数(?a=1&b=2...),请求方式(get,post,delete,patch,put...);
* ##### response参数是我们当前应用要返回给请求者的信息,我们可以根据条件设置响应状态,响应媒体content-type,响应头部信息,响应数据等;

* #### http作为客户端
使用http模块作为客户端,一般是用于发送请求;
使用方式及其简单,http.request(url,options,callback)即可发送最简单的请求;
当然http.get(url,options,callback)这样的方式也是可以的;

**实际开发中我们一般会使用第三方插件进行请求,例如superagent,fetch,curl等,原生http.request的方法要把值解析出来还挺麻烦的,当然,有空的话,一定要试着自己去解析一波!**

更多api,请自行阅读[NodeJS中文文档](http://nodejs.cn/api/)