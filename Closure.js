function instructionGenerator() {
    function multiplyby2(num) {
        return num * 2;
    }
    return multiplyby2;
}

let generatedFunc = instructionGenerator()

console.log(generatedFunc)
console.log(generatedFunc(4))
console.log(multiplyby2(40))

// -----------------------------------------------------------------------------------------

function counterFunction() {
    let counter = 0;
    function incrementCounter(){
        counter++;
        console.log(counter)
    }
    return incrementCounter;
}
var mynewFunction = counterFunction();
mynewFunction();
mynewFunction();
mynewFunction();
mynewFunction();
mynewFunction();
