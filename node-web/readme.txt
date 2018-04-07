事件驱动   非阻塞I/O



win dos常用命令
2.cmd     //进入dos系统
3.cls     //清空屏幕
4.exit    //退出dos
5.mkdir   //创建目录
6.dir     //查看目录
7.rmdir   //删除目录
8.ping    //通讯测试
9.start http://www.baidu.com             //打开浏览器
10.tasklist                              //查看进程
11.taskkill [taskkill /f /im chrome.exe] //关闭进程
12.cd 切换目录
13.netstat -ano              //查看计算器端口
14.netstat -ano|find "445"   //查看置顶端口
15.ipconfig                  //查看IP地址


1.npm list         //查看本地模块
2.npm install      //安装模块
3.npm uninstall    //卸载模块
4.npm root
5.npm update        //更新


node回调函数
1.同步(阻塞I/O)
2.异步(非阻塞I/O)


node全局对象
1.__filename
2.__dirname
3.setTimeout()
4.setInterval()
5.process()    //.version .argv  .pid  .title   .platform   .cwd()  .memoryUsage()  .uptime()
6.console()    //.log  .info  .warn   .error  .time  .timeError


node常用的工具
1.util.isArray()
2.util.inspect()
3.util.isDate()
4.util.isBoolean()
5.util.isFunction()
6.util.isObject()
7.util.isRegExp()


node文件系统
1.读取文件
    readFile();
    readFileSync();
2.写文件内容 
    writeFile()
3.删除文件
    unlink();
4.创建目录
    mkdir();
5.删除目录
    rmdir();


os模块
1.os.tmpdir();
2.os.hostname();
3.os.type();
4.os.platform();
5.os.loadavg();
6.os.totalmem();
7.os.freemem();
8.os.cpus();
9.os.networkInterfaces();  // 网卡接口列表


path模块
1.path.dirname();
2.path.basename();
3.path.extname();
4.path.parse();
5.path.format();

dns模块
1.dns.lookup() //将域名解析到IP




