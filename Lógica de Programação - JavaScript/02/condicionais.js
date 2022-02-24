console.log("=== CONDICIONAIS ===");

// entrada
const aluno = prompt("Nome do aluno(a):")
const nota = prompt("Nota (0-10):")
console.log(nota);

// processamento

// exemplo 01

let resp = null

if (nota >= 6) {
    resp = "Aprovado!";
} else if (nota < 4) {
    resp = "Reprovado!";
} else {
    resp = "Recuperação!"
}


// exemplo 2
/*
let resp = null;

switch (nota) {
    case "1":
    case "2":
    case "3":
    case "4":
        resp = "Reprovado!"
        break;

    default:
        resp = "Nem um nem outro"
        break;
}
*/



// saída

document.write(`
    Aluno: ${aluno} <br>
    Nota: ${nota} <br>
    Situação: ${resp}`);

