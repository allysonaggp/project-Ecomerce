//abrir barra de navegação no modo mobile
const navbar = document.querySelector("nav");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
});


//carrinho de compras

const removeProductButtons = document.getElementsByClassName("remove-product-button");
for (let i = 0; i < removeProductButtons.length; i++) {
  removeProductButtons[i].addEventListener("click", function (event) {
    //console.log(event.target)
    event.target.parentElement.parentElement.remove()
  })
}