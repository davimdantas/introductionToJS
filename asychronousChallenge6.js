var dataReceived;

function ajaxSimulate(id, callback) {
    var database = ['Aaron', 'Barbara', 'Chris'];
    setTimeout(() => {
        callback(database[id])
    }, 7000)
    // setTimeout( callback(database[id]), 10000000)
}

function storeData(data) {
    dataReceived = data
	console.log("Called function to change dataReceived ", dataReceived)
}

ajaxSimulate(1, storeData)

function delayLog() {
    console.log("after delay: ", dataReceived);
}

setTimeout(delayLog, 4999)
setTimeout(delayLog, 10001)

console.log("dataReceived on Global: ", dataReceived);
