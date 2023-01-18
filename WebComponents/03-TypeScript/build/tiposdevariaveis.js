"use strict";
//Tipos primitivos: Boolean, number (inteiro e fracao), string
let ligado = false;
let nome = "Christiano";
let idade = 40;
let altura = 1.82;
//Tipos especiais: null, undefined
let nulo = null; //Só pode receber null.
let indefinido = undefined; //só pode receber undefined;
//Tipos abrangentes: any, void
let vazio;
let qualquerum = 14; //Aceita qualquer valor, boolean, null, string, number, etc.
// Tipo objetos:
// sem previsibilidade
let pessoa = {
    nome: "Christiano",
    idade: 43,
    cidade: "BH"
};
// Depois define seu tipo
let meuProduto = {
    nome: "Tênis",
    preco: 349.99,
    unidade: "Par",
    quantidade: 10
};
// Tipo Arrays: Possuem duas formas de serem declaradas
let dados = ["Christiano", "Anderson", "Gabriel"];
let dados2 = ["Christiano", "Anderson", "Gabriel"];
//Ainda sobre arrays, é possuível declarar um arrays com mais de um tipo Multi types
let info = [25, "Christiano", "Jose", "Rua das Flores", 1580, 30780555];
//Tuplas - Vetor Multi Type que possui uma ordem exata onde os dados devem ser informados
let boleto = ["Conta de Água", 250.75, 1234567890];
// Arrays: Métodos - São os mesmos do Javascript como .push, .map., .pop, etc.
console.log(dados);
dados.pop();
console.log(dados);
dados.push("Gerturdes");
console.log(dados);
// Tipo Datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString);
// Funções
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(15, 5);
console.log(soma);
function addHellow(name) {
    return `Hellow ${name}`;
}
console.log(addHellow('Christiano'));
