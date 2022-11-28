//Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

class ListaNumeros{
    lista;

    constructor (lista){
        this.lista = lista;
    }

    imprimaPares(){
        console.log(`Números Pares:`);
        for (let i = 0; i<=this.lista.length; i++){
            if (this.lista[i] % 2 === 0){
                console.log(`${this.lista[i]}`);
            }
        }
    }
}

(function (){
    numeros = [5, 7, 8, 10, 11, 24, 55, 33, 32, 157, 1024, 0];
    const lista = new ListaNumeros(numeros);
    lista.imprimaPares();
})()
