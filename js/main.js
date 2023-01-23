// Burger

const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
	body.classList.toggle('stop-scroll');
	burger?.classList.toggle('burger--active');
	nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
	el.addEventListener('click', () => {
   body.classList.remove('stop-scroll');
	burger?.classList.remove('burger--active');
	nav?.classList.remove('nav--visible');
	});
});

// Scroll smooth

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID ).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}

// Header fixed

const hero = document.querySelector('.hero');
const heroHeight = hero.offsetHeight;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if(scrollDistance >= heroHeight + headerHeight) {
		header.classList.add('header-fixed');
		hero.style.marginTop = '${headerHeight}px';
	} else {
		header.classList.remove('header-fixed');
		hero.style.marginTop = null;
	}
});

// Swiper

const wrapper = document.querySelector('.portfolio__container')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
	pressed = true
	startX = e.clientX
	this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
	pressed = false
})

window.addEventListener('mouseup', function (e) {
	pressed = false
	wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
	if(!pressed) {
   return
	}

	this.scrollLeft += startX - e.clientX
})