function addTwo(num) {
    return num + 2
}
// function map(array, callback) {
//     var lista = [];
//     for (element in array){
// 		lista.push(callback(parseInt(element, 10)));
//     };
//     return lista;
//   }

function map(array, callback) {
    let lista = [];
    for (let i = 0; i < array.length; i++){
		lista[i] = callback(array[i]);
    }
    return lista;
  }
  
  console.log(map([1, 2, 3], addTwo));