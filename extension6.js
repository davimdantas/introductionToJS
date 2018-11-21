// function objOfMatches(passed) {

//     callBack = arguments[2]
//     var objCreated = {}
//     for (i = 0; i < arguments[1].length; i++) {
//         if (callBack(arguments[1][i]) == 1) {
//             objCreated[arguments[0][i]] = arguments[1][i];  
//         }
//     }
//     return objCreated;
// }


function callBacks(element, arrayOfCallback) {
    teste = []
    for (j = 0; j < arrayOfCallback.length; j++) {
        teste.push(arrayOfCallback[j](element))
    }
    return teste
}


function multiMap(arrVals, arrCallbacks) {
    var objCreated = {}
    for (i = 0; i < arrVals.length; i++) {
        objCreated[arrVals[i]] = callBacks(arrVals[i], arrCallbacks)
        console.log('object: ', arrVals[i])
    }  
    return objCreated
    }

    
    console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str + 'teste'; }, function(str) { return str[0] + 'teste' + 'teste2'; }, function(str) { return str + str; }]));