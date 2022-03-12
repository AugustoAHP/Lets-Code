/*
Enunciado
Crie um objeto do tipo curso que tenha os seguintes atributos:

nome
p1
p2
media

Usando o setter insira o nome do curso, p1 e p2. Para a média 
considere a seguinte condição: Se, nota da p1 for 0, retorne a mensagem: 
"A nota da p1 foi 0, não vai ser possível fazer uma média" Se, 
nota da p1 maior que 0, faça o seguinte calculo: p1 + p2 / 2

Crie um get que retorne uma mensagem informando o nome do curso e sua média.
*/

var Curso = {
    nome: "",
    p1: "",
    p2: "",
    media: "",
    
    set alunoNome (name) {
        this.nome = name;
    },

    set nota1 (n1) {
        this.p1 = n1;
    },

    set nota2 (n2) {
        this.p2 = n2;
    },
    
    get media () {
        if (this.p1 === 0) {
            return "A nota da p1 foi 0, não vai ser possível fazer uma média";
        } else {
            return (this.p1 + this.p2) / 2;
        }
    },

    get mensagem () {
        return "Seu curso é " + this.nome + 
        " e suas notas p1 e p2 foram respectivamente " + 
        this.p1 + " e " + this.p2;
    }
}


Curso.nome = "Augusto";
Curso.p1 = 10;
Curso.p2 = 8;
console.log(Curso);
console.log(Curso.media);
console.log(Curso.mensagem);