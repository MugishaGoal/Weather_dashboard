async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        try {
            const response = await fetch(`http://localhost:3000/api/weather?city=${city}`);

            const weatherData = await response.json();
            displayWeather(weatherData);
        } catch (error) {
            displayWeatherError("Error displaying data");
        }
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    if (data && data.weather) {
        weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
    }
}

function displayWeatherError(error) {
    const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>${error}</p>`;
}
