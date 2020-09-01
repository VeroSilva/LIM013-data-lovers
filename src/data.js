import data from './data/pokemon/pokemon.js';

//Funcion de filtrado por tipo
const dataPokemon = {
    listAll: function() {
        return data.pokemon;
    },
    filterByType: function(pokemonType) {
        const pokemonTypeFiltered = data.pokemon.filter(element => element.type.includes(pokemonType));
        return pokemonTypeFiltered;
    },
    filterByName: function(pokemonName) {
        const pokemonNameFiltered = data.pokemon.filter(element => element.name.includes(pokemonName));
        return pokemonNameFiltered;
    }
}





export default dataPokemon;