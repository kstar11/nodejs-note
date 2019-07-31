# 最 Low 的路由

##### 上一篇，我们完成了一个最简单的 web 服务器，但是这个程序过于简单了，就只有一个页面,无论我们使用什么路径访问，它都只有一个页面；

##### 说道这里，大家肯定也就联想到了我们在 React、Vue 等 SPA 中做过的事情，编写路由，那么怎么样在 node 中实现路由呢？

##### 其实方法比较土，就是利用 http 请求的 request 对象的 path 进行分支判断，代码如下：

```Javascript {.line-numbers}
const server = http.createServer((req, res) => {
  const route = url.parse(req.url).pathname;
  let htmlString;
  switch (route) {
    case "/login":
      htmlString = "您好！欢迎登陆！";
      break;
    case "/home":
      htmlString = "欢迎光临，这是我的个人首页！";
      break;
    default:
      htmlString = "这是一个简单网站的路由";
      break;
  }
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(htmlString);
  res.end();
});

```

##### 代码相对较土，思路就是通过访问路径的 path 进行分支判断，然后针对每个分支进行单独的渲染；

##### 前面我们说过，在request对象里面，不仅可以拿到访问路径，还可以拿到请求的方法，这样，我们就可以在针对路径再对请求方法进行判断，然后进行对应操作；

