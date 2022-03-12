//"use strict";

class pessoas {
    constructor(nome,idade) {
        this.nome = nome,
        this.idade = idade
    }
    apresentar(){
        return `o meu nome é ${this.nome} 
        e tenho ${this.idade} anos.`
    }
}
/*
// instanciar a classe pessoa
const p1 = new pessoas("Jaque", 28);
console.log(p1);
console.log(p1.apresentar());
console.log(p1.nome);
console.log(JSON.stringify(p1));
console.log(Object.keys(p1));
console.log(Object.values(p1));
*/


// transformar alguns em privado
class PessoaPrivada {
    #nome
    #idade
    email
    constructor(nome, idade, email) {
        this.#nome = nome,
        this.#idade = idade,
        this.email = email
    }
    get nome() {
        return this.#nome;
    }
    set nome(u) {
        this.#nome = u
    }
    apresentar() {
        return `O meu nome é ${this.#nome} 
        e tenho ${this.#idade} anos.`
    }
    // para resolver o caso JSON
    toJSON() {
        return {
            nome: this.nome,
            idade: this.#idade,
            email: this.email
        }
    }
}

// instanciar a classe pessoa
const p2 = new PessoaPrivada("joao", 28, "joao@gmail.com");
console.log(p2);
console.log(p2.email);
console.log(p2.apresentar());
console.log(p2.nome);

console.log(JSON.stringify(p2));
console.log(Object.keys(p2));
console.log(Object.values(p2));



