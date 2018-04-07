 const util = require('util');
//node常用的方法
 arr=[1,2,3];
 console.log(util.isArray(arr));
//  inspect将json转化成为字符串
obj = {"name":"user1","age":"18"};
console.log(util.inspect(obj));

tobj = new Date();
console.log(util.isDate(tobj))

console.log(util.isBoolean(true))

show = function(){
    console.log(11)
}
console.log(util.isFunction(show))

console.log(util.isObject({}))

console.log(util.isRegExp(/^\d{11}$/))