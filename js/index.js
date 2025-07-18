
//botao de adicionar itens a pagina de indormaóes do produto 
const productInfo = document.getElementsByClassName("product");
for (let i = 0; i < productInfo.length; i++) {
    productInfo[i].addEventListener("click", addProductToPageInfo)

}
// função dicionar produto da pagina index para o local storage
function addProductToPageInfo(event) {
    const clickedElement = event.target
    const productIndex = clickedElement.closest(".product");
    const productImage = productIndex.querySelector("img").src;
    const productTitle = productIndex.querySelector(".product-name").innerText;
    const productPrice = productIndex.querySelector(".product-price").innerText.replace("R$:", "").replace(",", ".");
    const productRate = productIndex.querySelector(".rate").innerText;


    const productInfo = {
        imagem: productImage,
        title: productTitle,
        rate: productRate,
        price: productPrice
    };


    // Salva no localStorage
    localStorage.setItem("productInfo", JSON.stringify(productInfo));

    // Redireciona para a página do carrinho
    window.location.href = "page-info-product.html"
}

// função recuperar produto do localstorage para inclusão na pagina de informaóes do produto
function infoContainer() {
    const productInfo = JSON.parse(localStorage.getItem("productInfo"));
    if (!productInfo) return;

    // Preenche imagem
    document.querySelector(".box-product-img img").src = productInfo.imagem;

    // Preenche textos
    document.querySelector(".product-name").innerText = productInfo.title;
    document.querySelector(".rate").innerText = productInfo.rate;
    document.querySelector(".price").innerHTML = `<span>R$: </span>${productInfo.price}`;

    // (Opcional) Limpa o localStorage
    localStorage.removeItem("productInfo");
}
    




window.addEventListener("DOMContentLoaded", infoContainer);
