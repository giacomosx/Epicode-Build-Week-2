const getCityName = () => {
    let cityName = localStorage.getItem('cityName');
    const spanCityNameContainer =  document.querySelector('.cityName');
   
    if (cityName.innerHTML === 'null') {
        spanCityNameContainer.innerHTML = 'Genova';
    } else {
        spanCityNameContainer.innerHTML = '&#8901; ' + cityName;
        localStorage.clear();
    }
}

getCityName();