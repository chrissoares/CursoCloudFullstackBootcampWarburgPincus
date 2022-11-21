//Objeto
const pessoa = {
    nome: 'Christiano',
    idade: 43,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

pessoa.descrever();

pessoa.pet = 'Cachorro';
pessoa.corFavorita = 'Azul';

console.log(pessoa);

pessoa.descrever = function () {
    console.log(`Olá, eu me chamo ${this.nome}, tenho atualmente ${this.idade}. Eu gosto de ${this.pet} e minha cor favorita é ${this.corFavorita}`);
}

pessoa.descrever();

console.log();
//Classe
class Pessoa {
    nome;
    idade;

    //Dentro da classe não precisa usar a palavra chave function para declarar um método (Função).
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//Cria uma "Instância" (Ocorrência da classe) da classe pessoa
const gabriel = new Pessoa();

console.log(gabriel);

gabriel.nome = 'Gabriel Balment E. Soares';
gabriel.idade = 17;

console.log(gabriel);

//Cria outra "Instância" (Ocorrência da classe) da classe pessoa
const isaque = new Pessoa();
isaque.nome = 'Isaque Balmant E. Soares';
isaque.idade = 14;

gabriel.descrever();
isaque.descrever();

console.log();

//Nova Classe.
class Veiculo {
    tipo;
    modelo;
    ano;
    cor;

    constructor(tipo, modelo, ano, cor) {
        this.tipo = tipo;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    descrever() {
        console.log(`Este veículo é um ${this.tipo}, modelo ${this.modelo}, ano ${this.ano} e da cor ${this.cor} e minha idade é ${this.idade}`);
    }


}

//Instânciar classe Carro
golDoChris = new Veiculo('Carro', 'VW Gol 1.0 4p Flex', '2012/2013', 'Prata');
golDoChris.descrever();
console.log();
///

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

compararPessoas(gabriel, isaque);
console.log();
