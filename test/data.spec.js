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
        const pokemonList = ["bulbasaur", "venusaur", "ivysaur", "charmander"];
        const pokemonListOrdered = ["bulbasaur", "charmander", "ivysaur", "venusaur"];

        expect(dataUtilities.orderAlphabeticallyAz(pokemonList)).toStrictEqual(pokemonListOrdered);
    });
})