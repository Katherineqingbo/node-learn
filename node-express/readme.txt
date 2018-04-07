express完全是由路由和中间件构成的web快速开发框架
使用express生成器快速形成项目骨架
$npm install -g express-generator
$express project
$cd project
$npm install



express对象与方法

1.Application对象[创建一个express应用，通过app对象，可以实现定向HTTP请求、配置中间件、渲染html、配置模板等]
2.Request对象    [Request对象代表HTTP请求，及请求中查询字符串、请求体、HTTP头等]
3.Response对象
4.Router对象


分类
应用级中间件    (app.use() app.method())
路由处理中间件  (express.Router())
错误处理中间件  (err,req,res,next)
内置中间件
第三方中间件

body-parser模块  [bodyParser.json() bodyParser.raw() bodyParser.text() bodyParser.urlencoded()]
cookie-parser模块
express-session模块
