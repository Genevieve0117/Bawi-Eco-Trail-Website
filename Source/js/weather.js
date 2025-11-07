// Weather API configuration
const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';
const LOCATION = { lat: 13.8797, lon: 121.2057 }; // Bawi Eco Trail coordinates

// Function to get the next Sunday
function getNextSunday() {
    const today = new Date();
    const day = today.getDay();
    const diff = day === 0 ? 0 : 7 - day; // If today is Sunday, start today
    return new Date(today.setDate(today.getDate() + diff));
}

// Function to format date
function formatDate(date) {
    return date.toLocaleDateString('en-US', { 
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    });
}

// Function to get weather icon
function getWeatherIcon(precipitation, maxTemp) {
    if (precipitation > 5) return '🌧️';
    if (precipitation > 0) return '🌦️';
    if (maxTemp > 30) return '☀️';
    return '⛅';
}

// Function to create a weather card
function createWeatherCard(date, maxTemp, minTemp, precipitation, index) {
    const formattedDate = formatDate(date);
    const weatherIcon = getWeatherIcon(precipitation, maxTemp);
    const cardClass = index >= 5 ? 'weather-card weekend' : 'weather-card';
    
    return `
        <div class="${cardClass}">
            <h3>${formattedDate}</h3>
            <div class="weather-icon">
                <span style="font-size: 2.5rem;">${weatherIcon}</span>
            </div>
            <div class="weather-info">
                <p class="temperature">High: ${Math.round(maxTemp)}°C</p>
                <p class="temperature">Low: ${Math.round(minTemp)}°C</p>
                <p class="precipitation">Rain: ${precipitation}mm</p>
            </div>
        </div>
    `;
}

// Function to fetch and display weather data
async function displayWeatherForecast() {
    try {
        const response = await fetch(
            `${WEATHER_API_URL}?latitude=${LOCATION.lat}&longitude=${LOCATION.lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`
        );
        const data = await response.json();
        
        const weatherContainer = document.getElementById('weather-info');
        const forecasts = data.daily;
        const nextSunday = getNextSunday();
        
        let weatherCards = '';
        // Reorder the days (0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat)
        const order = [0, 1, 2, 3, 5, 4, 6]; // Swapped Thursday(4) and Friday(5)
        
        for(let i = 0; i < 7; i++) {
            const dayIndex = order[i];
            const forecastDate = new Date(nextSunday);
            forecastDate.setDate(nextSunday.getDate() + dayIndex);
            weatherCards += createWeatherCard(
                forecastDate,
                forecasts.temperature_2m_max[dayIndex],
                forecasts.temperature_2m_min[dayIndex],
                forecasts.precipitation_sum[dayIndex],
                dayIndex
            );
        }
            
        weatherContainer.innerHTML = weatherCards;
        weatherContainer.className = 'with-weekends';
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerHTML = 
            '<p class="error">Unable to load weather information at this time.</p>';
    }
}

// Initialize weather display when the DOM is loaded
document.addEventListener('DOMContentLoaded', displayWeatherForecast);