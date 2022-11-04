/*

Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
  - Preço de combustível;
  - Consumo médio por Km;
  - Distânmcia em KM;
  
Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const valorCombustivel = 4.85;
const consumoMedioKm = 8;
const distanciaKm = 150;

let previsaoGasto = distanciaKm / consumoMedioKm * valorCombustivel;

console.log("Gasto de combustível da viagem: " + previsaoGasto.toFixed(2));

