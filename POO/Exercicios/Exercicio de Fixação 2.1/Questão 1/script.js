/* 
Crie uma classe CNH que tenha como propriedades país e idade que, 
por padrão, deve ser maior ou igual a 18, 16 se for igual a 
US ou CA e 21 se corresponder a CH ou RU. Se o país for BR deve também 
ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).
*/

class CNH {
    pais
    idade
    categoria

    constructor(pais, idade, categoria) {
        this.pais = pais,
        this.idade = idade,
        this.categoria = categoria
    }

    dados() {
        if((this.pais === "US" || this.pais === "CA") && this.idade >= 16) {
                return `Sua idade é ${this.idade} e seu país é ${this.pais}.`
            } else if ((this.pais === "CH" || this.pais === "RU") && this.idade >= 21) {
                return `Sua idade é ${this.idade} e seu país é ${this.pais}.`
            } else if (this.pais === "BR" && this.idade >= 18) {
                return `Sua idade é ${this.idade}, seu país é ${this.pais} e a categoria de sua CNH é ${this.categoria}.`
            } else if (this.idade < 18) {
                return `Seu país não permite ter CNH na sua idade, aguarde um pouco mais.`
            } else {
                return `Sua idade é ${this.idade} e seu país é ${this.pais}.`
            }
    }

}

const dadosCNH = new CNH("US", 16, "AB")

console.log(dadosCNH);
console.log(dadosCNH.dados());