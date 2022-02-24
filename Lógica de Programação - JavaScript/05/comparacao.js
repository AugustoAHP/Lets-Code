
let resultado = false;

const n1 = document.getElementById("n1");

const n2 = document.getElementById("n2");

const comparador = document.getElementById("nComp");



function calc() {

switch (comparador.value) {
    case "MaiorQue":
        resultado = n1.value > n2.value;
    break;

    case "MenorQue":
        resultado = n1.value < n2.value;
    break;
    
    case "MaiorIgual":
        resultado = n1.value >= n2.value;
    break;
    
    case "MenorIgual":
        resultado = n1.value <= n2.value;
    break;
    
    case "Diferente":
        resultado = n1.value != n2.value;
    break;
    
    case "Igual":
        resultado = n1.value == n2.value;
    break; 
}
    document.getElementById("result").value = resultado;

}