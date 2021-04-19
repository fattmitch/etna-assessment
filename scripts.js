const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.primary-navigation');
console.log(menuToggle);

function toggleMenu() {
  mobileMenu.classList.toggle('show');
  // if (mobileMenu.style.display === "block") {
  //   mobileMenu.style.display = "none";
  // } else {
  //   mobileMenu.style.display = "block";
  // }
}

menuToggle.addEventListener('click', toggleMenu);