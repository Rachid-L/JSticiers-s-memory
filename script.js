/* PROGRAMMATION DU JEU DE MEMORY*/

const cardGrid = document.querySelector("#cardGrid");

//0 = face cachée
var tabGame = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
];

var tabResult = genereTableauAleatoire();
var prevSelection=[];
var nbAffiche = 0;
var readyToClick = true;

// Détermine l'image à afficher

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

// Met en place le jeu

function displayCard(){
  var txt = "";
  for (let i = 0; i < tabGame.length; i++){
      txt += "<div>";
      for (let j=0; j < tabGame[i].length; j++){
        if (tabGame[i][j] === 0){
          txt +=`<button class='card' style='width: 105px;height:105px;' onClick='verif(\"${i}-${j}\")'></button>`;
        }
        else{
          txt +="<img class='card' style='width: 100px;height:100px;' src='" + getImage(tabGame[i][j]) + "'>";
        };
      }
      txt += "</div>";
  };
  cardGrid.innerHTML = txt;
};

function verif(bouton){
  if(readyToClick){
    nbAffiche++;
    var ligne = bouton.substr(0,1);
    var colonne = bouton.substr(2,1);
    tabGame[ligne][colonne] = tabResult[ligne][colonne];
    displayCard();

    if(nbAffiche > 1){
      readyToClick = false;
      setTimeout(()=>{
        //vérification
        if (tabGame[ligne][colonne] !== tabResult[prevSelection[0]][prevSelection[1]]){
          tabGame[ligne][colonne] = 0;
          tabGame[prevSelection[0]][prevSelection[1]] = 0;
        }
        displayCard();
        readyToClick = true;
        nbAffiche = 0;
        prevSelection = [ligne, colonne];
      }, 1000)

      //Réinitialise les images sélectionnées

    } else{
      prevSelection = [ligne, colonne];
    }
  }
};

function genereTableauAleatoire(){
  var tab = [];

  var nbImagePosition = [0,0,0,0,0,0,0,0,0,0];

  for(let i=0; i<4; i++){
    var ligne = [];
    for(var j = 0; j<5;j++){
      var fin = false;
      while (!fin){
        var randomImage = Math.floor(Math.random()*10);
        if (nbImagePosition[randomImage] < 2){
          ligne.push(randomImage+1);
          nbImagePosition[randomImage]++;
          fin = true;
        }
      }
    }
    tab.push(ligne);
  }
  return tab;
};

displayCard();

/* AUTRES SCRIPTS*/

// Application d'un addeventlistener pour flip over les cartes au clic

const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    cards[i].classList.add('flip-over');
  });
};

/* Fonction qui permet de cacher-rendre visible le contenu du menu déroulant 

const generalMenu = document.querySelector('nav');
const menuBtn = document.querySelector('.dropdown-btn');
const menu = document.querySelector('.dropdown-menu-content');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  generalMenu.classList.toggle('hidden');
}); */


// Permet l'apparition-disparition de la barre latérale sur petit écran

let clicBtn = document.getElementById("play");
let menu = document.getElementById("barreMenu");

if (window.matchMedia("(max-width: 900px)").matches) {
  clicBtn.addEventListener("click", () => {
    if(getComputedStyle(menu).display != "none"){
      menu.style.display = "none";
    }
  });
};

// Permet de relancer le jeu (pas encore opé)
let replay = getElementById("replay");
replay.addEventListener("onClick", ()=>{
  genereTableauAleatoire();
  displayCard();
  tabGame = tabResult;
})



// Mise en place de la fonctionnalité d'effacement du menu latéral lorsque le joueur appuie sur "Play" 

let clicBtn = document.getElementById("play");
let menu = document.getElementById("barreMenu");
let mql = window.matchMedia("(max-width:900px");

if (mql.matches) {
  clicBtn.addEventListener("click", () => {
    if (getComputedStyle(menu).display != "none") {
      menu.style.display = "none";
    }
  });
}