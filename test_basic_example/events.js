const { EventEmitter } = require('events')

class MyEvent extends EventEmitter { }

const myEvent = new MyEvent()

myEvent.on('TEST', () => {
    console.log('EVENT_FIRED')
})

console.log('1')
myEvent.emit('TEST')
console.log('2')