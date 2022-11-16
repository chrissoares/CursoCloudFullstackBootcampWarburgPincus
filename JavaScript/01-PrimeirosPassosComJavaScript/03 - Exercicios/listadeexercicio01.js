/*
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const APROVADO = 'Aprovado';
const RECUPERACAO = 'Recuperação';
const REPROVADO = 'Reprovado';

const nomeAluno = 'Christiano';
const notaPrimeiroBimestre = 6;
const notaSegundoBimestre = 10;
const notaTerceiroBimestre = 7;

const mediaSemestre = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre) / 3;

let resultado = '';

if (mediaSemestre < 5) {
    resultado = REPROVADO;
} else if (mediaSemestre >= 5 && mediaSemestre <= 7) {
    resultado = RECUPERACAO;
} else {
    resultado = APROVADO;
}

console.log('O aluno '+nomeAluno+' teve uma média de '+mediaSemestre+' pontos neste semestre, com este média ele foi '+resultado+ '.');
