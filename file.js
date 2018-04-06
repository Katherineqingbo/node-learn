const fs =require('fs');

file = 'text.txt';
//开始读取文件
console.log('file start');
//同步读取文件
// data = fs.readFileSync(file);
// console.log(data)
// console.log(data.toString());

//异步读取文件，node本身就是异步读取文件,自带事件（当文件内容读取完毕时输出）
fs.readFile(file,function(err,data){
    console.log(data.toString())
})

//读取文件结束
console.log('file end');