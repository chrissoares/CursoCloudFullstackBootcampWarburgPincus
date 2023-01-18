type Heroi = {
    nome: string;
    vulgo: string;
}

function printaObjeto(pessoa: Heroi) {
    console.log(pessoa);
}

printaObjeto({
    nome: "Bruce Wayne",
    vulgo: "Batman",
})


//Tipos de variáveis

//Quando uma variável, um parâmetro ou um retono não tem o tipo definido, o interpretador ira verificar o tipo retornado e definira este tipo como o tipo da variável, parâmetro e função;

//Tipos primitivos: Boolean, number (inteiro e fracao), string
let ligado: boolean = false;
let nome: string = "Christiano";
let idade: number = 40;
let altura: number = 1.82;

//Tipos especiais: null, undefined
let nulo: null = null; //Só pode receber null.
let indefinido: undefined = undefined; //só pode receber undefined;

//Tipos abrangentes: any, void
let vazio: void;
let qualquerum: any = 14;  //Aceita qualquer valor, boolean, null, string, number, etc.

// Tipo objetos:
// sem previsibilidade
let pessoa: object = {
    nome: "Christiano",
    idade: 43,
    cidade: "BH"
}

// sem previsibilidade - Tipado
// Primeiro cria o seu tipo
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidade: string;
    quantidade: number;
}
// Depois define seu tipo
let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 349.99,
    unidade: "Par",
    quantidade: 10
}

// Tipo Arrays: Possuem duas formas de serem declaradas
let dados: string[] = ["Christiano", "Anderson", "Gabriel"];
let dados2: Array<string> = ["Christiano", "Anderson", "Gabriel"];

//Ainda sobre arrays, é possuível declarar um arrays com mais de um tipo Multi types
let info: (string | number)[] = [25, "Christiano", "Jose", "Rua das Flores", 1580, 30780555];

//Tuplas - Vetor Multi Type que possui uma ordem exata onde os dados devem ser informados
let boleto: [string, number, number] = ["Conta de Água", 250.75, 1234567890];

// Arrays: Métodos - São os mesmos do Javascript como .push, .map., .pop, etc.
console.log(dados);
dados.pop();
console.log(dados);
dados.push("Isaque");
console.log(dados);

// Tipo Datas
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString);


// Funções

function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(15, 5);
console.log(soma);

function addHellow(name: string) {
    return `Hellow ${name}`;
}

console.log(addHellow('Christiano'));

// Função que aceita parâmetro Multi Type

function callToPhone(phone: number | string): number | string {
    return phone;
}

console.log(callToPhone(3133221155));
console.log(callToPhone("3133221155"));


// funções assincronas retornam uma Promisse

async function getDatabase(id: number) {
    return "Christiano"
}
//ou
async function getPessoa(id: number): Promise<string> { //Tambem aceita multiplos tipos Promise<string|number|boolean|null>
    return "Alguma coisa";
}

//Interfaces

type robot = {
    id: number;
    name: string;
}

const botWithType: robot = {
    id: 1,
    name: "megaman",
}

interface robot2 {
    id: number;
    name: string;
}

const botWithInterface: robot2 = {
    id: 1,
    name: "megaman",
}


//O Type é mais utilizado para tipar um objeto e interface quando se trabalha com classe
//Mas pode ser que utilizem o interface no lugar do type, é comum fazerem isto.

//Tanto o type quanto o interface pode ter uma propriedade com Readonly. Como o nome 
// sugere, essa propriedade não poderá ter seu valor alterado. Apenas é setado no momento 
// da criação dos objetos que receberao seu modelo

type newRobot = {
    readonly id: number;
    name: string;
}

interface newRobot2 {
    readonly id: number;
    name: string;
}

const newBot1: newRobot = {
    id: 1,
    name: "Zequinha",
}

const newBot2: newRobot2 = {
    id: 2,
    name: "Zecão",
}

// Uso de interface

interface updatedRobot {
    readonly id: number;
    name: string;

    sayHello(): string;
}


class newBot implements updatedRobot {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;

    }
    sayHello(): string {
        return `Hello, I'm ${this.name}`;
    }
}

const p = new newBot(1, "Cortana");
console.log(p);
console.log(p.sayHello());


//Classes

class Character {
    name: string;
    stregth: number;
    skill: number;
    special?: string; //Uma propriedade opcional

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill
    }

    attack(): void {
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
    magicPoints: number;

    constructor(
        name: string, 
        stregth: number, 
        skill: number, 
        magicPoints: number
    ) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }

    spellAttack(){
        return `The Mage ${this.name} use your spell with ${this.magicPoints} magic points.`;
    }

}

const p2 = new Magician("Young Merlin", 9, 30, 50);
console.log(p2);
p2.spellAttack();


// Generics - Passamos um <T> para que o Type seja definido ao chamar
// Exemplo sem uso de Generics
function concatArray(...itens: any[]): any[]{
    return new Array().concat(...itens);
}

const numArray = concatArray([1, 5], [3]);
numArray.push('Maradona');
console.log(numArray);

const strArray = concatArray(["Christiano", "Anderson"], ["Gertudes"]);
console.log(strArray);


function concatArrayTyped<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArrayTyped = concatArrayTyped<number[]>([1, 5], [3]);
console.log(numArrayTyped);

const strArrayTyped = concatArrayTyped<string[]>(["Christiano", "Anderson"], ["Gertudes"]);
console.log(strArrayTyped);

strArrayTyped.push("Genobeba");
console.log(strArrayTyped);

// Decorators - (Vem de decorar, faz disparar um gatilho) Serve para decorar (dispara outra ação ou injete, faça algo)

function ExibirNome(target: any){
    console.log(target);
}

// Quando a classe for criada na memória, imprime quem chamou o decorator.
@ExibirNome
class Funcionario {}

@ExibirNome
class Quincas{}


// Um decorator para injetar uma nova propriedade que não existe na classe
function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version}) //Dois Underlines para indicar que é uma propriedade privada, não a torna privada, mas evita que junte com outra que possua o mesmo nome
    }
}

//Attribute Decorator
function minLength(length: number){
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) =>{
            if(value.length < length) {
                throw new Error(`Tamanho menor que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
};

@apiVersion("1.10")
class Api{
    
    @minLength(5)
    name: string;

    constructor(name: string){
        this.name = name;
    }
};

const api = new Api("Produtos"); //Se for menor que o minLength, da o erro.

console.log(api.__version); //Apresenta o erro pois não existe o __version, vai existir apenas depois da transpilacao
console.log(api.name); 

