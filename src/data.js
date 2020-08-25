import data from './data/pokemon/pokemon.js';

//Funcion de filtrado por tipo
const filter = {
    filterType: function(dataType) {
        data.pokemon.forEach(element => {
            if (element.type.includes(dataType)) {
                document.getElementById("galery").innerHTML += element.name + " ";
            }
        });
    },
}


export default filter;