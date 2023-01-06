const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    const types = pokeDetail.types.map((typesSlot) => typesSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 12) => {
    const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    //O fetch retorna uma promisses.
    //o then  que vai ser chamado quando a promisse for entregue.
    //o catch é chamado quando ocorre um problema com a requisição.
    //o finally sempre é chamado ao final.

    return fetch(URL)
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
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
    /*    .catch((error) => console.log(error))
        .finally(() => console.log('Requisição concluída'));
    */
}