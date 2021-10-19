import { removeClass } from "./utils-class";

const cart = ["1", "2", "3"];
localStorage.setItem("cart", JSON.stringify(cart));

const shoppingCart = document.getElementById("shopping-cart");

if (shoppingCart) {
  const headerCart = document.getElementById("header-cart");
  const buttons = shoppingCart.querySelectorAll("button[data-delete-item]");

  buttons.forEach((item) => {
    const id = item.attributes["data-delete-item"].value;

    item.addEventListener("click", () => {
      shoppingCart.querySelector(`div[data-row='${id}']`).remove();

      const localStorageCart =
        localStorage.getItem("cart") &&
        JSON.parse(localStorage.getItem("cart"));
      const found = localStorageCart.indexOf(id);
      if (found > -1) {
        localStorageCart.splice(found, 1);
        localStorage.setItem("cart", JSON.stringify(localStorageCart));
      }
      if (localStorageCart.length === 0) {
        removeClass(headerCart, "cart-filled");
        removeClass(document.getElementById("cart-empty"), "hidden");
      }
    });
  });
}
