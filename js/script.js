const searchbarAnimation = () => {
    window.addEventListener('scroll', ()=> {
        if(this.scrollY > document.querySelector('header').clientHeight) {
            document.querySelector('ul.navbar-nav').classList.add('scale-0');
            document.querySelectorAll('.searchbar input').forEach(input => {
                input.classList.add('d-none')
            })
            document.querySelector('.searchbar').classList.add('searchbar--small');
            document.querySelector('.searchbar__button').classList.add('searchbar__button--small');
        }
        else {
            document.querySelector('ul.navbar-nav').classList.remove('scale-0');
            document.querySelectorAll('.searchbar input').forEach(input => {
                input.classList.remove('d-none')
            })
    
            document.querySelector('.searchbar').classList.remove('searchbar--small');
            document.querySelector('.searchbar__button').classList.remove('searchbar__button--small');     
        }
    })
}

if(this.innerWidth >= 1024) {
    document.querySelector('header').classList.add('sticky-top','top-0');
    searchbarAnimation();
} else {
    document.querySelector('header').classList.remove('sticky-top','top-0');
}


