function createFunctionPrinter(word) {
    function functionPrinter(){
        console.log(word)
    }
    return functionPrinter
}

var printSample = createFunctionPrinter('sample');
var printHello = createFunctionPrinter('hello')
console.log(printSample)

printSample(); 
printHello(); 