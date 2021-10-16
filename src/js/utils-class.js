const addClass = (e, classes) =>
  e.classList && e.classList.add(...classes.split(" "));

const removeClass = (e, classes) =>
  e.classList && e.classList.remove(...classes.split(" "));

export { addClass, removeClass };
