function createFunction(){
    function insideFunction(){
        console.log('Hello')
    }
    return insideFunction
}

var function1 = createFunction();
function1()