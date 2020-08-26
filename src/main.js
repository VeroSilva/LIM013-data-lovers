import dataFile from './data.js';
import data from './data/pokemon/pokemon.js';

//Agregar clase a cada pokemon según su tipo
let eachPokemon = data.pokemon;
for (let k = 0; k < eachPokemon.length; k++) {
    let container = document.getElementById("container");
    let cardNew = document.createElement("div");
    let image1 = document.createElement("img");
    let text1 = document.createElement("h2");
    cardNew.className = "card";
    image1.className = "imageContainer";
    image1.setAttribute("src", eachPokemon[k].img);
    text1.textContent = eachPokemon[k].name;
    cardNew.appendChild(image1);
    cardNew.appendChild(text1);
    container.appendChild(cardNew);
    let eachTypePoke = eachPokemon[k].type;
    for (let l = 0; l < eachTypePoke.length; l++) {
        cardNew.classList.add(eachTypePoke[l]);
    }
}

//Función de botones para filtrar por tipo
const typeButton = document.getElementsByClassName("type");
for (let j = 0; j < typeButton.length; j++) {
    typeButton[j].addEventListener("click", function(event) {
        let eachCard = document.querySelectorAll(".card");
        for (let m = 0; m < eachCard.length; m++) {
            eachCard[m].style.display = "none";
        }

        let dataType = event.target.getAttribute("data-type");
        dataFile.filterType(dataType);
        document.getElementById("menu-sidebar").classList.add("hide");
        document.getElementById("menu-sidebar").classList.remove("display");
    })
}
//Mostrar el menú hamburguesa

const buttonMenuTypes = document.getElementById("menu-button");
buttonMenuTypes.addEventListener("click", function() {
    document.getElementById("menu-sidebar").classList.add("display");
    document.getElementById("menu-sidebar").classList.remove("hide");
})
//Paginacion
const pokeCards= document.getElementsByClassName("card");
console.log(pokeCards);
const pokeGallery =document.getElementById("container");
let currentPage = 1;
let rows = 2;
function displayList(items, wrapper, rowsPerPage, page){
    wrapper.innerHTML = "";
	page--;

	let start = rowsPerPage * page;
	let end = start + rowsPerPage;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}
}

