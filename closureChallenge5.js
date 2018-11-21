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
var afterCalled = after(3, called);
var afterCalled3 = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed
afterCalled(); // -> 'hello' is printed
afterCalled3(); // -> 'hello' is printed
afterCalled(); // -> 'hello' is printed
afterCalled3(); // -> 'hello' is printed
afterCalled3(); // -> 'hello' is printed
