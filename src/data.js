import data from './data/pokemon/pokemon.js';

//Funcion de filtrado por tipo
const filter = {
    filterType: function(dataType) {
        let dataTypeD = data.pokemon.filter(element => element.type.includes(dataType));
        const counterType = document.getElementById("counter-type");
        if (dataTypeD) {
            let showType = document.querySelectorAll(`.card.${dataType}`);
            for (let i = 0; i < showType.length; i++) {
                showType[i].style.display = "block";
            }
            counterType.innerHTML = `
            <div class="sticker ${dataType}-sticker">
            <p class="sticker-type">${dataType}</p>
            <img src="images/closed-white.png" id="closed-white">
            </div>
            <p class="counter-type">Total: ${showType.length}</p>
            `
        }

    },
}



export default filter;