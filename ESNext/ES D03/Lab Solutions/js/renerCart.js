import { checkToOrder } from "./cart.js";
import { showConfirmModal } from "./confirmModal.js";

const total = document.querySelector(".total");
const cart = document.getElementById("cart");

export function renderCart() {
  cart.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = "🛒 Your Cart";
  title.classList.add("title");
  cart.appendChild(title);
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartData.length === 0) {
    const noData = document.createElement("h2");
    noData.textContent = "Your cart is empty 😢";
    cart.appendChild(noData);
    total.textContent = `Total: $0.00`;
    return;
  }

  const fragment = document.createDocumentFragment();

  cartData.forEach((product) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("itemContainer");

    const item = document.createElement("div");
    item.classList.add("item");

    const cartImgDiv = document.createElement("div");
    cartImgDiv.classList.add("cartImgDiv");

    const itemImg = document.createElement("img");
    itemImg.src = product.image;
    cartImgDiv.appendChild(itemImg);

    const productContent = document.createElement("div");
    productContent.classList.add("productContent");

    const itemTitle = document.createElement("h2");
    itemTitle.classList.add("itemTitle");
    itemTitle.textContent = product.title;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = `${product.price}$ ×`;

    const decreaseQuantityBtn = document.createElement("span");
    decreaseQuantityBtn.classList.add("QuantityBtn");
    decreaseQuantityBtn.textContent = "-";
    decreaseQuantityBtn.addEventListener("click", () =>
      handleDecrease(product, quantity, finalItemPrice)
    );

    const quantity = document.createElement("span");
    quantity.classList.add("quantity");
    quantity.textContent = product.quantity || 1;

    const increaseQuantityBtn = document.createElement("span");
    increaseQuantityBtn.classList.add("QuantityBtn");
    increaseQuantityBtn.textContent = "+";
    increaseQuantityBtn.addEventListener("click", () =>
      handleIncrease(product, quantity, finalItemPrice)
    );

    const equal = document.createElement("span");
    equal.classList.add("equal");
    equal.textContent = " = ";

    const finalItemPrice = document.createElement("span");
    finalItemPrice.classList.add("finalItemPrice");
    finalItemPrice.textContent = `$${product.price * product.quantity}`;

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", async () => {
      const confirmDelete = await showConfirmModal("Remove this item?");
      if (confirmDelete) {
        cartData = cartData.filter((item) => item.id !== product.id);
        localStorage.setItem("cart", JSON.stringify(cartData));
        renderCart();
        checkToOrder();
        updateTotalPrice();
      }
    });

    productContent.append(
      itemTitle,
      price,
      decreaseQuantityBtn,
      quantity,
      increaseQuantityBtn,
      equal,
      finalItemPrice
    );

    const itemDetails = document.createElement("div");
    itemDetails.classList.add("itemDetails");
    itemDetails.append(cartImgDiv, productContent);

    item.append(itemDetails, removeBtn);
    itemContainer.appendChild(item);
    fragment.appendChild(itemContainer);
  });

  cart.appendChild(fragment);
  updateTotalPrice();
}

function handleIncrease(product, quantity, finalItemPrice) {
  product.quantity += 1;
  quantity.textContent = product.quantity;
  finalItemPrice.textContent = `$${product.price * product.quantity}`;
  updateCartData(product);
  updateTotalPrice();
}

function handleDecrease(product, quantity, finalItemPrice) {
  if (product.quantity <= 1) return;
  product.quantity -= 1;
  quantity.textContent = product.quantity;
  finalItemPrice.textContent = `$${product.price * product.quantity}`;
  updateCartData(product);
  updateTotalPrice();
}

function updateCartData(product) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  cartData = cartData.map((item) =>
    item.id === product.id ? { ...item, quantity: product.quantity } : item
  );
  localStorage.setItem("cart", JSON.stringify(cartData));
}

function updateTotalPrice() {
  const cartArr = JSON.parse(localStorage.getItem("cart")) || [];
  if (cartArr.length !== 0) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let newTotal = cartData
      .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
      .toFixed(2);
    total.textContent = `Total: $${newTotal}`;
  } else {
    total.remove();
  }
}
updateTotalPrice();
