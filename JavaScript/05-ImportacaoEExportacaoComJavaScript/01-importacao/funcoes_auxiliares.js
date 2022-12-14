//Ao ser importado pela primeira vez, o node vai percorrer todo o arquivo, mapear funções, variáveis, etc e preparar o que é exportado
//Ao ser importado novamente, apenas o que será exportado vai ser verificado.

function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

/*
module.exports = { 
    gets: gets, 
    print: print
}
Hoje não precisa mais especificar o nome da funcao e o valor que ela recebe, pois possuem o mesmo nome (atributo ou propriedade e funcao)
*/

module.exports = { gets, print }
