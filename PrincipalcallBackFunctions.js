function sumOfElements(acumulator, element) {
    return acumulator = acumulator + element;
}

function productOfElements(acumulator, element) {
    return acumulator = acumulator * element;
}

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

function reduce(array, firstCallback, initialValue) {
    forEach(array,
                function (element) {
                    initialValue = firstCallback(initialValue, element)
                }
            )
    return initialValue
}

console.log(reduce([3, 2, 1, 5], sumOfElements, 1));



    
