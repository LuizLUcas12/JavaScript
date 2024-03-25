import getWord from "./word.js";

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clube");
const btnNew = document.querySelector(".new");
btnNew.onclick = () => init();
let indexImg;

init();

function init(){
    indexImg = 1;
    img.src = "img1.pnj"

    generateButtons();
} 