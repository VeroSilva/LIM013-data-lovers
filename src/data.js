import data from './data/pokemon/pokemon.js';

//Funcion de filtrado por tipo
const filter = {
    filterType: function(dataType) {
        data.pokemon.forEach(element => {
            if (element.type.includes(dataType)) {
                let showType = document.querySelectorAll(`.card.${dataType}`);
                for (let i = 0; i < showType.length; i++) {
                    showType[i].style.display = "block";
                }
            }
        });
    },
}


export default filter;