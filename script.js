const generalMenu = document.querySelector("nav");
const menuBtn = document.querySelector(".dropdown-btn");
const menu = document.querySelector(".dropdown-menu-content");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  generalMenu.classList.toggle("hidden");
});
