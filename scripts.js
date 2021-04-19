const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.primary-navigation');

function toggleMenu() {
  mobileMenu.classList.toggle('show');
}

menuToggle.addEventListener('click', toggleMenu);