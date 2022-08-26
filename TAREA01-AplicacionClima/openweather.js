const API_KEY = '5a5641103a90b10879110a25bc67887f';

const URI = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=-32.4825&lon=-58.2372&appid=${API_KEY}`;

const peticion = fetch(URI);

peticion
    .then(response => response.json())
    .then(data => {
        const temperaturaActual = document.getElementById('temperatura');
        temperaturaActual.innerHTML = data.main.temp + ' °C';
        
        const humedad = document.getElementById('humedad');
        humedad.innerHTML += data.main.humidity;
        
        const tempMin = document.getElementById('minTemp');
        tempMin.innerHTML = data.main.temp_min;
        
        const tempMax = document.getElementById('maxTemp');
        tempMax.innerHTML = data.main.temp_max;
        
        
        console.log(data)
    })
    .catch( console.warn);