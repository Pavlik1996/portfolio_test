document.addEventListener('DOMContentLoaded', () => {
	let form = document.querySelector('#send-form')
	let nameInput = form.querySelector('input[name="name"]')
	let emailInput = form.querySelector('input[name="email"]')
	let messageInput = form.querySelector('textarea[name="message"]')

	form.addEventListener('submit', function (event) {
		event.preventDefault()

		let nameValue = nameInput.value.trim()
		let emailValue = emailInput.value.trim()
		let messageValue = messageInput.value.trim()

		let errors = {}

		if (nameValue === '') {
			errors.name = 'Введите ваше имя'
		}

		if (!isValidEmail(emailValue)) {
			errors.email = 'Введите корректный email'
		}

		if (messageValue === '') {
			errors.message = 'Введите ваше сообщение'
		}

		// Отображение ошибок
		nameInput.classList.remove('error')
		emailInput.classList.remove('error')
		messageInput.classList.remove('error')

		for (let fieldName in errors) {
			let error = errors[fieldName]
			let input = form.querySelector('[name="' + fieldName + '"]')
			let errorBox = input.parentElement.querySelector('.error-message')

			input.classList.add('error')

			if (!errorBox) {
				errorBox = document.createElement('div')
				errorBox.classList.add('error-message')
				input.parentElement.appendChild(errorBox)
			}

			errorBox.textContent = error
		}
	})

	function isValidEmail(email) {
		let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}
})
