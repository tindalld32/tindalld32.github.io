function decideFootwear() {
    let footwear = ''
    let weatherValue = document.getElementById("weather-select").value
    if (weatherValue == 'hot'){
        footwear = 'Sandals';
    }
    else if (weatherValue == 'rain') {
        footwear = 'Galoshes'
    }
    else if (weatherValue == 'snow') {
        footwear = 'Boots'
    }
    else {
        footwear = 'Shoes'
    }
    document.getElementById('output').innerHTML = footwear;
}