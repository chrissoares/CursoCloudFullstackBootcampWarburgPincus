const offset = 0;
const limit = 10;
const URL =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

//O fetch retorna uma promisses.
//o then  que vai ser chamado quando a promisse for entregue.
//o catch é chamado quando ocorre um problema com a requisição.
//o finally sempre é chamado ao final.

fetch(URL)
    //o response tem uma propriedade json que é uma promisse, então possui toda sua extrutura
    /*.then(function (response){
        response.json().then(function(responseBody){
            console.log(responseBody)
        });
        console.log(response)
    })*/
    //Desta Outra forma, o primeiro then retorna uma promisse para o segundo then;
    //Os thens podem ser encadeados desta mandeira, evitando ter que ser usado callback dentro de callback.
    /*.then(function(response){
        return response.json();
    })
    .then(function(jsonBody){
        console.log(jsonBody);
    })
    .catch(function (error){
        console.log(error)
    })
    .finally(function(){
        console.log('Requisição concluída')
    });*/
    //Outra forma é reduzindo a função atraves de arrow funciont.
    //Quando uma arrow function possui apenas uma linha, não é necessário abrir
    //o seu corpo com as chaves { }
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída'));


console.log(10+10);

