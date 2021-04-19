const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.primary-navigation');
console.log(menuToggle);

function toggleMenu() {
  mobileMenu.classList.toggle('show');
}

menuToggle.addEventListener('click', toggleMenu);