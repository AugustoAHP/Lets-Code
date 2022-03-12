/* 
Faça um objeto TV com as propriedades canal, 
volume e ligada e métodos liga, desliga, 
mudaDeCanal e aumentaVolume, diminuiVolume.
*/


 // pesquisar sobre o assunto
var TV = {
    canal: 0,
    volume: 0,
    ligada: false,

    liga() {
        return this.ligada = true;
    },
    desliga() {
        return this.ligada = false;
    },
    mudaDeCanal() {
        return this.canal += 1;
    },
    aumentaVolume() {
        return this.volume += 1;
    },
    diminuiVolume() {
        return this.volume -= 1;
    }
}

// TESTES

console.log("Liga e desliga");

// liguei TV
console.log(TV.liga());

// Status da TV
console.log(TV.ligada);

// Desliguei a TV
console.log(TV.desliga());

// Status da TV
console.log(TV.ligada);

// ==========

console.log("Muda de canal");

// Mudei canal da TV
console.log(TV.mudaDeCanal());

// Mudei canal da TV novamente
console.log(TV.mudaDeCanal());

// =========

console.log("Aumenta e diminui volume");

// Aumentei volume da TV
console.log(TV.aumentaVolume());
console.log(TV.aumentaVolume());
console.log(TV.aumentaVolume());

// Diminui volume da TV
console.log(TV.diminuiVolume());