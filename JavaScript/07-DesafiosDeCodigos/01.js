// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - ".split()": esse método transforma uma string em um array de substrings;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: faça um programa que contabilize quantos espaços em branco e quantas vogais existem
//na string de entrada;

let vogais = ['a', 'e', 'i', 'o', 'u'];

let str = 'Education best team'
let strSplit = str.split('');

let totEspacos = 0;
let totVogais = 0;

for (let i = 0; i <= strSplit.length; i++){
  if (strSplit[i] == ' '){
    totEspacos++;
  } else if (vogais.indexOf(strSplit[i].toLowerCase) >= 0) {
    totVogais++;
  }
}

console.log(`Espacos em branco: ${totEspacos} Vogais: ${totVogais}`);