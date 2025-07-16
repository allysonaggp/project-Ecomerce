# 🛒 Bluestore — Loja Virtual Responsiva

Bluestore é uma loja virtual moderna e responsiva, desenvolvida com HTML, CSS e JavaScript puro. O projeto simula uma experiência de e-commerce com funcionalidades como vitrine de produtos, carrinho de compras dinâmico, cálculo de frete e opções de pagamento.

---

## 📦 Funcionalidades

- ✅ Menu de navegação adaptável para dispositivos móveis
- 🛍️ Vitrine de produtos com layout em Grid
- 🔍 Página de detalhes do produto com:
  - Informações técnicas
  - Preço à vista e parcelado
  - Simulação de frete por CEP
  - Botões de compra e adição ao carrinho
- 🛒 Carrinho de compras com:
  - Adição de produtos
  - Remoção individual ou total
  - Cálculo automático do valor total
  - Persistência dos dados via `localStorage`
- 📱 Rodapé com links úteis e botões para download de aplicativo

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| **HTML5** | Estrutura das páginas |
| **CSS3** | Estilização visual, responsividade com media queries, Flexbox e Grid |
| **JavaScript (Vanilla)** | Lógica de interação do carrinho, manipulação do DOM, uso de `localStorage` |
| **LocalStorage** | Persistência dos dados do carrinho entre sessões |

---

## 📁 Estrutura de Diretórios
bluestore/ ├── index.html ├── shopping-car.html ├── page-info-product.html ├── css/ │   ├── style.css │   ├── media-queries.css │   ├── shopping-car.css │   └── page-info-product.css ├── js/ │   └── script.js ├── images/ │   ├── cart.png │   ├── menu.png │   ├── play-store.png │   ├── app-store.png │   ├── truck.png │   ├── truck green.png │   └── products/ │       └── product-15.png
---

## 🚀 Como Executar Localmente

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Navegue pelos produtos e acesse a página de detalhes (`page-info-product.html`).
4. Adicione itens ao carrinho e acesse `shopping-car.html` para visualizar e simular a compra.

---

## 📌 Observações

- O projeto não utiliza frameworks ou bibliotecas externas.
- Todo o comportamento é implementado com JavaScript puro.
- O layout é totalmente responsivo e adaptado para dispositivos móveis.
- Ideal como base para projetos de e-commerce ou estudos de front-end.

---
