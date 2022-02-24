console.log("=== VARIAVEIS ===");

// Tipos Primitivos - String, Number, Boolean, Null, Undefined

var nome = "Augusto"; // string
console.log("nome", nome, typeof nome);

let idade = 26; // number
console.log("idade", idade, typeof idade);

let altura = 1.88; // number
console.log("altura", altura, typeof altura);

const magro = false; // boolean
console.log("magro", magro, typeof magro);

var nula = null; // null
console.log("nula", nula, typeof nula);

var indefinida; // undefined
console.log("indefinida", indefinida, typeof indefinida);


// Diferenças entre var / let/ const

// var - redeclaração da variável (permite)
var nome = 1;
console.log("nome", nome, typeof nome);

// var - reatribuição de valor (permite)
nome = false;
console.log("nome", nome, typeof nome)

// let - redeclaração de variável (não permite)
// mesmo se tiver uma var idade na memória
// let idade = 27; // SintaxError

// let - reatribuição de valor (permite)
idade = 25;
console.log("idade", idade, typeof idade)

// const - redeclaração de variável (não permite)
// const magro = true; // SintaxError

// const - reatribuição de valor (não permite)
// magro = true // TypeError



