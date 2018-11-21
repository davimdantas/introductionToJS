function delay(func, wait) {
	setTimeout(func,wait)
}

function after(count, func) {
	let counter = 0
	let resultOfCall 
	return function conterTo () {
		counter++
		if (counter == count) {
			resultOfCall = func()
			return resultOfCall
		}
		return console.log(counter)
	}

}

var called = function() { console.log('hello') };
var afterCalled = after(2, called);

delay(afterCalled, 1000)
delay(afterCalled, 2000)
delay(afterCalled, 3000)

