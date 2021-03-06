console.log("=== FUNÇÕES ===")

// Declaração de Função Nomeada
function soma(n1=0, n2=0) { //default parameter
    return n1 + n2;
}

// Nan - Not a Number

console.log( soma ); // Ref Func
console.log( soma() ); // 0
console.log( soma(5) ); // 5
console.log( soma(5, 10) ); // 15

// Declaração de Função Não Nomeada (Anônima)
const sun = function (a=0, b=0) { // default parameter
 return a + b;
}

console.log( sun ); // Ref Func
console.log( sun() ); // 0
console.log( sun(5) ); // 5
console.log( sun(5, 10) ); // 15

console.log("=== ARROW FUNCTION ===");
// Arrow Function

// DE: function () {}
// PARA: () => {}

// DE: function (value) {return value;}
// PARA: value => value;

let numbers = [1, 2, 3]

// numbers = numbers.forEach((value) => {
//     return value;
// })

numbers = numbers.filter(value => value < 3)

console.log(numbers)


