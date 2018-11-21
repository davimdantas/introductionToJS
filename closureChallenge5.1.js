function addByX(x) {
    return function (y) {
        return x + y;
    }
}

var addByTwo = addByX(2);

function once(func) {
    let called;
    let executed = false;
    return function (num) {
        if (executed === false) {
            called = func(num);
            executed = true;
        }
        return called;
    }
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6