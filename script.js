<<<<<<< HEAD



=======
/* Fonction qui permet de cacher-rendre visible le contenu du menu déroulant */

const generalMenu = document.querySelector('nav');
const menuBtn = document.querySelector('.dropdown-btn');
const menu = document.querySelector('.dropdown-menu-content');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  generalMenu.classList.toggle('hidden');
});

// Déclaration d'une fonction pour flip over les cartes

// Application d'un addeventlistener pour flip over les cartes au clic

const cards = document.querySelectorAll('.card');
console.log(cards);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    cards[i].classList.add('flip-over');
  });
}

/* Variable qui représente le jeu */
// let cards = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/* Fonction qui permet de distribuer les cartes 
function showDeck() {
  let txt = '';
  for (let i = 0; i < cardDeck.length; i++) {}
}

cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = */
>>>>>>> 179f5dd2818d99103082119f2eea9c878f05903e
