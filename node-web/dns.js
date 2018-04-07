const dns = require('dns');
dns.lookup('www.github.com',function (err,address,family) {  
    console.log('ip地址：'+address);
    dns.reverse(address,function(err,hostnames){
        console.log('反向解析'+address+":"+JSON.stringify(hostnames))
    })
})