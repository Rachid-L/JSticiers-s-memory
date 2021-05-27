// Mise en place de la fonctionnalité d'effacement du menu latéral lorsque le joueur appuie sur "Play" 

let clicBtn = document.getElementById("play");
let menu = document.getElementById("barreMenu");



clicBtn.addEventListener("click", () => {
    if (getComputedStyle(menu).display != "none") {
    menu.style.display = "none";
    }
});

