import dataFile from './data.js';

//Declaracion de variables globales
const typeButton = document.getElementsByClassName("type");
const counterType = document.getElementById("counter-type");
const buttonMenuTypes = document.getElementById("menu-button");
const buttonClosed = document.getElementById("closed");
let eachPokemon = dataFile.listAll();

//Mostrar las cartas en la galería
function showCards(dataArr) {
    let container = document.getElementById("container");
    container.innerHTML = "";

    for (let k = 0; k < dataArr.length; k++) {
        let txtClass = "";
        let eachTypePoke = dataArr[k].type;
        for (let l = 0; l < dataArr.length; l++) {
            txtClass += eachTypePoke[l] + " ";
        }
        container.innerHTML += `
            <div class="card ${txtClass}">
            <img src="${dataArr[k].img}" class="imageContainer">
            <p class="">${dataArr[k].name}</p>
            </div>
            `
    }
}

//Filtrar por tipo
function filterPokemonByType(pokemonType) {
    let pokemonDataByType = dataFile.filterByType(pokemonType);
    document.getElementById("container").innerHTML = "";
    showCards(pokemonDataByType);
    document.getElementById("modal-menu").classList.add("hide");
    document.getElementById("modal-menu").classList.remove("display");

    counterType.innerHTML = `
    <div class="sticker ${pokemonType}-sticker">
    <img src="images/types/${pokemonType}.png">
    <p class="sticker-type">${pokemonType}</p>
    <img src="images/closed-white.png" id="closed-white">
    </div>
    <p class="counter-type">Total: ${pokemonDataByType.length}</p>
    `

    const buttonRemove = document.getElementById("closed-white");
    buttonRemove.addEventListener("click", function() {
        counterType.innerHTML = "";
        showCards(eachPokemon);
    })
}

//Mostrar el menú hamburguesa
buttonMenuTypes.addEventListener("click", function() {
    document.getElementById("modal-menu").classList.add("display");
    document.getElementById("modal-menu").classList.remove("hide");
})

//Cerrar menu hamburguesa
buttonClosed.addEventListener("click", function() {
    document.getElementById("modal-menu").classList.add("hide");
    document.getElementById("modal-menu").classList.remove("display");
})

//Capturar el tipo de pokemon
for (let j = 0; j < typeButton.length; j++) {
    typeButton[j].addEventListener("click", function(event) {
        let pokemonType = event.target.getAttribute("data-type");
        filterPokemonByType(pokemonType)
    })
}

showCards(eachPokemon);




//Paginacion 
// const first = document.querySelector(".first");
// const previous = document.querySelector(".previous");
// const next = document.querySelector(".next");
// const last = document.querySelector(".last");
//Funionalidad botón next
// next.addEventListener("click", function() {
//         page == lista.length - 6 ? (page == 0) : (page += 10);
//         container.innerHTML = "";
//         for (let o = page; o < page + 6; o++) {
//             let cardNew = document.createElement("div");
//             let image1 = document.createElement("img");
//             let text1 = document.createElement("h2");
//             cardNew.className = "card";
//             image1.className = "imageContainer";
//             image1.setAttribute("src", eachPokemon[o].img);
//             text1.textContent = eachPokemon[o].name;
//             cardNew.appendChild(image1);
//             cardNew.appendChild(text1);
//             lista.push(cardNew);
//             container.appendChild(cardNew);
//         }
//     })
//Funcionalidad botón previous
// previous.addEventListener("click", function() {
//     page == 0 ? (page = lista.length - 10) : (page -= 10);
//     container.innerHTML = "";
//     for (let o = page; o < page + 6; o++) {
//         let cardNew = document.createElement("div");
//         let image1 = document.createElement("img");
//         let text1 = document.createElement("h2");
//         cardNew.className = "card";
//         image1.className = "imageContainer";
//         image1.setAttribute("src", eachPokemon[o].img);
//         text1.textContent = eachPokemon[o].name;
//         cardNew.appendChild(image1);
//         cardNew.appendChild(text1);
//         lista.push(cardNew);
//         container.appendChild(cardNew);
//     }

//     document.getElementById("modal-menu").classList.add("display");
//     document.getElementById("modal-menu").classList.remove("hide");
// })