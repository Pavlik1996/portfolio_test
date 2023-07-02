const close = document.querySelector('.close-menu-burger')
const open = document.querySelector('.open-menu-burger')
const menu = document.querySelector('.menu-nav')
const main = document.querySelector('.main')
const container = document.querySelector('.container')

const toggleBurgerMenu = () => {
	menu.classList.toggle('active')
	main.classList.toggle('active')
	container.classList.toggle('active')
}

close.addEventListener('click', toggleBurgerMenu)
open.addEventListener('click', toggleBurgerMenu)

