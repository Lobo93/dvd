let previousTime = 0
let dt = 0
const dvd = {
	element: document.querySelector('svg'),
	x: Math.random() * window.innerWidth,
	y: Math.random() * window.innerWidth,
	minX: 110,
	minY: 50,
	maxX: window.innerWidth - 110,
	maxY: window.innerHeight - 50,
	speed: 120,
	directionX: Math.random() < 0.5 ? -1: 1,
	directionY: Math.random() < 0.5 ? -1: 1,
}

window.addEventListener('resize', () => {
	dvd.maxX = window.innerWidth - 110
	dvd.maxY = window.innerHeight - 50
})

function randomColor() {
	let hue = Math.floor(Math.random() * 361)
	let saturation = Math.floor(Math.random() * 76) + 25
	let lightness = Math.floor(Math.random() * 51) + 30
	return `hsl(${hue}deg ${saturation}% ${lightness}%)`
}

function frame(currentTime) {
	dt = (currentTime - previousTime) * 0.001
	previousTime = currentTime

	dvd.x += dvd.speed * dt * dvd.directionX
	dvd.y += dvd.speed * dt * dvd.directionY

	if (dvd.x > dvd.maxX) {
		dvd.x = dvd.maxX
		dvd.directionX = -dvd.directionX
		dvd.element.style.setProperty('--color', randomColor())
	}

	if (dvd.x < dvd.minX) {
		dvd.x = dvd.minX
		dvd.directionX = -dvd.directionX
		dvd.element.style.setProperty('--color', randomColor())
	}

	if (dvd.y > dvd.maxY) {
		dvd.y = dvd.maxY
		dvd.directionY = -dvd.directionY
		dvd.element.style.setProperty('--color', randomColor())
	}

	if (dvd.y < dvd.minY) {
		dvd.y = dvd.minY
		dvd.directionY = -dvd.directionY
		dvd.element.style.setProperty('--color', randomColor())
	}

	dvd.element.style.left = `${dvd.x}px`
	dvd.element.style.top = `${dvd.y}px`

	window.requestAnimationFrame(frame)
}

dvd.element.style.setProperty('--color', randomColor())
window.requestAnimationFrame(frame)