/*
Crie uma função construtora, para criar 
um "Aluno".

Deverá conter as seguintes propriedades: 
nome, idade, email, matricula, curso.

Instancie o Aluno e printe o resultado.

Utilizando a estrutura de aluno, adicione 
uma função que retorne o curso do aluno através do prototype da função.

Invoque a função e printe o resultado 
*/


function aluno(nome, idade, email, matricula, curso) {
    this.nome = nome,
    this.idade = idade,
    this.email = email,
    this.matricula = matricula,
    this.curso = curso

};

aluno.prototype.getCurso = function () {
    return this.curso;
}

// instancia
const aluno1 = new aluno(
    "Augusto",
    26,
    "augusto@hotmail.com",
    12345,
    "POO"
);

// printei o resultado
console.log(aluno1);
console.log(aluno1.getCurso())
