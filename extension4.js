
function intersection(resultArray, elementA1, elementA2) {
    if (elementA1 == elementA2) {
        resultArray.push(elementA1)
        return resultArray
    }
    return resultArray
}

function union(resultArray, array) {
    for (let j = 0; j < array.length; j++) {
        if (!resultArray.includes(array[j])){
            resultArray.push(array[j])
        }
    }
    return resultArray
}

function forEach(arrays) {
    callback = arguments[0]
    for (let i = 1; i < arguments.length ; i++) {
        callback(arguments[i])
    }
}



function reduce(arraysO) {
    var initialValue = arguments[1]
    var firstCallback = arguments[0]
    forEach( 
        function (array) {
                    initialValue = firstCallback(initialValue, array)
                }, arguments[2], arguments[3], arguments[4]
            )
    return initialValue
}

var teste = []
console.log('Final: ', reduce(union ,teste , [3, 2, 1, 5, 9], [3, 7, 8, 5, 9], [13, 17, 5, 2, 0,5,13,19, 'a']));



    
