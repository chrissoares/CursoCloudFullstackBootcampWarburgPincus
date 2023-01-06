const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 12;
const maxRecord = 25;
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

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
        pokemonList.innerHTML += pokemons.map((pokemon) => `
                <a href="pokemon.html?id=${pokemon.number}">
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
                </a>
            `).join('');
    });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;
    if (qtdRecordNextPage >= maxRecord) {
        const newLimit = maxRecord - offset;
        loadPokemonItens(offset, newLimit);

        //Chama o pai do loadMoreButton para removê-lo da página.
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }

})