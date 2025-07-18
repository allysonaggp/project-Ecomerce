# 🛒 Bluestore — Loja Virtual Responsiva

Bluestore é uma loja virtual moderna e responsiva, desenvolvida com HTML, CSS e JavaScript puro. O projeto simula uma experiência de e-commerce com funcionalidades como vitrine de produtos, carrinho de compras dinâmico, cálculo de frete e opções de pagamento.

---

## 📦 Funcionalidades

### 🧭 Navegação
- ✅ Menu adaptável para dispositivos móveis (hambúrguer + toggle)
- ✅ Navegação entre páginas com persistência de dados via `localStorage`

### 🛍️ Vitrine de Produtos (`index.html`)
- Exibição de produtos em layout **Grid**
- Avaliação com estrelas
- Botão para visualizar detalhes do produto
- Redirecionamento dinâmico para a página de informações

### 📄 Página de Detalhes do Produto (`page-info-product.html`)
- Renderização dinâmica de:
  - Imagem, nome, preço e avaliação
- Informações técnicas (lista de características)
- Simulação de frete por CEP
- Opções de pagamento:
  - À vista com desconto no PIX
  - Parcelamento em até 10x sem juros
- Botões:
  - **Comprar agora**
  - **Adicionar ao carrinho**

### 🛒 Carrinho de Compras (`shopping-car.html`)
- Adição de múltiplos produtos com quantidade
- Remoção individual ou total de itens
- Controle de quantidade (+ / -)
- Cálculo automático do valor total
- Simulação de parcelamento e economia no PIX
- Finalização da compra com alerta e redirecionamento
- Botão para retornar à página inicial

### 📱 Rodapé
- Links úteis e institucionais
- Botões para download de aplicativo (Play Store e App Store)
- Informações sobre a loja

---


## 🛠️ Tecnologias Utilizadas

| Tecnologia               | Finalidade                                                                 |
|--------------------------|----------------------------------------------------------------------------|
| **HTML5**                | Estrutura semântica das páginas                                            |
| **CSS3**                 | Estilização visual, responsividade com Media Queries, Flexbox e Grid       |
| **JavaScript (Vanilla)** | Lógica de interação, manipulação do DOM, controle do carrinho e navegação  |
| **LocalStorage**         | Persistência de dados entre páginas e sessões                              |

---


## 📁 Estrutura de Diretórios
bluestore/ 
├── index.html 
├── page-info-product.html 
├── shopping-car.html 
├── css/ 
│   ├── style.css 
│   ├── media-queries.css 
│   ├── page-info-product.css 
│   └── shopping-car.css 
├── js/ 
│   ├── index.js 
│   ├── mobile.js 
│   └── shopping-car.js 
├── images/ │   
├── cart.png │   
├── menu.png │   
├── play-store.png 
│   ├── app-store.png 
│   ├── truck.png 
│   ├── truck green.png 
│   └── products/ 
│       └── product-15.png

           
---


## 📌 Observações

- O projeto **não utiliza frameworks ou bibliotecas externas**.
- Todo o comportamento é implementado com **JavaScript puro**.
- O layout é **totalmente responsivo**, adaptado para telas menores.
- Ideal como base para:
  - Estudos de front-end
  - Portfólio profissional
  - Expansão para e-commerce real

---

## 💡 Próximos Passos 

- 🔐 Sistema de login e autenticação
- 📦 Integração com API de frete por CEP
- 💳 Simulação de pagamento com cartão e Pix
- 🧾 Cupom de desconto
- 📈 Painel administrativo para gestão de produtos
- 📝 Avaliações reais dos usuários

---

