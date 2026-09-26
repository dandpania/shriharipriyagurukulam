const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mainNav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
