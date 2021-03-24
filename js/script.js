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
var prevSelection = [];
var nbAffiche = 0;
var readyToClick = true;

const gameTheme = document.getElementById("selectedTheme");
let gameChosenTheme = gameTheme.value;

// Détermine l'image à afficher sur le mode ANIMAUX

function getImage(valeur){
  var imgSrc = "";
  switch(valeur){
    case 1:
      imgSrc += "1.png";
      break;
    case 2:
      imgSrc += "2.png";
      break;
    case 3:
      imgSrc += "3.png";
      break;
    case 4:
      imgSrc += "4.png";
      break;
    case 5:
      imgSrc += "5.png";
      break;
    case 6:
      imgSrc += "6.png";
      break;
    case 7:
      imgSrc += "7.png";
      break;
    case 8:
      imgSrc += "8.png";
      break;
    case 9:
      imgSrc += "9.png";
      break;
    case 10:
      imgSrc += "10.png";
      break;
  }
  return imgSrc;
};


// Met en place le jeu

function displayCard(){ //mettre le mode de jeu en paramètres !!!
  var txt = "";
  const gameTheme = document.getElementById("selectedTheme");
  let gameChosenTheme = gameTheme.value;
  for (let i = 0; i < tabGame.length; i++){
      txt += "<div>";
      for (let j=0; j < tabGame[i].length; j++){
        if (tabGame[i][j] === 0){
          txt += `<button class='card' style='width: 105px;height:105px;' onClick='verif(\"${i}-${j}\")'></button>`;
        }
        else {
          txt += `<img class='card' style='width: 100px;height:100px;' src='img/${gameChosenTheme}/` + getImage(tabGame[i][j]) + "'>";
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

