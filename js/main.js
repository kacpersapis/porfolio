let circularProgress = document.querySelector('.circular-progress'),
	progressValue = document.querySelector('.progress-value'),
	circularProgressTwo = document.querySelector('.two'),
	progressValueTwo = document.querySelector('.two1'),
	circularProgressThree = document.querySelector('.three-1'),
	progressValueThree = document.querySelector('.three-2'),
	circularProgressFour = document.querySelector('.four-1'),
	progressValueFour = document.querySelector('.four-2'),
	circularProgressFive = document.querySelector('.five-1'),
	progressValueFive = document.querySelector('.five-2'),
	circularProgressSix = document.querySelector('.six-1'),
	progressValueSix = document.querySelector('.six-2'),
	circularProgressSeven = document.querySelector('.seven-1'),
	progressValueSeven = document.querySelector('.seven-2'),
	circularProgressEight = document.querySelector('.eight-1'),
	progressValueEight = document.querySelector('.eight-2')

const footerYear = document.querySelector('.year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

function updateProgressBar(progressStartValue, progressEndValue, speed, progressValue, circularProgress) {
	let progress = setInterval(() => {
		progressStartValue++
		progressValue.textContent = `${progressStartValue}%`
		circularProgress.style.background = `conic-gradient(#5baeb4 ${progressStartValue * 3.6}deg, #23272d 0deg)`

		if (progressStartValue === progressEndValue) {
			clearInterval(progress)
		}
	}, speed)
}

function handleIntersection(entry, progressStartValue, progressEndValue, speed, progressValue, circularProgress) {
	if (entry.isIntersecting) {
		updateProgressBar(progressStartValue, progressEndValue, speed, progressValue, circularProgress)
	}
}

const observerOptions = { threshold: 0.5 }

new IntersectionObserver(
	entries => handleIntersection(entries[0], 0, 90, 50, progressValue, circularProgress),
	observerOptions
).observe(circularProgress)
new IntersectionObserver(
	entries => handleIntersection(entries[0], 0, 90, 50, progressValueTwo, circularProgressTwo),
	observerOptions
).observe(circularProgressTwo)
new IntersectionObserver(
	entries => handleIntersection(entries[0], 0, 75, 50, progressValueThree, circularProgressThree),
	observerOptions
).observe(circularProgressThree)
new IntersectionObserver(
	entries => handleIntersection(entries[0], 0, 50, 50, progressValueFour, circularProgressFour),
	observerOptions
).observe(circularProgressFour)
new IntersectionObserver(
	entries => handleIntersection(entries[0], 0, 70, 50, progressValueFive, circularProgressFive),
	observerOptions
).observe(circularProgressFive)
new IntersectionObserver(
	entries => handleIntersection(entries[0], 0, 65, 50, progressValueSix, circularProgressSix),
	observerOptions
).observe(circularProgressSix)
new IntersectionObserver(
	entries => handleIntersection(entries[0], 0, 70, 50, progressValueSeven, circularProgressSeven),
	observerOptions
).observe(circularProgressSeven)
new IntersectionObserver(
	entries => handleIntersection(entries[0], 0, 80, 50, progressValueEight, circularProgressEight),
	observerOptions
).observe(circularProgressEight)

// Kontynuacja Twojego kodu
var tablinks = document.getElementsByClassName('tab-links')
var tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname) {
	for (tablink of tablinks) {
		tablink.classList.remove('active-link')
	}
	for (tabcontent of tabcontents) {
		tabcontent.classList.remove('active-tab')
	}
	event.currentTarget.classList.add('active-link')
	document.getElementById(tabname).classList.add('active-tab')
}

var typed = new Typed('.multiple-text', {
	strings: ['Fronted Developer', 'UX/UI Designer'],
	typeSpeed: 200,
	backSpeed: 100,
	backDelay: 1000,
	loop: true,
})

navbar = document.querySelector('.header').querySelectorAll('a')
navbar.forEach(element => {
	element.addEventListener('click', function () {
		navbar.forEach(nav => nav.classList.remove('active'))
		this.classList.add('active')
	})
})

// contact
function sendMail() {
	var params = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		message: document.getElementById('message').value,
	}
	const serviceID = 'service_6uwaey4'
	const templateID = 'template_wd3hfui'

	emailjs
		.send(serviceID, templateID, params)
		.then(res => {
			document.getElementById('name').value = ''
			document.getElementById('email').value = ''
			document.getElementById('message').value = ''
			console.log(res)
			alert('Your message sent successfully')
		})
		.catch(err => console.log(err))
}
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('active');
    navbar.classList.toggle('active');
}
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(navLink) {
	navLink.addEventListener('click', function() {
		closeMenu();
	});
});

function closeMenu() {
	const navbar = document.querySelector('.navbar');
	const burgerMenu = document.querySelector('.burger-menu');
	burgerMenu.classList.remove('active');
	navbar.classList.remove('active');
}