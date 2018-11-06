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
