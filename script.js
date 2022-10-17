const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menu-icon");
const portfolio = document.querySelector("#portfolio");
const aboutMe = document.querySelector("#about-me");
const contactMe = document.querySelector("#contact-me");

menuIcon.onclick = function () {
  mobileMenu.classList.toggle("open-mobileMenu");
};
