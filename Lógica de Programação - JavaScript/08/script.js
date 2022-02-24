function calc() {

    

    let numEncomenda = parseFloat(document.getElementById("nEnc").value);
    let numDistancia = parseFloat(document.getElementById("nDist").value);
    let numCombustivel = 5.5;

    let numDias = parseFloat(document.getElementById("nDias").value);

    let combustivelDia = ((numDistancia * 2) * numEncomenda) + 10;
    let combustivelMensal = combustivelDia * numDias * 4;
    let gastoDia = combustivelDia * numCombustivel;
    let gastoSemanal = gastoDia * numDias;
    let gastoMensal = gastoSemanal * 4;
    let abastecimento = combustivelMensal / 40;
    

    if (!isNaN(numEncomenda) && !isNaN(numDistancia) && !isNaN(numDias)) {

        document.getElementById("result").value = gastoMensal;
        
        console.log(abastecimento);
    }
}
