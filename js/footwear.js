function decideFootwear() {
    //Input - chosen weather value
    let footwear = ''
    let weatherValue = document.getElementById("weather-select").value
    //Processing - Given the weather, what shoes should you wear
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
    //Output - Tell the user what shoes they should wear
    document.getElementById('output').innerHTML = footwear;
}