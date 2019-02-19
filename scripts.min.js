document.addEventListener('DOMContentLoaded', function() {
	let controls = document.querySelectorAll('.js-control')

	controls.forEach(control => control.addEventListener('click', (e) => {
		let optionsId = control.dataset.for
		
		let options = document.getElementById(optionsId)
		
		document.querySelectorAll('.filter__options.active').forEach(item => {
			if (item !== options) item.classList.remove('active')
		})
		options.classList.toggle('active')
	}))

	// VALUE

	document.querySelectorAll('.filter-group').forEach(filter => {

		let selector = filter.querySelector('.options')
		let control = filter.querySelector('.filter__control')
	
		let options = selector.querySelectorAll('.options-item')

		options.forEach(option => option.addEventListener('click', (e) => {
			let value = option.innerHTML
			control.innerHTML = value

			selector.classList.toggle('active')

			// TODO: Value to POST
		}))
	})

	// SUBMIT HANDLE

	let filterForm = document.querySelector('.filter')

	filterForm.addEventListener('submit', (e) => {
		e.preventDefault()
		
		document.location.href = '/search.html'
		// TODO: Ajax results
	})
})