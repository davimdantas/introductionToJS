function after(count, func) {

}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


var a = 1
function mudando_a_global(increment) {
    var a = 24
    this.a = this.a + increment
    console.log('Dentro da função, variavel a global: ', this.a)
}

function mudando_a_local(increment) {
    var a = 24
    a = a + increment
    console.log('Dentro da função, variavel a local: ', a)
}

mudando_a_global(2)
console.log('Apos chamar mg, Variavel a global: ', a)

mudando_a_local(5)
console.log('Apos chamar ml, Variavel a global: ', a)