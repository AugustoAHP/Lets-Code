/*
Crie um objeto de nome Ave e adicione 
um atributo de nome espécie.

Dentro do objeto Ave crie uma função, 
que retorno o atributo espécie.

Retorne o objeto invocando a função criada.

Após o retorno do objeto invocando a função, 
crie um objeto de nome Peixe e através do bind 
faça ele retornar a espécie do objeto peixe. 
*/

var Ave = {
    especie: "Arara Azul",
    retornarEspecie: function () {
        return this.especie;
    }
};

console.log(Ave.retornarEspecie());

var Peixe = {
    especie: "Pacu"
}

console.log(Ave.retornarEspecie.bind(Peixe)());