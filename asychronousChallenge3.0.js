function everyXsecsForYsecs(callBack, interval, totalTime) {
    let callFunction = setInterval(callBack, interval * 1000);
    let callEnder = setTimeout(stopInterval, totalTime * 1000);
    function stopInterval() {
        clearInterval(callFunction)
    }
}


function sayHowdy() {
    console.log('Howdy');
}

everyXsecsForYsecs(sayHowdy, 1, 5)