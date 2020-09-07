import { dataUtilities } from './data.js';

//Declaracion de variables globales
const typeButton = document.getElementsByClassName("type");
const counterType = document.getElementById("counter-type");
const buttonMenuTypes = document.getElementById("menu-button");
const buttonClosed = document.getElementById("closed");
const inputSearch = document.getElementById("search");
const orderAz = document.getElementById("a-z");
const orderZa = document.getElementById("z-a");
const orderDirect = document.getElementById("direct");
const orderReverse = document.getElementById("reverse");
const versusButton = document.getElementById("boton-versus")
const eachPokemon = dataUtilities.listAll();
const back = document.getElementById("back");
const container = document.getElementById("container");
const pokeCardContainer = document.getElementById("pokeCardContainer");
//Mostrar las cartas en la galería
function showCards(dataArr) {
    container.innerHTML = "";
    for (let k = 0; k < dataArr.length; k++) {
        let txtClass = "";
        let eachTypePoke = dataArr[k].type;
        const templateCards = `
            <div class="card ${txtClass}" id="${dataArr[k].name}">
            <img src="${dataArr[k].img}" class="imageContainer">
            <p class="">${dataArr[k].name}</p>
            </div>
            `;
      
        for (let l = 0; l < dataArr.length; l++) {
            txtClass += eachTypePoke[l] + " ";
        }
        container.innerHTML += templateCards;
    }
}

//Filtrar por tipo
function filterPokemonByType(pokemonType) {
    let pokemonDataByType = dataUtilities.filterByType(pokemonType);
    const templateCards = `
    <div class="sticker">
    <img src="images/types/${pokemonType}.png">
    <p class="sticker-type">${pokemonType}: ${pokemonDataByType.length}</p>
    <img src="images/closed-new.png" id="closed-sticker">
    </div>
    `
    document.getElementById("container").innerHTML = "";
    document.getElementById("modal-menu").classList.add("hide");
    document.getElementById("modal-menu").classList.remove("display");
    
    counterType.innerHTML = templateCards;

    const buttonRemove = document.getElementById("closed-sticker");
    buttonRemove.addEventListener("click", function() {
        counterType.innerHTML = "";
        showCards(eachPokemon);
    })

    showCards(pokemonDataByType);
}

//Mostrar el menú hamburguesa
buttonMenuTypes.addEventListener("click", function() {
    document.getElementById("modal-menu").classList.add("display");
    document.getElementById("modal-menu").classList.remove("hide");
});

//Cerrar menu hamburguesa
buttonClosed.addEventListener("click", function() {
    document.getElementById("modal-menu").classList.add("hide");
    document.getElementById("modal-menu").classList.remove("display");
})

//Buscador
inputSearch.addEventListener("keyup", function(e) {
    const pokemonDataByName = dataUtilities.filterByName(e.target.value);
    showCards(pokemonDataByName);
})

//Capturar el tipo de pokemon
for (let j = 0; j < typeButton.length; j++) {
    typeButton[j].addEventListener("click", function(event) {
        let pokemonType = event.target.getAttribute("data-type");
        filterPokemonByType(pokemonType)
    })
};

//Ordenar alfabeticamente
orderAz.addEventListener("click", function() {
    const orderAz = dataUtilities.orderAlphabeticallyAz();
    showCards(orderAz);
})

orderZa.addEventListener("click", function() {
    const orderZa = dataUtilities.orderAlphabeticallyZa();
    showCards(orderZa);
})

//Ordenar numericamente
orderDirect.addEventListener("click", function() {
    const orderDirect = dataUtilities.orderNumericallyDirect();
    showCards(orderDirect);
})

orderReverse.addEventListener("click", function() {
    const orderReverse = dataUtilities.orderNumericallyDirect();
    showCards(orderReverse);
})

//Versus
versusButton.addEventListener("click", function() {
    document.getElementById("versus-modal-container").classList.add("display");
    document.getElementById("versus-modal-container").classList.remove("hide");
    const templateVersus = `
    <div class="outside-modal">
    <div id="versusModal" class="versusModal">
        <img src="images/closed-white.png" id="closed-versus">
        <h2 class="title-versus">¡Pon a prueba el tipo de tu pokemón!</h2>
        <div class="players">
            <input type="text" name="Player 1" class="player1" placeholder="Tu jugador" id="my-player">
            <input type="text" name="Player 2" class="player2" placeholder="Contrincante" id="other-player">
        </div>
        <button id="compare">Comparar</button>  
    </div>
    </div>
    `
    const versusModalContainer = document.getElementById("versus-modal-container");
    versusModalContainer.innerHTML = templateVersus;
    const versusModal = document.getElementById("versusModal");

    const compare = document.getElementById("compare");
    compare.addEventListener("click", function() {
        let myPlayer = document.getElementById("my-player").value;
        let otherPlayer = document.getElementById("other-player").value;
        let compareResult = dataUtilities.comparePokemon(myPlayer, otherPlayer);
        versusModal.innerHTML += `<p class="compare-result"> ${compareResult} </p>`;

        const buttonClosed = document.getElementById('closed-versus');
        buttonClosed.addEventListener("click", function() {
            document.getElementById("versus-modal-container").classList.add("hide");
        })
    })

    const buttonClosed = document.getElementById('closed-versus');
    buttonClosed.addEventListener("click", function() {
        document.getElementById("versus-modal-container").classList.add("hide");
    })

})

showCards(eachPokemon);

//Función mostrar modal personalizado
 function showPokeCards(dataArr){
    for (let k = 0; k < dataArr.length; k++) {
    document.getElementById(dataArr[k].name).addEventListener("click", function(){
        document.getElementById("pokeCardContainer").style.display = "block";
        
        pokeCardContainer.innerHTML= "";
            pokeCardContainer.innerHTML=`
            <div class="pokeCard" id="pokeCard">
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
            </div>
                `
                document.getElementById("pokeCard").style.display = "block";
                document.getElementById("close").addEventListener("click", function(){
                    pokeCardContainer.style.display = "none";
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