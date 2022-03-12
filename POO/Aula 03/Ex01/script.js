/* 
Crie uma classe Sorteio que tem o número 
de pessoas inscritas e um método sorteiaPremio 
que sorteia um número que corresponderá ao 
número de inscrição do participante e declara o vencedor. 
*/
/*
class Sorteio {
    pessoas
    constructor(numero){
        this.pessoas = numero;
    }
    sorteiaPremio() {
        return `O ganhador é ${this.participantes}`
    }
}

const done = new Sorteio(10);


console.log(done.sorteiaPremio());
*/

// ------------

/* 
11. Crie uma classe Restaurante com as propriedades cidade, 
delivery (verdadeiro ou falso), pedidosPendentes e tempo 
de entrega estimado (calculado com base nos pedidos pendentes, 
sendo 10 + 2 * pedidosPendentes em minutos). 
Os restaurantes devem ser capazes de realizar entregas 
desde que o cliente esteja localizado na mesma cidade e, 
para isso, precisamos de um método entregaPedido que 
devolve como resultado se é possível realizar a entrega 
para um determinado cliente ou não e, em caso positivo, 
o tempo estimado de entrega
*/

class Restaurante {
    cidade
    delivery
    pedidosPendentes
    tempoEntrega
    constructor(cidade, delivery = false, pedido = 0) {
        this.cidade = cidade,
        this.delivery = delivery,
        this.pedidosPendentes = pedido,
        this.tempoEntrega = 10 + 2 * this.pedidosPendentes
    }
    entregaPedido(cidadeCliente) {
        if(this.cidade === cidadeCliente) {
            this.pedidosPendentes += 1;
            this.tempoEntrega = 10 + 2 * this.pedidosPendentes;
            return `O pedido será entregue em ${this.tempoEntrega} minutos`
        } else {
            return "Não é possivel a entrega!"
        }
    }
}

const entrega = new Restaurante("SP", true, 2);

console.log(entrega.entregaPedido("SP"));
console.log(entrega.entregaPedido("SP"));




