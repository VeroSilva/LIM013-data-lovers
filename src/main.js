import data from './data/pokemon/pokemon.js';

const typeButton = document.getElementsByClassName("type");

for (var i = 0; i < typeButton.length; i++) {
    typeButton[i].addEventListener("click", function(event) {
        let dataType = event.target.getAttribute("data-type");
        typeShow(dataType);
    })
}

function typeShow(e) {
    data.pokemon.forEach(element => {
        if (element.type.includes(e)) {
            document.getElementById("galery").innerHTML += element.name + " ";
        }
    });
}