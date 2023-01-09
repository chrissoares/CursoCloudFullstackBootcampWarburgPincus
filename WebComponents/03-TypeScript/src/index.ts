type Heroi=  {
    nome: string;
    vulgo: string;
}

function printaObjeto(pessoa: Heroi){
    console.log(pessoa);
}

printaObjeto({
    nome: "Bruce Wayne",
    vulgo: "Batman",
})
