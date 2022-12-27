function convertPokemonTypesToLi(pokemonType) {
    return pokemonType.map((type) => `<li class="type">${type}</li>`);
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons = []) => {

    // Primeira forma de usar o MAP, mais didadica
    // const newList = pokemons.map((pokemon) => {
    //     return convertPokemonToLi(pokemon);
    // })

    // const newHtml = newList.join('');

    // pokemonList.innerHTML += newHtml;

    //Outra forma de usar o MAP, para este caso. 
    //Como o MAP recebe chama uma funcao passando como parâmetros
    // Valor, Index e Array, pode referenciar a função diretamente, que ela 
    //será chamada pelo MAP e receberá o valor que é o pokemon.
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');
})
