const hambButton = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

function toggleButton() {
    navList.classList.toggle('show');
}

hambButton.addEventListener('click', toggleButton);

const element = document.querySelector('.hero-name-animate');
element.classList.add('animate__animated', 'animate__shakeX');

document.documentElement.style.setProperty('--animate-duration', '1s');

