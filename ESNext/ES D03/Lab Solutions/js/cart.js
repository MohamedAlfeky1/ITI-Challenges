import { showConfirmModal } from "./confirmModal.js";
import { renderCart } from "./renerCart.js";

window.addEventListener("load", renderCart);

export function checkToOrder() {
  const continueToOrder = document.querySelector(".continueToOrder");
  const cartArr = JSON.parse(localStorage.getItem("cart")) || [];
  if (cartArr.length !== 0) {
    continueToOrder.addEventListener("click", () => {
      alert("✅ cart purchase successfully");
      localStorage.removeItem("cart");
      continueToOrder.href = "index.html";
    });
  } else {
    continueToOrder.remove();
  }
}
checkToOrder();
