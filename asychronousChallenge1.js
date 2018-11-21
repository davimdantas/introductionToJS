function delayConsole() {
	console.log('I am in the setTimeout callback function')
}

console.log('I am at the beginning of the code');

setTimeout(delayConsole, 4000)

console.log('I am at the end of the code');

