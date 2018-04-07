//events事件驱动
const events = require('events');

let evt = new events.EventEmitter();//触发事件

function eventHandler(){
    console.log('触发事件时触发函数')
}
evt.on('eventName',eventHandler);

evt.emit('eventName');