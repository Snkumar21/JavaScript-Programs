// Task 1: Simulate Geolocation Data
function getUserLocation() {
    // Simulated location data for New York
    return {
        latitude: 40.7128,
        longitude: -74.0060
    };
}

// Task 2: Fetch Simulated Weather Data
function fetchWeatherData(latitude, longitude) {
    const weatherConditions = ["Sunny", "Cloudy", "Rainy", "Snowy"];
    const forecast = [];
    const currentDate = new Date();

    for (let i = 0; i < 3; i++) {
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Months are 0-based
        const year = currentDate.getFullYear();

        forecast.push({
            date: `${month}/${day}/${year}`,
            temperature: (Math.random() * 45 - 10).toFixed(1), // Random temp -10°C to 35°C
            condition: weatherConditions[Math.floor(Math.random() * weatherConditions.length)], 
            humidity: Math.floor(Math.random() * 100), // Humidity between 0-100%
            latitude,
            longitude
        });

        currentDate.setDate(currentDate.getDate() + 1); // Move to next day
    }

    return forecast;
}

// Task 3: Call the Function with Simulated Location
const location = getUserLocation();
const forecastData = fetchWeatherData(location.latitude, location.longitude);

// Task 4: Display Weather Data for the Simulated Location
console.log("Weather Forecast for Simulated Location:");
console.log(forecastData);