document.addEventListener("DOMContentLoaded", function () {
  let head = document.querySelector(".headname");
  let key = localStorage.key(0);
  let qwe = localStorage.getItem(key);
  head.insertAdjacentHTML("beforeend", `<h4>${qwe}</h4>`);
});
