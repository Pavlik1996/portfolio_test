const close = document.querySelector('.close-menu-burger')
const open = document.querySelector('.open-menu-burger')
const menu = document.querySelector('.menu')
const main = document.querySelector('.main')
const container = document.querySelector('.container')

const toggleBurgerMenu = () => {
	menu.classList.toggle('active')
	main.classList.toggle('active')
	container.classList.toggle('active')
}

close.addEventListener('click', toggleBurgerMenu)
open.addEventListener('click', toggleBurgerMenu)

const blocks = document.querySelectorAll('.scrollable')
let currentBlockIndex = 0

window.addEventListener('wheel', event => {
	const delta = Math.sign(event.deltaY)
	currentBlockIndex += delta
	if (currentBlockIndex < 0) {
		currentBlockIndex = 0
	} else if (currentBlockIndex >= blocks.length) {
		currentBlockIndex = blocks.length - 1
	}
	blocks[currentBlockIndex].scrollIntoView({ behavior: 'smooth' })
	event.preventDefault()
})
