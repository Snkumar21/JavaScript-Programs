document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value.trim(); // Get user input

    if (city) {
        fetchWeatherData(city); // Call fetch function with city name
    } else {
        alert('Please enter a city name'); // Show error if input is empty
    }
});

// Function to fetch weather data
async function fetchWeatherData(city) {
    const apiKey = '879c719c673c15c2846471e68b893184';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl); // Fetch data from API
        const data = await response.json(); // Convert response to JSON

        if (data.cod !== 200) {
            throw new Error(data.message); // Handle API errors (e.g., city not found)
        }

        console.log('Weather data:', data); // Log data to console

        // Extract relevant weather data
        const cityName = data.name;
        const temperature = data.main.temp;
        const condition = data.weather[0].description;
        const humidity = data.main.humidity;

        // Update the DOM with weather data
        document.getElementById('city-name').textContent = `City: ${cityName}`;
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('weather-description').textContent = `Condition: ${condition}, Humidity: ${humidity}%`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('city-name').textContent = "Error: City not found";
        document.getElementById('temperature').textContent = "";
        document.getElementById('weather-description').textContent = "";
    }
}
