console.log("Boneco completo")

let forca = {
    haste:"madeira",
    corda:"nylon"
}

let boneco = {
    membros: [
        "cabeça",
        "braço esquerdo",
        "braço direito",
        "tronco",
        "perna esquerda",
        "perna direita",
    ],
    nome: 'Josivan',
    altura: 1.52,
    peso: 60
}

// Exportação via CommonJS
module.exports = [ boneco, forca, 1, 2, 3, 4, 56 ];

