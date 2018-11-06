function addTwo(num) {
    return num + 2
}

function sumOfElements(acumulator, element) {
    return acumulator + element
}

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

// function mapWith(array1, callback) {
//     let createdList = [];
//     forEach(array1, function (element) {
//         createdList.push(callback(element))
//     });
//     return createdList
// }

function reduce(array, callback, initialValue) {
    var acumulator = initialValue;
    forEach(array, function (element) {
        callback(acumulator, element)
    })
    return acumulator
}
// debugger; 
// console.log(mapWith([7, 2, 3], sumOfElements));
console.log(reduce([7, 2, 3], sumOfElements, 0));

