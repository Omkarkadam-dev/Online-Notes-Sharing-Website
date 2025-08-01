const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('admin-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
