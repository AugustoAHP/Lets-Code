/*
const carros = [];

function add() {
    carros.push(document.getElementById("modelo").value);
    console.log(carros);

    document.getElementById("qnt").textContent = carros.length;

    if (carros.length == 10) {
        for (i = 0; i < carros.length; i++) {
            document.getElementById("lista").textContent = carros;
        }
    } else if (carros.length > 10) {
        carros.splice(0, 10);
        document.getElementById("qnt").textContent = '1';
        document.getElementById("lista").textContent = '';
    }
}

// Falta colocar cada elemento da lista em uma linha
*/

// Premissas
// 1 - Armazenar dados em um objeto
// 2 - Colocar dados dentro de um array
// 3 - Exibir tudo que for cadastrado dentro do console.table


const carros = [];

function add() {
    // entrada
    const modelo = document.getElementById("modelo");
    const ano = document.getElementById("ano");
    const cor = document.getElementById("cor");
    const situacao = document.getElementById("situacao");

    console.log(modelo.value, ano.value, cor.value, situacao.value);
    
    // processamento
    const carro = {
        modelo: modelo.value,
        ano: ano.value,
        cor: cor.value,
        situacao: situacao.value
    };

    console.log(carro);
    carros.push(carro);
    
    // saida
    console.table(carros);

    //exibir a tabela
    const lista = document.getElementById("lista");
    lista.innerHTML = 
    carros
        // .filter(function(carro) {
        //    return carro.ano === '2015'
        // })
        .map(function(carro) {
            return `<tr>
                <td>${carro.modelo}</td>
                <td>${carro.ano}</td>
                <td>${carro.cor}</td>
                <td>${carro.situacao}</td>
            </tr>`;
        })
        .join("");

    // limpar os campos
    modelo.value = '';
    ano.value = '';
    // cor.value = '';
    // situacao.value = '';

    //dar foco no primeiro campo
    modelo.focus();
}


// AVALIAÇÃO
/*
1 - Fazer uma cópia do exercício da loja de carros
2 - Adicionar uma coluna com um ID (Ao lado do modelo)
3 - Adicionar no formulário um campo para receber o preço
4 - exibir uma coluna com o preço
5 - exibir o total de todos os veículos cadastrados (Requisito ->
Usar Reduce)
*/