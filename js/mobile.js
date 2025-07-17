//abrir barra de navegação no modo mobile

const navbar = document.querySelector("nav");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
});