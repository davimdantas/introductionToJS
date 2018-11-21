function everyXsecsForYsecs(callBack, interval, totalTime) {
    for (let counter = interval; counter < totalTime ; counter = counter + interval ) {
        setTimeout(callBack, counter * 1000) 
        console.log(counter)
    }
}


function sayHowdy() {
    console.log('Howdy');
}

    

everyXsecsForYsecs(sayHowdy, 1, 10)