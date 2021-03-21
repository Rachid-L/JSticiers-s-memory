

let clicBtn = document.getElementById("play");
let menu = document.getElementById("barreMenu");


if (window.matchMedia("(max-width: 900px)").matches) {
  clicBtn.addEventListener("click", () => {
    if(getComputedStyle(menu).display != "none"){
      menu.style.display = "none";
    }
  });
}


/* Fonction qui permet de cacher-rendre visible le contenu du menu déroulant 

const generalMenu = document.querySelector('nav');
const menuBtn = document.querySelector('.dropdown-btn');
const menu = document.querySelector('.dropdown-menu-content');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  generalMenu.classList.toggle('hidden');
}); */


// Application d'un addeventlistener pour flip over les cartes au clic

const cards = document.querySelectorAll('.card');
console.log(cards);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    cards[i].classList.add('flip-over');
  });
};


