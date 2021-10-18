import { addClass, removeClass } from "./utils-class";

const sliders = document.getElementsByClassName("slider");
const arrSliders = Array.from(sliders);

arrSliders.forEach((slider) => {
  const items = slider.querySelectorAll(".slider .item");
  const preview = slider.querySelector("div > .preview");

  items.forEach((itemTrigger) => {
    itemTrigger.addEventListener("click", function () {
      const dataImg = this.attributes?.["data-img"]?.value;
      items.forEach((itemRemove) => removeClass(itemRemove, "selected"));
      addClass(itemTrigger, "selected");
      preview.querySelector("img").setAttribute("src", dataImg);
    });
  });
});
