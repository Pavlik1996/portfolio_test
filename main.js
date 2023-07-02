const close = document.querySelector('.nav_menu_button_close-burger')
const open = document.querySelector('.main_open-menu-burger-button')
const menu = document.querySelector('.nav_menu')
const main = document.querySelector('.main')
const container = document.querySelector('.main_container')
const linkInBurger = document.querySelector('.body_nav_menu_ul_top-menu')

const toggleBurgerMenu = () => {
	menu.classList.toggle('active')
	main.classList.toggle('active')
	container.classList.toggle('active')
}

linkInBurger.addEventListener('click', toggleBurgerMenu)
close.addEventListener('click', toggleBurgerMenu)
open.addEventListener('click', toggleBurgerMenu)

