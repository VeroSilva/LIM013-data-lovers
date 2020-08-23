//Filtrando el valor de un array
const array

//Insertando un nuevo nodo
let i = 0;
while(i<=256){
const container = document.getElementById("container");
const cardNew = document.createElement("div");
const image1 = document.createElement("img");
const text1 = document.createElement("h2")
cardNew.className = "card";
image1.className = "imageContainer";
image1.setAttribute("src","https://www.serebii.net/pokemongo/pokemon/001.png", )
text1.textContent="Bulbasaur";
cardNew.appendChild(image1);
cardNew.appendChild(text1);
container.appendChild(cardNew);
i++
}


import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

