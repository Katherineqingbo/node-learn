console.log(__filename);
console.log(__dirname);

process.stdout.write('abc\n');
//接受键盘指令
process.stdin.on('readable',function(){
    str = process.stdin.read();
    if(str !== null){
        process.stdout.write("data:"+str)
    }
})