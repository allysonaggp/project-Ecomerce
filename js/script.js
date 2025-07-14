//abrir barra de navegação no modo mobile
const navbar = document.querySelector("nav");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
});


//carrinho de compras

//botao de remover itens do carrinho de compras
const removeProductButtons = document.getElementsByClassName("remove-product-button");
for (let i = 0; i < removeProductButtons.length; i++) {
  removeProductButtons[i].addEventListener("click", function (event) {
    //console.log(event.target)
    event.target.parentElement.parentElement.remove()
  })
}

//botao de remover todos os itens do carrinho de compras

const removeAllProductButton = document.getElementsByClassName("remove-all-product-button");
//console.log(removeAllProductButton)
for (let i = 0; i < removeAllProductButton.length; i++) {
  removeAllProductButton[i].addEventListener("click", function (event) {
    //console.log("clicou")
    event.target.closest('.box-info-sell').querySelectorAll('.product-quantity').forEach(element => element.remove()) ;
  })
}