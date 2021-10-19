let data = {
  "complete-name": "",
  "email-address": "",
  address: "",
  "phone-number": "",
  courier: "",
  payment: "",
};

const check = () => {
  const find = Object.values(data).filter((item) => item === "");
  if (find.length === 0) {
    document.querySelector(
      "#shipping-detail button[type='submit']"
    ).disabled = false;
  }
};

const inputs = document.querySelectorAll("#shipping-detail input[data-input]");

inputs.forEach((item) => {
  item.addEventListener("change", (e) => {
    data[e.target.id] = e.target.value;

    check();
  });
});

const options = document.querySelectorAll("#shipping-detail button[data-name]");

options.forEach((item) => {
  item.addEventListener("click", function () {
    const value = this.attributes["data-value"].value;
    const name = this.attributes["data-name"].value;

    data[name] = value;

    check();
  });
});
