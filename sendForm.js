//лучше всего для такого рода сайта, есть библиотека EmailJs
// Для своего портфолио именно так и делал

document.addEventListener('DOMContentLoaded', function () {
	let form = document.querySelector('#send-form')

	form.addEventListener('submit', function (event) {
		event.preventDefault()
		// отменяем стандартное поведение формы

		// Собираем данные из формы
		let formData = new FormData(form)

		// Выводим данные в консоль
		for (let pair of formData.entries()) {
			console.log(pair[0] + ': ' + pair[1])
		}
	})
})
