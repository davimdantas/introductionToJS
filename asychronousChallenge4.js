let delays = [4000, 9000, 0, 3500]

function delayLog(delayTime, position) {
    setTimeout(
        () => {
            console.log('printing element ' + position);
        }, delayTime) 
}

function forEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i)
    }
}

forEach(delays, delayLog)
