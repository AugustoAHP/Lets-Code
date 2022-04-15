// Importação via CommonJS
const [boneco, forca] = require('./modulos/boneco');
const Jogador = require('./modulos/jogador.js');

console.log("Olá, tudo bem?")

console.log(boneco);
console.log(forca);
console.log(array_numeros);
console.log(...array_numeros); // 1, 2, 3, 4, 56

function somatorio(...array_numeros) {
    let total = 0
    for (let i = 0; i < array_numeros.length; i++) {
        total += array_numeros[i];
    }
    return total;
}

console.log(somatorio(1, 2, 3, 4));