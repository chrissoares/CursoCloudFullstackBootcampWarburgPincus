function escreverNome(nome) {
    return nome;
}

function verificaMaiorIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome('Christiano') + ' é maior de idade!');
    } else {
        console.log(escreverNome('Christiano') + ' é menor de idade');
    }
}

verificaMaiorIdade(43);
