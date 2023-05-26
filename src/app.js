// function navbar list used for mobile resolutions

const hambButton = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

function toggleButton() {
    navList.classList.toggle('show');
}

hambButton.addEventListener('click', toggleButton);

// css animation for .hero-name-animate

const element = document.querySelector('.hero-name-animate');
element.classList.add('animate__animated', 'animate__flipInX');

document.documentElement.style.setProperty('--animate-duration', '5s');

