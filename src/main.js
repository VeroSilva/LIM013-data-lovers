import dataFile from './data.js';

//Declaracion de variables globales
const typeButton = document.getElementsByClassName("type");
const counterType = document.getElementById("counter-type");
const buttonMenuTypes = document.getElementById("menu-button");
const buttonClosed = document.getElementById("closed");
const inputSearch = document.getElementById("search");
const back = document.getElementById("back");
const container = document.getElementById("container");
const eachPokemon = dataFile.listAll();
const pokeCard = document.getElementById("pokeCard");
//Mostrar las cartas en la galería
function showCards(dataArr) {
    container.innerHTML = "";
    for (let k = 0; k < dataArr.length; k++) {
        let txtClass = "";
        let eachTypePoke = dataArr[k].type;
        for (let l = 0; l < dataArr.length; l++) {
            txtClass += eachTypePoke[l] + " ";
        }
        container.innerHTML += `
            <div class="card ${txtClass}" id="${dataArr[k].name}">
            <img src="${dataArr[k].img}" class="imageContainer">
            <p class="">${dataArr[k].name}</p>
            </div>
            `
        
    }
}

//Filtrar por tipo
function filterPokemonByType(pokemonType) {
    const pokemonDataByType = dataFile.filterByType(pokemonType);
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
    });
};

//Mostrar el menú hamburguesa
buttonMenuTypes.addEventListener("click", function() {
    document.getElementById("modal-menu").classList.add("display");
    document.getElementById("modal-menu").classList.remove("hide");
});

//Cerrar menu hamburguesa
buttonClosed.addEventListener("click", function() {
    document.getElementById("modal-menu").classList.add("hide");
    document.getElementById("modal-menu").classList.remove("display");
});
//Buscador
inputSearch.addEventListener("keyup", function(e){
    const pokemonDataByName = dataFile.filterByName(e.target.value);
    showCards(pokemonDataByName);
});
//Capturar el tipo de pokemon
for (let j = 0; j < typeButton.length; j++) {
    typeButton[j].addEventListener("click", function(event) {
        let pokemonType = event.target.getAttribute("data-type");
        filterPokemonByType(pokemonType)
    })
};

showCards(eachPokemon);

//Función mostrar modal personalizado
 function showPokeCards(dataArr){
    for (let k = 0; k < dataArr.length; k++) {
    document.getElementById(dataArr[k].name).addEventListener("click", function(){
        document.getElementById("pokeCard").style.display = "block";
        pokeCard.innerHTML= "";
        
            pokeCard.innerHTML=`
                <div class="headCard ">
                <img src="images/closed-new.png" id="close">
                    <img src="${dataArr[k].img}" class="pokeCardImageContainer" alt="">
                    <div class="headCard2">
                        <p class="styleText">Nombre: ${dataArr[k].name} </p>
                        <p class="styleText">N°: ${dataArr[k].num} </p>
                    </div>
                </div>
                <div class="centerCard">
                    <p class="styleText">Peso: ${dataArr[k].size.weight}</p>
                    <p class="styleText">Altura: ${dataArr[k].size.height}</p>
                    <p class="styleText">Tipo: ${dataArr[k].type}</p>
                </div>
                <p class="styleText">Descripción: ${dataArr[k].about} </p>
                <p class="styleText">Evoluciones: ${dataArr[k].evolution}</p>
                `
                document.getElementById("close").addEventListener("click", function(){
                    pokeCard.style.display = "none";
                })
        }) 
    };
};
showPokeCards(eachPokemon);


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