/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilometro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    mediaKmPorLitro;

    constructor(marca, cor, mediaKmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.mediaKmPorLitro = mediaKmPorLitro;
    }

    previsaoCustoPercurso(distanciaEmKm, valorLitroCombustivel){
        return (distanciaEmKm / this.mediaKmPorLitro) * valorLitroCombustivel;
    }


}

( function (){
    const distanciaViagem = 100;
    const valorLitroCombustivel = 4.89;
    const golDoChris = new Carro('VW Gol', 'Prata', 8);
    
    console.log(`A previsão de custo para percorrer ${distanciaViagem} Km utilizando o carro ${golDoChris.marca} ${golDoChris.cor} é ${golDoChris.previsaoCustoPercurso(distanciaViagem, valorLitroCombustivel)} reais.`);
    
    const CorsaElias = new Carro('GW Corsa', 'Cinza', 10);
    console.log(`A previsão de custo para percorrer ${distanciaViagem} Km utilizando o carro ${golDoChris.marca} ${golDoChris.cor} é ${CorsaElias.previsaoCustoPercurso(distanciaViagem, valorLitroCombustivel)} reais.`);
})();
