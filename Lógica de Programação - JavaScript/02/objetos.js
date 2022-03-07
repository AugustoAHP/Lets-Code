console.log("=== OBJETOS ===");

// PROBLEMA
/*
const carro1 = ["Gol", 2010, "Vermelho", "Usado"];
const carro2 = ["Fox", 2015, "Preto", "Zero"];
const carro3 = ["Uno", 2000, "Verde", "Usado"];

const carros = [carro1, carro2, carro3];
*/


/*
for (let index = 0; index < carro1.length; index++) {
    const element = carro1[index];
    console.log(element);
}

for (let index = 0; index < carro2.length; index++) {
    const element = carro2[index];
    console.log(element);
}

for (let index = 0; index < carro3.length; index++) {
    const element = carro3[index];
    console.log(element);
}
*/
/*
for (let index = 0; index < carros.length; index++) {
    // const element = carros[index];
    console.log(carros[index][0]);
    document.write(
        carros[index][0], // modelo
        " - ",
        carros[index][2], // cor
        "<br>"
    )

}
*/

// SOLUÇÃO

// objeto literal
const carro1 = {
    modelo: "Gol",
    ano: 2010,
    cor: "Vermelho",
    situacao: "Usado"
};

const carro2 = {
    modelo: "Fox",
    ano: 2015,
    cor: "Preto",
    situacao: "Zero"
}



// array de objetos
// const carros = [carro1, carro2];
const carros = [
    {
        modelo: "Gol",
        ano: 2010,
        cor: "Vermelho",
        situacao: "Usado"
    },
    {
        modelo: "Fox",
        ano: 2015,
        cor: "Preto",
        situacao: "Zero"
    },
    {
        modelo: "Uno",
        ano: 2000,
        cor: "Verde",
        situacao: "Usado"
    }
];

// console.log(carro1);
// console.log(carro2);

// objeto.propriedade
// console.log(carro1.modelo, carro1.situacao);
// console.log(carro2.modelo, carro2.situacao);

carros.forEach(function(carro) {
    console.log(carro.modelo, carro.situacao)
})

console.log("===");

let usados = carros.filter(function(carro) {
    return carro.situacao == "Usado"
})

console.table(usados);