var events = require('events').EventEmitter;
var eventEmitter = new events();
var name = process.argv.slice(2);
name = name.join(' ').toLowerCase()
var hello = ["dhar","∂har"].join('|')
var pattern = new RegExp(hello,"gi")
var callfun = function ringBell()
{
	if(name&&name.match(pattern))
		console.log("kutte bade bhai se ungli nahi karte")
  	if(name&&!name.match(pattern))console.log(name +" bachha hai tu abhi");
  	if(!name) console.log("kuch input to de bhai")
}


eventEmitter.on(name, callfun);
eventEmitter.emit(name);