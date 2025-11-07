// This file fetches and displays the current weather conditions for the Bawi Eco Trail using Open-Meteo API.

const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=13.8797&longitude=121.2057&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,showers,wind_speed_10m';

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-info');
    if (!weatherContainer) return;

    const current = data.current;
    if (!current) {
        weatherContainer.innerHTML = `<p>Weather data is unavailable.</p>`;
        return;
    }

    const temperature = current.temperature_2m;
    const apparentTemperature = current.apparent_temperature;
    const humidity = current.relative_humidity_2m;
    const windSpeed = current.wind_speed_10m;
    const rain = current.rain;
    const showers = current.showers;
    const isDay = current.is_day ? "Day" : "Night";

    weatherContainer.innerHTML = `
        <h2>Current Weather</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Feels Like: ${apparentTemperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
        <p>Rain: ${rain} mm</p>
        <p>Showers: ${showers} mm</p>
        <p>Time: ${isDay}</p>
    `;
}

// Call the fetchWeather function when the page loads
document.addEventListener('DOMContentLoaded', fetchWeather);