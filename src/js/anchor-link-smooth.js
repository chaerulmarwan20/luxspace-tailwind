const smothScrollAnchor = document.querySelectorAll("a[href^='#']");

smothScrollAnchor.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    if (document.getElementById(this.getAttribute("href").replace("#", ""))) {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
