//abrir barra de navegação no modo mobile

const navbar = document.querySelector("nav");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
});




//carrinho de compras

//função de remover itens individuais do carrinho de compras
function removeProduct(){
const removeProductButtons = document.getElementsByClassName("remove-product-button");
for (let i = 0; i < removeProductButtons.length; i++) {
  removeProductButtons[i].addEventListener("click", function (event) {
    //console.log(event.target)
    event.target.parentElement.parentElement.remove()
    localStorage.removeItem("product");
    updateTotal()

  })
}
}

//função de remover todos os itens do carrinho
function removeAllProduct (){
const removeAllProductButton = document.getElementsByClassName("remove-all-product-button");
//console.log(removeAllProductButton)
for (let i = 0; i < removeAllProductButton.length; i++) {
  removeAllProductButton[i].addEventListener("click", function (event) {
    //console.log("clicou")
    event.target.closest('.box-info-sell').querySelectorAll('.product-quantity').forEach(element => element.remove());
    //o ".closest("")"captura a tag pai, e o  ".querySelectorAll("")" seleciona dentro a classe pai 
    localStorage.removeItem("product");
    updateTotal()
  })
}
}

//função de calcular o valor do carrinho
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






// função de acrescentar e subitrair itens--------------------------------------------------------------------------
function CartQuantity(){
const incrementQuantity = document.getElementsByClassName("increment-quantity-button");

for (let i = 0; i < incrementQuantity.length; i++) {
  incrementQuantity[i].addEventListener("click", function (event) {
    // Acessa o elemento pai do botão clicado
    const parent = event.target.closest(".product-quantity");

    // Encontra o elemento que mostra a quantidade
    const quantityElement = parent.getElementsByClassName("product-quantity-number")[0];

    // Converte o texto atual em número
    let currentQuantity = parseInt(quantityElement.innerText);

    // Incrementa
    currentQuantity += 1;

    // Atualiza o texto na tela
    quantityElement.innerText = currentQuantity;
    updateTotal()
  });
}

// botão de diminuir itens--------------------------------------------------------------------------

const decrementQuantity = document.getElementsByClassName("decrement-quantity-button");

for (let i = 0; i < decrementQuantity.length; i++) {
  decrementQuantity[i].addEventListener("click", function (event) {
    const parent = event.target.closest(".product-quantity");
    const quantityElement = parent.getElementsByClassName("product-quantity-number")[0];
    let currentQuantity = parseInt(quantityElement.innerText);

    if (currentQuantity > 1) {
      currentQuantity -= 1;
      quantityElement.innerText = currentQuantity
    } else {
      const productQuantity = event.target.closest(".product-quantity");
      if (productQuantity) {
        productQuantity.remove();
      }
    }

    updateTotal()
  });
}

}



//processo de adição de itens no carrinho de compras

//salvando dados do produto no local storage
const addCartButton = document.getElementsByClassName("add-cart-button");
for (let i = 0; i < addCartButton.length; i++) {
  addCartButton[i].addEventListener("click", addProductToCart)
}

function addProductToCart(event) {
  const button = event.target
  const productInfo = button.closest(".box-product");
  const productImage = productInfo.querySelector(".box-product-img img").src
  const productTitle = productInfo.querySelector(".product-name").innerText
  const productPrice = productInfo.querySelector(".product-price h2").innerText.replace("R$:", "").replace(",", ".")

  const product = {
    imagem: productImage,
    title: productTitle,
    price: productPrice,
    


  };


  // Recupera carrinho atual ou cria novo
  let cartProduct = JSON.parse(localStorage.getItem("product")) || [];

  // Adiciona produto
  cartProduct.push(product);

  // Salva no localStorage
  localStorage.setItem("product", JSON.stringify(cartProduct));

  // Redireciona para a página do carrinho
  window.location.href = "shopping-car.html";

}

//restaurando itens do localstorage para inclusão na pagina do carrinho de compras
const cart = JSON.parse(localStorage.getItem("product")) || [];
const cartContainer = document.querySelector(".cart-products");

cart.forEach((product) => {
  let newCartProduct = document.createElement("div")

  newCartProduct.classList.add("product-quantity")

  newCartProduct.innerHTML = `
  <!-- produtos e quantidades e preço-->
                    <div class="product-quantity">
                        <div>
                            <img src="${product.imagem}" alt="${product.title}">
                        </div>
                        <div class="product-quantity-item">
                            <p>${product.title}</p>
                        </div>
                        <div class="quantity">
                            <p>Quantidade</p>
                            <div class="quantity-number">
                                <button type="button" class="decrement-quantity-button"><b><</b></button>
                                <p class="product-quantity-number">1</p>
                                <button type="button" class="increment-quantity-button"><b>></b></button>
                            </div>
                            <button type="button" class="remove-product-button">REMOVER</button>
                        </div>
                        <div class="quantity-price">
                            <div>
                                <p>Preço à vista no pix</p>
                            </div>
                            <div>
                                <p class="price"><b>R$:${product.price}</b></p>
                            </div>
                        </div>
                    </div>
                    `;
  cartContainer.appendChild(newCartProduct);
  CartQuantity();
  removeProduct();
  removeAllProduct();
  updateTotal();
  

})








document.querySelectorAll(".increment-quantity-button").forEach(button => {
  button.addEventListener("click", () => {
    console.log("Botão clicado!");
  });
});
