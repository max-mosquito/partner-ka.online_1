const burger = document.getElementById('burger');
const headerMenu = document.getElementById('header_menu');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');
})

//form_popup------------------------
const req = document.querySelectorAll('.req')
const formPopup = document.querySelector('.form_popup')
const closeFormPopup = document.querySelector('.close_form_popup')
const form = document.querySelector('.popup_form')
const popupConfirm = document.querySelector('.popup_confirm')
const closeConfirmPopup = document.querySelector('.close_confirm_popup')

req.forEach(item => {
   item.addEventListener('click', () => {
      formPopup.style.display = 'flex'
      document.body.classList.add('lock')
   })
})

closeFormPopup.addEventListener('click', () => {
   formPopup.style.display = 'none'
   document.body.classList.remove('lock')
})

form.addEventListener('submit', (e) => {
   e.preventDefault()
   formPopup.style.display = 'none'
   form.reset()
   popupConfirm.style.display = 'flex'
})

closeConfirmPopup.addEventListener('click', () => {
   popupConfirm.style.display = 'none'
   document.body.classList.remove('lock')
})
