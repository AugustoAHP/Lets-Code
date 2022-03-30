const carros = [];
let id = 0;

function adicionar() {
    const modelo = document.getElementById("modelo");
    const ano = document.getElementById("ano");
    const cor = document.getElementById("cor");
    const situacao = document.getElementById("situacao");
    const preco = document.getElementById("preco");

    const carro = {
        id: id,
        modelo: modelo.value,
        ano: ano.value,
        cor: cor.value,
        situacao: situacao.value,
        preco: preco.value
    };

    carros.push(carro);

    const lista = document.getElementById("lista");

    lista.innerHTML = carros.map(function(carro) {
        return `<tr>
        <td>${carro.id}</td>
        <td>${carro.modelo}</td>
        <td>${carro.ano}</td>
        <td>${carro.cor}</td>
        <td>${carro.situacao}</td>
        <td>R$${carro.preco}</td>
    </tr>`
    }).join("");

    const total = carros.reduce((i) => {return i + 1}, 0);

    document.getElementById("quantidade").innerHTML = total;

    id++;
}