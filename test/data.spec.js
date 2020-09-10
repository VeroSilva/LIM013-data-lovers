jest.mock('../src/data/pokemon/pokemon.js');
import data from '../src/data/pokemon/pokemon.js';
import { dataUtilities } from '../src/data.js';

//Test de listado
describe('dataUtilities.listAll', () => {
    it('should be a function', () => {
        expect(typeof dataUtilities.listAll).toBe('function')
    });

    it('should list all objects', () => {
        const listAllData = data.pokemon;

        expect(dataUtilities.listAll(listAllData)).toEqual(listAllData);
    });
})

//Test de filtrado por tipo
describe('dataUtilities.filterByType', () => {

    it('should be a function', () => {
        expect(typeof dataUtilities.filterByType).toBe('function')
    });

    it('should return an array with only fire type', () => {
        const fireType = 'fire';
        const fireArray = data.pokemon.filter(element => element.type.includes(fireType));

        expect(dataUtilities.filterByType(fireType)).toStrictEqual(fireArray);
    });
})

//Test de buscador
describe('dataUtilities.filterByName', () => {

    it('should be a function', () => {
        expect(typeof dataUtilities.filterByName).toBe('function')
    });

    it('should return Bulbasaurs card', () => {
        const pokemonName = 'Bulbasaur';
        const nameArray = data.pokemon.filter(element => element.name.includes(pokemonName));

        expect(dataUtilities.filterByType(nameArray)).toStrictEqual(nameArray);
    });
})

//Test de ordenado alfabetico
describe('dataUtilities.orderAlphabeticallyAz', () => {

    it('should be a function', () => {
        expect(typeof dataUtilities.orderAlphabeticallyAz).toBe('function')
    });

    it('should return an array ordered from A to Z', () => {
        const pokemonList = data.pokemon;
        const pokemonListOrdered = data.pokemon.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })

        expect(dataUtilities.orderAlphabeticallyAz(pokemonList)).toStrictEqual(pokemonListOrdered);
    });
})

//Test de ordenado alfabetico
describe('dataUtilities.orderNumericallyDirect', () => {

    it('should be a function', () => {
        expect(typeof dataUtilities.orderNumericallyDirect).toBe('function')
    });

    it('should return an array ordered from 001 to 251', () => {
        const pokemonList = data.pokemon;
        const pokemonListOrdered = data.pokemon.sort((a, b) => {
            if (a.num > b.num) {
                return 1;
            }
            if (a.num < b.num) {
                return -1;
            }
            return 0;
        })

        expect(dataUtilities.orderNumericallyDirect(pokemonList)).toStrictEqual(pokemonListOrdered);
    });
})

//Test de calculadora
describe('dataUtilities.comparePokemon', () => {

    it('should compare two pokemons and return who is the winner', () => {
        const player1 = "bulbasaur";
        const player2 = "wartortle";
        expect(dataUtilities.comparePokemon(player1, player2)).toBe("¡Ganaste!")
    })
})

//Test de ordenado por fuerza
describe('dataUtilities.orderStrong', () => {
    it('should be a function', () => {
        expect(typeof dataUtilities.orderStrong).toBe('function')
    });
    it('should return the strongest pokemon', () => {})
})

//Pokemon random
// describe('dataUtilities.randomPokemon', () => {
//     it('should throw any pokemon', () => {
//         const pokemons = data.pokemon;
//         expect(dataUtilities.randomPokemon(pokemons)).toContain(pokemons);
//     })
// })