const burger = document.getElementById('burger');
const headerMenu = document.getElementById('header_menu');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');
})

