/* results */
const arrayImg = [
    './assets/1.webp',
    './assets/2.webp',
    './assets/3.webp',
    './assets/4.webp',
    './assets/5.webp'
]


const arrayDescription = [
    'The windy house',
    'Wonderful House',
    'The time travel',
    'S.Olcese dream',
    'Bassi student residence'
]


const arrayValue = [
    0,
    1,
    2,
    3,
    4,
    5
]

function cards() {
    const cardsRow = document.querySelector('.cardsRow')

    for (let index = 0; index < 10; index++) {
        /* colCard */
        const colCard = document.createElement('div')
        colCard.classList.add('col', 'flex-column','d-flex', 'justify-content-center', 'align-items-center')
        cardsRow.append(colCard)


        /* contenitore card */
        const cardBnb = document.createElement('div')
        cardBnb.classList.add('cardBnb','w-100', 'pb-5')
        colCard.append(cardBnb)

        /* immagine del luogo */
        const figureCard = document.createElement('figure')
        figureCard.classList.add('figureCard')
        const imgPlace = document.createElement('img')
        imgPlace.src = arrayImg[Math.floor(Math.random() * arrayImg.length)]
        imgPlace.classList.add('rounded')
        figureCard.appendChild(imgPlace)

        /* evaluation */

        const containerEvaluation = document.createElement('div')
        containerEvaluation.classList.add('d-flex', 'align-items-center', 'gap-2')

        const icon = document.createElement('div')
        icon.innerHTML = '<ion-icon name="star"></ion-icon>'
        icon.classList.add('d-flex', 'justify-content-center', 'align-items-center')
        const value = document.createElement('p')
        value.innerHTML = '<span>' + arrayValue[Math.floor(Math.random() * arrayValue.length)] + '</span>' + ' 4 ratings'
        value.classList.add('m-0')

        containerEvaluation.append(icon, value)


        /* parte info */
        const apartament = document.createElement('p')
        apartament.classList.add('mb-0')
        apartament.textContent = 'Apartment Genova'
        const description = document.createElement('p')
        description.textContent = arrayDescription[Math.floor(Math.random() * arrayDescription.length)]
        description.classList.add('m-0')

        /* appendo tutti gli elementi */
        cardBnb.append(figureCard, containerEvaluation, apartament, description)


    }
} cards()


const header = document.querySelector('header');
const hero = document.getElementById('hero');
const observered = document.querySelector('.observed'); 
const navbar = document.querySelector('ul.navbar-nav')
const searchbar = document.querySelector('.searchbar');
const searchbarInputs = document.querySelectorAll('.searchbar input');
const searchbarButton = document.querySelector('.searchbar__button');


window.addEventListener('scroll', ()=> {
    if(this.innerWidth >= 1024) {
        searchbarAnimation();

        if (this.scrollY >= (hero.clientHeight)) {
            changeHeader(true)
        } else {
            changeHeader(false)
        }
    }
})


const searchbarAnimation = () => {

    if(this.scrollY > header.clientHeight) {
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
            link.classList.remove('text-white')
            link.classList.add('text-secondary')
        })
    } else {
        header.classList.remove('bg-white', 'shadow-sm');
        logo.src = './assets/logo.png';
        menu.forEach(link => {
            link.classList.add('text-white')
            link.classList.remove('text-secondary')
        })
    }
}
