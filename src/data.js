import data from './data/pokemon/pokemon.js';

//Funcion de filtrado por tipo
const dataPokemon = {
    listAll: function() {
        return data.pokemon;
    },
    filterByType: function(pokemonType) {
        let pokemonTypeFiltered = data.pokemon.filter(element => element.type.includes(pokemonType));
        return pokemonTypeFiltered;
    }
}





export default dataPokemon;