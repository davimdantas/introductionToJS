function sumOfElements(acumulator, element) {
    return acumulator = acumulator + element;
}

function productOfElements(acumulator, element) {
    return acumulator = acumulator * element;
}

function intersection(resultArray, elementA1, elementA2) {
    if (elementA1 == elementA2) {
        resultArray.push(elementA1)
        return resultArray
    }
    return resultArray
}



function forEach(array, callback, secondArray) {

    console.log('aaa', callback)
    for (let i = 0; i < array.length; i++) {
        callback(array[i], secondArray[i])
    }
}

function reduce(firstArray, firstCallback, initialValue, secondArray) {
    forEach(firstArray,
        function (element, element2) {
                    // console.log('Initial Value: ', initialValue, 'element1 :', element, 'element2 : ' , element2)
                    initialValue = firstCallback(initialValue, element, element2)
                    // console.log('Initial Value: ', initialValue, 'element1 :', element, 'element2 : ' , element2)
                }
            , secondArray)
    return initialValue
}
var teste = []
// console.log(reduce([3, 2, 1, 5, 9], intersection, teste , [3, 7, 8, 5, 9]));

// console.log(reduce([3, 2, 1, 5], sumOfElements, 1));
console.log(reduce([3, 2, 1, 5], sumOfElements, 1, []));






// should log: [5, 10, 15, 88, 1, 7, 100]

    
