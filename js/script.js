const header = document.querySelector("header");
const main = document.querySelector("main");
const headerHeight = header.offsetHeight;
console.log(headerHeight);
const firstHeight = main.offsetHeight;
console.log(firstHeight);

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  console.log(scrollDistance);
});
