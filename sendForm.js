//лучше всего для такого рода сайта, есть библиотека EmailJs
// Для своего портфолио именно так и делал

document.addEventListener('DOMContentLoaded', function() {
	let form = document.querySelector('#send-form')

	form.addEventListener('submit', function(event) {
		event.preventDefault()

		let formData = new FormData(form)

		fetch('address', {
			method: 'POST',
			body: formData
		})
			.then(response => {
				if (response.ok) {
					return response.text()
				} else {
					throw new Error('Ошибка при отправке формы')
				}
			})
			.then(result => {
				console.log(result)
			})
			.catch(error => {
				console.error(error)
			})
	})
})
