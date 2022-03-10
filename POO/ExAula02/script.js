var carro = {
    cor: "",
    modelo: "",
    
    set corCarro(i){
        this.cor = i;
    },
    get corCarro () {
        return this.cor;
    },
    set modeloCarro (i) {
        this.cor = i;
    },
    get modeloCarro () {
        return this.modelo;
    },
    get retorneMensagem () {
        return "A cor do carro é " + this.cor + 
        " e a marca do carro é " + this.modelo;
    }

};


carro.cor = "Azul";
carro.modelo = "Celta";

console.log(carro.retorneMensagem);

