/*

Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 5 variáveis. Sendo elas:
  1 - Preço de etanol;
  2 - Preço de gasolina;
  3 - Tipo de combustível do carro;
  4 - Consumo médio por Km;
  5 - Distânmcia em KM da viagem;
  
Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const GASOLINA = 'Gasolina';
const ETANOL = 'Etanol';

const precoEtanol = 4.10;
const precoGasolina = 4.99;
const distanciaViagemEmKm = 100;
const kmPorLitro = 8;
const tipoCombistovel = ETANOL;

const litrosConsumidos = distanciaViagemEmKm / kmPorLitro;

let previsaoGasto = 0;

if (tipoCombistovel === GASOLINA) {
    previsaoGasto = litrosConsumidos * precoGasolina;
} else {
    previsaoGasto = litrosConsumidos * precoEtanol;
}

console.log('A previsão de consumo para a viagem de '+ distanciaViagemEmKm + ' Kms utilizando o combustível ' + tipoCombistovel + ' é de R$ '+previsaoGasto.toFixed(2))

