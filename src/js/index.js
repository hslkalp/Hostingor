const menuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});
