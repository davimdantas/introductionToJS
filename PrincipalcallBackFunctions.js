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

function addTwo(num) {
    return num + 2
}

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

function mapWith(array1, callback) {
    let createdList = [];
    forEach(array1, function (element) {
        createdList.push(callback(element))
    });
    return createdList
}

// debugger; 
console.log(mapWith([7, 2, 3], addTwo));

console.log(reduce([3, 2, 1, 5], sumOfElements, 1));



    
