/*
Refaça o exercício da TV utilizando uma função construtora

Refaça o exercício da TV utilizando a sintaxe de classe (class).
*/

// Class + Construtora

class TV {
    constructor(canal, volume, ligada) {
        this.canal = canal,
        this.volume = volume,
        this.ligada = ligada
    }

    liga() {
        return this.ligada = true;
    }
    desliga() {
        return this.ligada = false;
    }
    mudaDeCanal() {
        return this.canal += 1;
    }
    aumentaVolume() {
        return this.volume += 1;
    }
    diminuiVolume() {
        return this.volume -= 1;
    }
}

const televisao = new TV(0, 0, false)

// TESTES

console.log("Liga e desliga");

// liguei TV
console.log(televisao.liga());

// Status da TV
console.log(televisao.ligada);

// Desliguei a TV
console.log(televisao.desliga());

// Status da TV
console.log(televisao.ligada);

// ==========

console.log("Muda de canal");

// Mudei canal da TV
console.log(televisao.mudaDeCanal());

// Mudei canal da TV novamente
console.log(televisao.mudaDeCanal());

// =========

console.log("Aumenta e diminui volume");

// Aumentei volume da TV
console.log(televisao.aumentaVolume());
console.log(televisao.aumentaVolume());
console.log(televisao.aumentaVolume());

// Diminui volume da TV
console.log(televisao.diminuiVolume());