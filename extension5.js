function objOfMatches(passed) {

    callBack = arguments[2]
    var objCreated = {}
    for (i = 0; i < arguments[1].length; i++) {
        if (callBack(arguments[1][i]) == 1) {
            objCreated[arguments[0][i]] = arguments[1][i];  
        }
    }
    return objCreated;
}

console.log('Final: ', objOfMatches(['Mercado', 'casa', 'energia', 'pagamento', 'beto'] , [137, 426, 107, 'Pago', 9], 
    function (str) {
        if (Number.isInteger(str)) {
            return 1;
        }
        return 0;
    }));