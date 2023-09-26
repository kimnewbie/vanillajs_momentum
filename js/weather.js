const API_KEY = '9cd27d271dde28b567a12ced206b0d3a';
const weatherIcon = {
    '01': 'fas fa-sun',
    '02': 'fas fa-cloud-sun',
    '03': 'fas fa-cloud',
    '04': 'fas fa-cloud-meatball',
    '09': 'fas fa-cloud-sun-rain',
    '10': 'fas fa-cloud-showers-heavy',
    '11': 'fas fa-poo-storm',
    '13': 'fas fa-snowflake',
    '50': 'fas fa-smog',
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
        .then((data) => {
            const apiIcon = (data.weather[0].icon).substr(0, 2);
            const createIcon = document.createElement("i")
            const temp = ` ${data.main.temp} °C`
            createIcon.classList = weatherIcon[apiIcon];
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.append(createIcon);
            weather.append(temp)
            city.innerText = data.name;
        })
}

function onGeoError() {
    alert('Can\'t find you. No weather for you.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// https://openweathermap.org/api
// 9cd27d271dde28b567a12ced206b0d3a
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}