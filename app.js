function sumOfElements(sum, element) {
    return sum + element
}

function forEach(array, callback, optional) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], optional)
    }
}

function reduce(array, callback, initialValue) {
    var acumulator = initialValue
    forEach(array, function (element, acumulator) {
        callback(element, acumulator)
    }, acumulator)
    return acumulator
}

console.log(reduce([7, 2, 3], sumOfElements, 0));

