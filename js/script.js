const header = document.querySelector('header');
const hero = document.getElementById('hero');
const navbar = document.querySelector('ul.navbar-nav')
const searchbar = document.querySelector('.searchbar');
const searchbarInputs = document.querySelectorAll('.searchbar input');
const searchbarButton = document.querySelector('.searchbar__button');


window.addEventListener('scroll', () => {
    if (this.innerWidth >= 1024) {
        searchbarAnimation();

        if (this.scrollY >= (hero.clientHeight)) {
            changeHeader(true)
        } else {
            changeHeader(false)
        }
    }
})


const searchbarAnimation = () => {

    if (this.scrollY > header.clientHeight) {
        navbar.classList.add('scale-0');
        searchbarInputs.forEach(input => {
            input.classList.add('d-none')
        })
        searchbar.classList.add('searchbar--small', 'shadow');
        searchbarButton.classList.add('searchbar__button--small');
    }
    else {
        navbar.classList.remove('scale-0');
        searchbarInputs.forEach(input => {
            input.classList.remove('d-none')
        })
        searchbar.classList.remove('searchbar--small', 'shadow');
        searchbarButton.classList.remove('searchbar__button--small');
    }
}


function changeHeader(bool) {
    let isVisible = bool;
    const logo = document.querySelector('.logo--white');
    const menu = document.querySelectorAll('.settings-nav a.nav-link');

    if (isVisible) {
        header.classList.add('bg-white', 'shadow-sm');
        logo.src = './assets/logo-pink.png';
        menu.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-secondary');
        })
    } else {
        header.classList.remove('bg-white', 'shadow-sm');
        logo.src = './assets/logo.png';
        menu.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-secondary');
        })
    }
}