/*
    3) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC
    Instancie uma pessoa chamada José que tenha 70Kg de peso e 1,75 de altura 
    e peça ao José para dizer o valor do seu IMC.

    Obs: IMC = peso / (altura * altura)
*/

function condicaoImc(imc) {
    const CONDICAO_ABAIXO_DO_PESO = 'Abaixo do peso';
    const CONDICAO_PESO_NORMAL = 'Peso normal';
    const CONDICAO_ACIMA_DO_PESO = 'Acima do peso';
    const CONDICAO_OBESO = 'Obeso';
    const CONDICAO_OBESIDADE_GRAVE = 'Obesidade Grave';

    let condicaoAdulto = '';

    if (imc < 18.5) {
        condicaoAdulto = CONDICAO_ABAIXO_DO_PESO;
    } else if (imc >= 18.5 && imc <= 25) {
        condicaoAdulto = CONDICAO_PESO_NORMAL;
    } else if (imc >= 25 && imc <= 30) {
        condicaoAdulto = CONDICAO_ACIMA_DO_PESO;
    } else if (imc >= 30 && imc <= 40) {
        condicaoAdulto = CONDICAO_OBESO;
    } else {
        condicaoAdulto = CONDICAO_OBESIDADE_GRAVE;
    }
    return condicaoAdulto
}

class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = peso / (Math.pow(altura, 2));
    }

    falarDoImc() {
        console.log(`Olá eu me chamo ${this.nome} e o meu IMC está em ${this.imc}, minha classificação é: ${condicaoImc(this.imc)}`);
    }
}

(function () {
    pessoaJose = new Pessoa('José', 75, 1.75);
    pessoaJose.falarDoImc();
})()
