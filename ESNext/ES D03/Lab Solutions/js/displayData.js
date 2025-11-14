import { FetchData } from "./fetchData.js";
import { loading } from "./loading.js";

let data = await FetchData();

const container = document.getElementById("products");

const cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let counter = cartArr.length;

let cartCounter = document.querySelector(".cartCounter");
cartCounter.textContent = counter;

async function displayData() {
  loading(true);

  for (const product of data) {
    let card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");
    let cardImg = document.createElement("img");
    cardImg.classList.add("cardImg");
    cardImg.src = product.image;
    cardImg.alt = product.title;

    imgDiv.appendChild(cardImg);
    card.appendChild(imgDiv);

    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("cardTitle");
    cardTitle.innerHTML = product.title;
    card.appendChild(cardTitle);

    let cardDescription = document.createElement("p");
    cardDescription.classList.add("cardDescription");
    cardDescription.innerHTML = product.description.slice(0, 100) + "...";
    card.appendChild(cardDescription);

    let addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("addToCartBtn");
    addToCartBtn.innerHTML = "Add to cart";
    card.appendChild(addToCartBtn);

    addToCartBtn.addEventListener("click", () => {
      const existingProduct = cartArr.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cartArr.push({ ...product, quantity: 1 });
        UpdateCounter();
      }

      localStorage.setItem("cart", JSON.stringify(cartArr));
    });
  }

  // ⬇️ مرة واحدة بس بعد ما الكروت كلها تتبني
  document.body.appendChild(container);

  loading(false);
}

displayData();

// data?.forEach((product) => {
//   let card = document.createElement("div");
//   card.classList.add("card");
//   container.appendChild(card);

//   let imgDiv = document.createElement("div");
//   imgDiv.classList.add("imgDiv");
//   let cardImg = document.createElement("img");
//   cardImg.classList.add("cardImg");
//   cardImg.src = product.image;
//   cardImg.alt = product.title;

//   imgDiv.appendChild(cardImg);
//   card.appendChild(imgDiv);

//   let cardTitle = document.createElement("h3");
//   cardTitle.classList.add("cardTitle");
//   cardTitle.innerHTML = product.title;
//   card.appendChild(cardTitle);

//   let cardDescription = document.createElement("p");
//   cardDescription.classList.add("cardDescription");
//   cardDescription.innerHTML = product.description.slice(0, 100) + "...";
//   card.appendChild(cardDescription);

//   let addToCartBtn = document.createElement("button");
//   addToCartBtn.classList.add("addToCartBtn");
//   addToCartBtn.innerHTML = "Add to cart";
//   card.appendChild(addToCartBtn);

//   addToCartBtn.addEventListener("click", () => {
//     const existingProduct = cartArr.find((item) => item.id === product.id);
//     if (existingProduct) {
//       existingProduct.quantity += 1;
//     } else {
//       cartArr.push({ ...product, quantity: 1 });
//       UpdateCounter();
//     }
//     console.log(counter);

//     localStorage.setItem("cart", JSON.stringify(cartArr));
//   });

//   // -----------------------------------
//   document.body.appendChild(container);
// });

function UpdateCounter() {
  counter += 1;
  cartCounter.textContent = counter;
}
// isLoading = false;

// if(isLoading === true){
//   loadDiv = document.getElementById("")
//   loadDiv.style.display = block;
// else{
//   loadDiv.style.display = none;

// }

// function fetchData(){
// isLoading = true

// fetch

// isLoading= false
// }
