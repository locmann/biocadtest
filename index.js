//https://locmann.github.io/biocadtest/public/html/main.html

const menu = document.querySelectorAll(".item");
menu.forEach((val, i) => {
  val.addEventListener("click", (e) => {
    localStorage.clear();
    localStorage.setItem(`item${i}`, e.target.innerHTML);
  });
});
