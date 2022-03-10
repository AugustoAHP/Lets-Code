const pessoa = {
    nome: "Augusto",
    idade: 26,
    cumprimentaPessoa(nome = " "){
        return console.log("Seja bem vindo: " + nome);

    },

}

const mensagem = pessoa.cumprimentaPessoa()


const counter = {
    count: 0,
    next: function() {
        return this.count++;
    }
}
counter.next()
counter.next()
counter.next()
counter.next()

console.log(counter.count);