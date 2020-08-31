import dataFile from './data.js';
import data from './data/pokemon/pokemon.js';
//Lista de nombre
const nameList = data.pokemon.map(nombre => nombre.name);
//Agregar clase a cada pokemon según su tipo

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
            <div class="card ${txtClass}" id="${dataArr[k].name}">
            <img src="${dataArr[k].img}" class="imageContainer">
            <p class="">${dataArr[k].name}</p>
            </div>
            `
    }
}

//Escibiendola
let eachPokemon = data.pokemon;
showCards(eachPokemon);

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
        document.getElementById("modal-menu").classList.add("hide");
        document.getElementById("modal-menu").classList.remove("display");
    })
}
//Mostrar el menú hamburguesa

const buttonMenuTypes = document.getElementById("menu-button");
buttonMenuTypes.addEventListener("click", function() {
    document.getElementById("modal-menu").classList.add("display");
    document.getElementById("modal-menu").classList.remove("hide");
})

//Cerrar menu hamburguesa

const buttonClosed = document.getElementById("closed");
buttonClosed.addEventListener("click", function() {
    document.getElementById("modal-menu").classList.add("hide");
    document.getElementById("modal-menu").classList.remove("display");
})
//Buscador
const inputSearch = document.getElementById("search");
const optionsSearch = document.getElementById("optionsSearch");
const back = document.getElementById("back");
let container = document.getElementById("container");

inputSearch.addEventListener("keypress", function(){
    let nameList = eachPokemon.map(nombre => nombre.name);
    if( nameList.includes(inputSearch.value.toLowerCase())== true ){
        let pokeName = inputSearch.value;
        let eachCard = document.querySelectorAll(".card");
        for (let m = 0; m < eachCard.length; m++) {
            eachCard[m].style.display = "none";
        }
        document.getElementById(pokeName).style.display = "block";
        document.getElementById("back").style.display = "block";
        back.style.display = "block";
    }
})
inputSearch.addEventListener("keyup", function(e){
    const listaDeNombres =  nameList.filter(nombre => nombre.indexOf(inputSearch.value) === 0 );
    /* listaDeNombres.forEach(element, element == ) */
    console.log("Filtrado", listaDeNombres, e.target.value);

})
//Botón para volver hacia atrás
back.addEventListener("click", function(){
    let eachCard = document.querySelectorAll(".card");
        for (let m = 0; m < eachCard.length; m++) {
            eachCard[m].style.display = "block";
        }
        back.style.display = "none";
})
//Creando lista de opciones de buscador


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