"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printaObjeto(pessoa) {
    console.log(pessoa);
}
printaObjeto({
    nome: "Bruce Wayne",
    vulgo: "Batman",
});
//Tipos de variáveis
//Quando uma variável, um parâmetro ou um retono não tem o tipo definido, o interpretador ira verificar o tipo retornado e definira este tipo como o tipo da variável, parâmetro e função;
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
dados.push("Isaque");
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
// Função que aceita parâmetro Multi Type
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone(3133221155));
console.log(callToPhone("3133221155"));
// funções assincronas retornam uma Promisse
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Christiano";
    });
}
//ou
function getPessoa(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Alguma coisa";
    });
}
const botWithType = {
    id: 1,
    name: "megaman",
};
const botWithInterface = {
    id: 1,
    name: "megaman",
};
const newBot1 = {
    id: 1,
    name: "Zequinha",
};
const newBot2 = {
    id: 2,
    name: "Zecão",
};
class newBot {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, I'm ${this.name}`;
    }
}
const p = new newBot(1, "Cortana");
console.log(p);
console.log(p.sayHello());
//Classes
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character("Zé das Coves", 10, 98);
console.log(p1);
p1.attack();
// Modificadores de acesso (Data modifiers)
// Public - Pode ser acessado dentro e fora da classe
// Privat - Só é visível dentro da Classe
// Protected - Só pode ser acessado dentro da classe e de
// classes que herdadem da classe onde foi definido
// Eles podem ser aplicado em metodos e propriedades
// Subclasses (Heranças)
//Character:    superclass
//Magician:     subclass
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
    spellAttack() {
        return `The Mage ${this.name} use your spell with ${this.magicPoints} magic points.`;
    }
}
const p2 = new Magician("Young Merlin", 9, 30, 50);
console.log(p2);
p2.spellAttack();
// Generics - Passamos um <T> para que o Type seja definido ao chamar
// Exemplo sem uso de Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
numArray.push('Maradona');
console.log(numArray);
const strArray = concatArray(["Christiano", "Anderson"], ["Gertudes"]);
console.log(strArray);
function concatArrayTyped(...itens) {
    return new Array().concat(...itens);
}
const numArrayTyped = concatArrayTyped([1, 5], [3]);
console.log(numArray);
const strArrayTyped = concatArrayTyped(["Christiano", "Anderson"], ["Gertudes"]);
console.log(strArray);
