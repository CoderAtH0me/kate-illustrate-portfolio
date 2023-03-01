const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");
let homeNav = document.querySelector("#home-nav");

homeNav.onclick = () => {
  setTimeout(() => {
    homeNav.classList.add("active");
  }, 900);
};

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navList.classList.remove("open");
  homeNav.classList.remove("active");
};
