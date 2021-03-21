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

// Mise en place du jeu

const cardGrid = document.querySelector("#cardGrid");

var arrayGame = [
  [1,0,3,0],
  [0,1,2,0],
  [0,0,0,0],
  [0,0,0,0]
];


function displayCard(){
  var txt = "";
  for (let i = 0; i<arrayGame.length; i++){
      txt += "<div>";
      for (let j=0; j<arrayGame[i].length; j++){
        if (arrayGame[i][j] === 0){
          txt +="<img class='card' src='img/logo.png'>";
        } 
        else{
          txt +="<img class='card' src='" + getImage(arrayGame[i][j]) + "'>";
        };
      }
      txt += "</div>";
  }
  cardGrid.innerHTML = txt;
};

function getImage(valeur){
  var imgSrc = "";
  switch(valeur){
    case 1:
      imgSrc += "img/elephant.png";
      break;
    case 2:
      imgSrc += "img/giraffe.png";
      break;
    case 3:
      imgSrc += "img/hippo.png";
      break;
    case 4:
      imgSrc += "img/monkey.png";
      break;
    case 5:
      imgSrc += "img/panda.png";
      break;
    case 6:
      imgSrc += "img/parrot.png";
      break;
    case 7:
      imgSrc += "img/penguin.png";
      break;
    case 8:
      imgSrc += "img/pig.png";
      break;
    case 9:
      imgSrc += "img/rabbit.png";
      break;
    case 10:
      imgSrc += "img/snake.png";
      break;
  }
  return imgSrc;
};

getImage();
displayCard();


/*let card = document.createElement("div");
card.classList.add("card");
cardGrid.appendChild(card);*/

// Application d'un addeventlistener pour flip over les cartes au clic

const cards = document.querySelectorAll('.card');
console.log(cards);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    cards[i].classList.add('flip-over');
  });
};


