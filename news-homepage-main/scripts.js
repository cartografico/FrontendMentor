const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle del menú al hacer clic en el botón
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});



