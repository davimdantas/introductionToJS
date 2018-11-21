function consoleCounter() {
	let counter = 0;
	function consoleHello() {
		if (counter < 5) {
			counter ++
			console.log('Interval Hello!', counter);
		}
	}
	return consoleHello
}

let consoleCaller = consoleCounter()

let intervalSet = setInterval(consoleCaller, 2000)



function clearAllIntervals() {
	for (let i = 0; i < 1000; i++) {
	  clearInterval(i);
	}
}
// clearAllIntervals();


