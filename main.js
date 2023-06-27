let burger = document.querySelector('.menu-burger__header'),
	menu = document.querySelector('.menu')

let close = document.querySelector('.close')

burger.addEventListener('click', () => {
	menu.classList.toggle('active')
})

close.addEventListener('click', () => {
	menu.classList.toggle('active')
})
