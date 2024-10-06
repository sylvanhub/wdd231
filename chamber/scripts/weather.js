// HTML variables
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const city = document.querySelector("#city");
const weatherIcon = document.querySelector("#weatherIcon");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const forecastContainer = document.querySelector("#forecast");

// API variables
const key = "ee4a2874c3ab4423378b5b65a23e8b56"; // Your OpenWeatherMap API key
const lat = 7.37599198723924; // Latitude
const lon = 3.9373109397276584; // Longitude
const cnt = "24"; // Number of forecast points

// Fetch city name using Reverse Geocoding API
async function getCityName() {
    const reverseGeoUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${key}`;
    
    try {
        const response = await fetch(reverseGeoUrl);
        if (!response.ok) throw new Error("Failed to fetch city name");
        
        const geoData = await response.json();
        if (geoData.length > 0) {
            const { name } = geoData[0];
            city.innerHTML = name; // Set the city name
            fetchWeatherData(lat, lon); // Fetch weather data using coordinates
        } else {
            throw new Error("City name not found");
        }
    } catch (error) {
        console.log("Error fetching city name:", error);
    }
}

// Fetch weather and forecast data
async function fetchWeatherData(lat, lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${key}&units=metric`;

    try {
        // Fetch current weather
        const response = await fetch(weatherUrl);
        if (!response.ok) throw new Error("Error fetching weather data");
        
        const data = await response.json();
        displayWeather(data);
        console.log(data);

        // Fetch weather forecast
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) throw new Error("Error fetching forecast data");
        
        const forecastData = await forecastResponse.json();
        console.log(forecastData);
        displayForecast(forecastData);
        
    } catch (error) {
        console.log(error);
    }
}

// Display current weather
function displayWeather(data) {
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("alt", "weatherIcon");
    temperature.innerHTML = `${data.main.temp}&deg;C`;
    description.innerHTML = data.weather[0].description;
    high.innerHTML = `High: ${data.main.temp_max}&deg;C`;
    low.innerHTML = `Low: ${data.main.temp_min}&deg;C`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    sunrise.innerHTML = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    sunset.innerHTML = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

// Display 3-day forecast
function displayForecast(data) {
    const forecastList = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
    
    forecastList.forEach((forecast, i) => {
        const date = new Date(forecast.dt * 1000);
        const dayName = i === 0 ? 'Today' : date.toLocaleDateString(undefined, { weekday: 'long' });
        const temp = Math.round(forecast.main.temp);
        
        if (i === 0) {
            document.querySelector("#today").innerHTML = `Today: <strong>${temp}°C</strong>`;
        } else if (i === 1) {
            document.querySelector("#day1").innerHTML = `${dayName}: <strong>${temp}°C</strong>`;
        } else if (i === 2) {
            document.querySelector("#day2").innerHTML = `${dayName}: <strong>${temp}°C</strong>`;
        }
    });
}

// Call the function to get the city name based on coordinates
getCityName();
