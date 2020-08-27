import dataFile from './data.js';
import data from './data/pokemon/pokemon.js';

//Agregar clase a cada pokemon según su tipo- Paginación
let eachPokemon = data.pokemon;
let page = 0;
let lista= [];
let container = document.getElementById("container");
for (let k = 0; k < page +6 ; k++) {
    let cardNew = document.createElement("div");
    let image1 = document.createElement("img");
    let text1 = document.createElement("h2");
    cardNew.className = "card";
    image1.className = "imageContainer";
    image1.setAttribute("src", eachPokemon[k].img);
    text1.textContent = eachPokemon[k].name;
    cardNew.appendChild(image1);
    cardNew.appendChild(text1);
    lista.push(cardNew);
    container.appendChild(cardNew);
    let eachTypePoke = eachPokemon[k].type;
    for (let l = 0; l < eachPokemon.length; l++) {
        cardNew.classList.add(eachTypePoke[l]);
    }
    
}
console.log(lista.length)
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
const first = document.querySelector(".first");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const last = document.querySelector(".last");
//Funionalidad botón next
next.addEventListener ("click", function(){
    page==lista.length - 6 ? (page == 0):(page += 10);
    container.innerHTML = "";
    for(let o = page; o < page + 6; o++){
        let cardNew = document.createElement("div");
        let image1 = document.createElement("img");
        let text1 = document.createElement("h2");
        cardNew.className = "card";
        image1.className = "imageContainer";
        image1.setAttribute("src", eachPokemon[o].img);
        text1.textContent = eachPokemon[o].name;
        cardNew.appendChild(image1);
        cardNew.appendChild(text1);
        lista.push(cardNew);
        container.appendChild(cardNew);
     }
})
//Funcionalidad botón previous
previous.addEventListener("click", function(){
    page== 0 ? (page = lista.length-10):(page-=10);
    container.innerHTML = "";
    for(let o = page; o < page + 6; o++){
        let cardNew = document.createElement("div");
        let image1 = document.createElement("img");
        let text1 = document.createElement("h2");
        cardNew.className = "card";
        image1.className = "imageContainer";
        image1.setAttribute("src", eachPokemon[o].img);
        text1.textContent = eachPokemon[o].name;
        cardNew.appendChild(image1);
        cardNew.appendChild(text1);
        lista.push(cardNew);
        container.appendChild(cardNew);
     }

})
