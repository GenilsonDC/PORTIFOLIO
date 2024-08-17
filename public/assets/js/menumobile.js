// JavaScript para alternar o menu
document.getElementById('menu-icon').addEventListener('click', function () {
  this.classList.toggle('open');
  document.getElementById('menu').classList.toggle('open');
});
