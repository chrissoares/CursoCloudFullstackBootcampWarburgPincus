/*
    2) O IMC - Indice de Massa Corporal - é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritimo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18,8 Abaixo do peso;
    - Entre 18,5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/
const CONDICAO_ABAIXO_DO_PESO = 'Abaixo do peso';
const CONDICAO_PESO_NORMAL = 'Peso normal';
const CONDICAO_ACIMA_DO_PESO = 'Acima do peso';
const CONDICAO_OBESO = 'Obeso';
const CONDICAO_OBESIDADE_GRAVE = 'Obesidade Grave';

const nomeAdulto = 'Christiano'
const pesoAdulto = 100;
const alturaAdulto = 1.82;

let  imcAdulto = pesoAdulto / (alturaAdulto * alturaAdulto);
imcAdulto = pesoAdulto / Math.pow(alturaAdulto, 2);

let condicaoAdulto = '';

if (imcAdulto < 18.5) {
    condicaoAdulto = CONDICAO_ABAIXO_DO_PESO;
} else if (imcAdulto >= 18.5 && imcAdulto <= 25) {
    condicaoAdulto = CONDICAO_PESO_NORMAL;
} else if (imcAdulto >= 25 && imcAdulto <= 30) {
    condicaoAdulto = CONDICAO_ACIMA_DO_PESO;
} else if (imcAdulto >= 30 && imcAdulto <= 40) {
    condicaoAdulto = CONDICAO_OBESO;
} else {
    condicaoAdulto = CONDICAO_OBESIDADE_GRAVE;
}

console.log('O IMC do Adulto ' + nomeAdulto + ' é  ' + imcAdulto + ' sua condição ' + condicaoAdulto + '.');
