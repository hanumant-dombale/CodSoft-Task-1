const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

// JavaScript for Mobile Menu Toggle
mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navList.classList.toggle("active");
});
