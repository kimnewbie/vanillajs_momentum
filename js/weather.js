const API_KEY = '9cd27d271dde28b567a12ced206b0d3a';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const degTag = `&deg;C`
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
        .then((data) => {
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            // 날씨에 따라 아이콘을 변경하고 싶다
            // main : [ Rain, Snow, Clouds, Wind ] 
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        })
}

function onGeoError() {
    alert('Can\'t find you. No weather for you.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// https://openweathermap.org/api
// 9cd27d271dde28b567a12ced206b0d3a
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}