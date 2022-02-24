/*
function analise() {
    const i = document.getElementById("idade").value;
    console.log(i);

let resp = null

if (i >= 18) {
    resp = "Voce é Adulto!";
} else {
    resp = "Voce não é Adulto!";
}

document.getElementById("faixa-etaria").value = resp
}
*/

function analise() {
    const i = document.getElementById("idade").value;
    console.log(i);

let resp = null

if (i < 0) {
    resp = "Digite uma idade real";
} else if (i <= 12) {
    resp = "Criança";
} else if (i <= 17) {
    resp = "Adolescente"
} else if (i <= 64) {
    resp = "Adulto"
} else {
    resp = "Idoso"
}
document.getElementById("faixa-etaria").value = resp;
}