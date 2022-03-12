/*
Faça uma classe Perfil que tem as seguintes informações: 
nome, avatar (foto de perfil) e tema.
Utilize acessors (get/set) para garantir que o tema só pode 
ser "light" ou "dark" e que a foto de perfil deve ser uma url 
(iniciada com http ou https).
*/

class Perfil {
    nome
    avatar
    tema

    constructor (nome, avatar = "https://website", tema = "light") {
        this.nome = nome,
        this.avatar = avatar,
        this.tema = tema
    }

    escolhaTema() {
        if (this.tema === "light" || this.tema === "dark") {
            return `${this.nome}, seu tema escolhido foi ${this.tema}`
        } else {
            return "Escolha o tema light ou dark!"
        }
    }

    escolhaFoto() {
        if (this.avatar.indexOf("http://") === 0 || this.avatar.indexOf("https://") === 0 ) {
            return `${this.nome}, a URL do seu avatar é "${this.avatar}"`;
        } else {
            return "insira uma URL válida!"
        }
    }

}

const novoPerfil = new Perfil("Augusto", "https://website.com.br", "dark")

// TESTES

// Tema
console.log(novoPerfil.escolhaTema())

// Avatar
console.log(novoPerfil.escolhaFoto())


// ========================================================
/*
Faça uma classe SmartWatch com a contagem dos passos diários 
de uma pessoa (pedômetro). Garanta utilizando acessors (get/set) 
que os passos apenas podem ser incrementados e um método 
resetOnMidnight() que reseta os passos para 0.
*/

class SmartWatch {
    passos

    constructor(passos = 0) {
        this.passos = passos
    }

    contagem (passos) {
        this.passos += 1;
        return `Contagem de passos: ${this.passos}`
    }

    resetOnMidnight () {
        this.passos = 0;
        return `Passos zerados`
    }
}

const dados = new SmartWatch(0);

// TESTES

// Inicio da caminhada
console.log("Caminhada rapida");
console.log(dados.contagem());
console.log(dados.contagem());
console.log(dados.contagem());
console.log(dados.contagem());

// Pausa e zera o pedômetro
console.log("Parei e zerei o pedômetro");
console.log(dados.resetOnMidnight());

// Caminhada retomada
console.log("Voltei a caminhar");
console.log(dados.contagem());
console.log(dados.contagem());
console.log(dados.contagem())

// ========================================================
/*
Construa uma classe Veiculo que tem como propriedades rodas 
(1 a n), usaCombustivel (true/false), uma 
classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') 
que herda de Veiculo e Bicicleta (infantil: true/false - 
tem que ter mais que 2 rodas) 
que também herda as características de Veiculo.
*/

class Veiculo {
    constructor(rodas, usaCombustivel) {
        this.rodas = rodas
        this.usaCombustivel = usaCombustivel
    }

    mensage() {
        if(this.rodas >= 1){
            if(this.usaCombustivel === false) {
                return `Seu veículo tem ${this.rodas} e não usa combustivel`
            } else if(this.usaCombustivel === true) {
                return `Seu veículo tem ${this.rodas} e usa combustivel`
            } else {
                return `Insira um valor "True" ou "False" para "usaCombustivel"`
            }
            } else {
                return "Seu veícule precisa ter pelo menos 1 roda"
        }
    }
}

class Carro extends Veiculo {
    constructor(rodas, usaCombustivel, tipoDeCombustivel) {
        super(rodas, usaCombustivel)
        this.tipoDeCombustivel = tipoDeCombustivel
    }

    carroMensage() {
        if(this.rodas >= 4){
            if(this.usaCombustivel === false) {
                return `Seu Carro tem ${this.rodas} rodas e não usa combustivel`
            } else if(this.usaCombustivel === true) {
                if(this.tipoDeCombustivel === "Gasolina" || 
                this.tipoDeCombustivel === "Alcool" || 
                this.tipoDeCombustivel === "Flex") {
                    return `Seu Carro tem ${this.rodas} rodas e o combustivel é ${this.tipoDeCombustivel}`
                } else {
                    return `Insira um dos valores entre "Gasolina", "Alcool" ou "Flex".`
                }
            } else {
                return `Insira um valor "True" ou "False" para "usaCombustivel."`
            }
    } else {
        return "Seu carro precisa ter pelo menos 4 rodas."
    }
}
}

class Bicicleta extends Veiculo {
    constructor(rodas, usaCombustivel, infantil){
        super(rodas, usaCombustivel)
        this.infantil = infantil
    }

    bicicletaMensage() {
        if(this.rodas >= 2) {
            if(this.usaCombustivel === false && this.infantil === false) {
                return `Sua bicicleta tem ${this.rodas} rodas, não usa combustivel e não é infantil`
            } else if(this.usaCombustivel === false && this.infantil === true) {
                return `Sua bicicleta tem ${this.rodas} rodas, não usa combustivel e é infantil`
            } else if (this.usaCombustivel === true && this.infantil === false){
                return `Sua bicicleta tem ${this.rodas} rodas, usa combustivel e não é infantil`
            } else if(this.usaCombustivel === true && this.infantil === true) {
                return `Sua bicicleta tem ${this.rodas} rodas, usa combustivel e é infantil`
            } else {
                return `Insira valores "True" ou "False" para "usaCombustivel" e "infantil"`
            }   
        } else {
            return "Sua bicicleta precisa ter pelo menos 2 rodas"
        }
    }
}

// TESTES

const automovel = new Veiculo(2, false);
const sandero = new Carro(4, true, "Flex");
const caloi = new Bicicleta(2, false, true);

console.log(automovel.mensage());
console.log(sandero.carroMensage());
console.log(caloi.bicicletaMensage());