const hambButton = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

function toggleButton() {
    navList.classList.toggle('show');
}

hambButton.addEventListener('click', toggleButton);