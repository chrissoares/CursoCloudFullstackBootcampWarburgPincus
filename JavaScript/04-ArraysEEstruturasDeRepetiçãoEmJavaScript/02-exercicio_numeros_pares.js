//Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

class ListaNumeros{
    numeroInicial;
    numeroFinal;

    constructor (inicio, final){
        this.numeroInicial = inicio;
        this.numeroFinal = final;
    }

    imprimaPares(){
        console.log(`Números Pares entre ${this.numeroInicial} e ${this.numeroFinal}`);
        for (let i = this.numeroInicial; i<=this.numeroFinal; i++){
            if (i % 2 === 0){
                console.log(`${i}`);
            }
        }
    }
}


(function (){
    const lista = new ListaNumeros(10, 55);
    lista.imprimaPares();
})()
