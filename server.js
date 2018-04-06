 const http = require('http');
 let cb = function(req,res){
     res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
     res.write("hello world");
     res.end();
 };
 http.createServer(cb).listen(666);

 console.log("http is ok")