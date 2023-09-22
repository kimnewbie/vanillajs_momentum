const API_KEY = '9cd27d271dde28b567a12ced206b0d3a';



function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in ", lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    console.log(url)
}

function onGeoError() {
    alert('Can\'t find you. No weather for you.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// https://openweathermap.org/api
// 9cd27d271dde28b567a12ced206b0d3a
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}