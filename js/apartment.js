const getCityName = () => {
    let cityName = localStorage.getItem('cityName') !== null ? localStorage.getItem('cityName') : 'Genova';
    const spanCityNameContainer =  document.querySelector('.cityName');
   
    localStorage.clear()
    
    return spanCityNameContainer.innerHTML = '&#8901;' + cityName;
}

getCityName();