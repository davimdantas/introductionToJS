function consoleCounter() {
	console.log('Interval Hello!');
}

let intervalSet = setInterval(consoleCounter, 2000)

function clearLog() {
	clearInterval(intervalSet);
}

setTimeout(clearLog, 10000)






