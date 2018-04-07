 const http = require('http');
 const url = require('url');
 const querystring = require('querystring');
 const fs = require('fs');
 let cs = function(req,res){
    res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
     uri=req.url;
     if(uri !== '/favicon.ico'){
        path = url.parse(uri).pathname;
        _param = url.parse(uri).query;
        _json = querystring.parse(_param);

        console.log(path);
        console.log(_param);
        console.log(_json);
        switch(path){
            case "/user/add" :
                res.write('<h1>增</h1>');
                break;
            case "/user/delete" :
                res.write('<h1>删</h1>');
                break;
            case "/user/update" :
                res.write('<h1>改</h1>');
                break;
            case "/user/select" :
                res.write('<h1>查</h1>');
                break;
            default:
                // fs.readFile('index.html',function(err,data){
                //     str = data.toString();
                //     res.write(str);
                // })
                data = fs.readFileSync('index.html');
                str = data.toString();
                res.write(str);
                break;
        }
        res.write("hello world");
    }
    res.end();
 };
 http.createServer(cs).listen(667);

 console.log("http is ok")