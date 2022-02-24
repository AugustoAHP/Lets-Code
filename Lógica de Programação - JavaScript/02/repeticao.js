console.log("=== REPETICAO ===");

// Números - 1 à 10

document.write("<h3>Números - 1 à 10</h3>")
var inicial = 1;
var final = 10; 

while (inicial <= final) { // condição lógica
    document.write(inicial + " "); // 1
    // inicial = inicial +1; // incremento
    // inicial += 1; // incremento
    inicial++; // incremento
}

document.write("<hr>");

// Números - 50 à 1

document.write("<h3>Números - 50 à 1</h3>")
var inicial = 50;
var fianl = 1;

while (inicial >= final) {
    document.write(inicial + " ");
    inicial--; // decremento
}
document.write("<hr>");

// Números Pares - 0 à 100

document.write("<h3>Números Pares - 0 à 100</h3>")
var inicial = 0;
var final = 100;

while (inicial <= final) {
    document.write(inicial, " ")
    inicial += 2;
}

document.write("<hr>");

// Números Impares - 99 à 1
// 99 - 97 - 95 ... 3 - 1

document.write("<h3>Números Impares - 99 à 1</h3>")
var inicial = 99;
var final = 1;

while (inicial >= final) {
    if (inicial > 2) {
        document.write(inicial, " - ");
    } else {
        document.write(inicial);
    }
    inicial -= 2;
}

document.write("<hr>");

// Criar um programa que receba números
// DICA: Use o prompt()
// Rodar o programa infinitamente, recebendo e mostrando os 
// numeros digitados
// Quando o número inserido for ZERO (0), encerrar o programa!

/*
===== Exemplo 1 =====
var numero = prompt("Digite um número!");

while (numero != 0) {
    document.write(`${numero} `);
    numero = prompt("Digite outro número!")
}
console.log("FIM!")
*/

// ===== Exemplo 2 =====
/*
let loop = true;
let num;

while (loop) {
    num = prompt("Digite um número:");
    console.log(num);

    if (num == 0) {
        console.log("FIM!");
        loop = false;
    }
}
*/

document.write("<h3>Números - 1 à 10 - FOR</h3>");

for (let cont = 1; cont <= 10; cont++) {
    document.write(cont, " ");
}

document.write("<hr>");

// DESAFIO: Solicite ao usuário um número e imprima a quantidade de
// asteriscos na tela referente ao numero informado

/*
let num =parseFloat(prompt("Digite a quantidade de asteriscos:"));

for (let index = 0; index < num; index++) {
    document.write("*")
}
*/

document.write("<hr>");

// DESAFIO

for (let linha = 1; linha <= 5; linha++) {
    for (let coluna = 1; coluna <= 10; coluna++) {
        document.write("*");
    }
    document.write("<br>")
}

document.write("<hr>");

// DESAFIO 02

for (let linha = 1; linha <= 10; linha++) {
    for (let coluna = 1; coluna <= linha; coluna++) {
        document.write("*");
    }
    document.write("<br>");
}

// DESAFIO 06 - HOMEWORK

// *=================*
//  *===============*
//   *=============*  
//    *===========*
//     *=========*
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *
// document.write("D&nbspE&nbspS&nbspA&nbspF&nbspI&nbspO")

