let element = document.querySelector("#menu");
console.log(element);
element.addEventListener("click", (event) => {
  const target = event.target;
  target.classList.add("active");
});
