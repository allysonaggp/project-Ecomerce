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
    updateTotal()
  })
}


//botao de remover todos os itens do carrinho de compras

const removeAllProductButton = document.getElementsByClassName("remove-all-product-button");
//console.log(removeAllProductButton)
for (let i = 0; i < removeAllProductButton.length; i++) {
  removeAllProductButton[i].addEventListener("click", function (event) {
    //console.log("clicou")
    event.target.closest('.box-info-sell').querySelectorAll('.product-quantity').forEach(element => element.remove());
    //o ".closest("")"captura a tag pai, e o  ".querySelectorAll("")" seleciona dentro a classe pai 
    updateTotal()
  })
}


//calcular valor do carrinho
function updateTotal() {
  let totalAmount = 0
  const cartProducts = document.getElementsByClassName("product-quantity");
  for (let i = 0; i < cartProducts.length; i++) {

    productPrice = cartProducts[i].getElementsByClassName("price")[0].innerText.replace("R$:", "").replace(",", ".")
    productQuantity = cartProducts[i].getElementsByClassName("product-quantity-number")[0].innerText
    totalAmount = totalAmount + (productPrice * productQuantity)
  }
  
  totalAmount = 'R$:' + totalAmount.toFixed(2).replace(".", ",")
  document.querySelector(".price-total b").innerText = totalAmount
}