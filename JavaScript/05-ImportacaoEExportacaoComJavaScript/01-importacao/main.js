//Forma padrao: cria o objeto funcoes contendo os atributos exportados de funcoes_auxiliares
const funcoes = require('./funcoes_auxiliares');

//Forma moderna: Utiliza o destruction para atribuir os atributos exportados de funcoes_auxiliares diretamente para variáveis, constants, etc
//pois usa o mesmo nome dos atributos exportados.
const { gets, print } = require('./funcoes_auxiliares');

(function () {
    //Utilizando a forma Padrão de importar
    funcoes.print(funcoes.gets());
    //Utilizando a forma Moderna de importar
    print(gets());
})();

