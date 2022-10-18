const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menu-icon");

menuIcon.onclick = function () {
  mobileMenu.classList.toggle("open-mobileMenu");
};

document.querySelectorAll(".menu").forEach((n) =>
  n.addEventListener("click", () => {
    mobileMenu.classList.remove("open-mobileMenu");
  })
);
