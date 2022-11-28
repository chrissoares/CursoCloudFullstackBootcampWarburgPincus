//01 - Crie um programa que dado um número imprima sua tabuada.

class Taboada {
    numero;

    constructor(numero) {
        this.numero = numero;
    }

    imprimirAdicao() {
        console.log(`Taboada de Adição do ${this.numero}`)
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.numero} + ${i} = ${this.numero + i}`);
        }
    }
    imprimirSubtracao() {
        console.log(`Taboada de Subtração do ${this.numero}`)
        for (let i = this.numero; i <= this.numero+10; i++) {
            console.log(`${i} - ${this.numero} = ${i - this.numero}`);
        }
    }

    imprimirMultiplicacao() {
        console.log(`Taboada de Multiplicação do ${this.numero}`)
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.numero} x ${i} = ${this.numero * i}`);
        }
    }

    imprimirDivisao() {
        console.log(`Taboada de Divisão do ${this.numero}`)
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.numero * i} / ${this.numero} = ${i}`);
        }
    }

    imprimirTodasTaboadas(){
        this.imprimirAdicao();
        console.log();
        this.imprimirSubtracao();
        console.log();
        this.imprimirMultiplicacao();
        console.log();
        this.imprimirDivisao();
        console.log();
    }
}


(function (){
    const taboada = new Taboada(7);
    //taboada.imprimirSubtracao();
    taboada.imprimirTodasTaboadas();
})()
