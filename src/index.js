// Import the necessary modules
const express = require('express'); // Express framework for building the web server
const axios = require('axios'); // Axios for making HTTP requests to the OpenWeatherMap API
const dotenv = require('dotenv'); // dotenv to load environment variables from a .env file
const cors = require('cors'); // CORS middleware to enable Cross-Origin Resource Sharing
const path = require('path'); // Path module to handle and transform file paths

// Load environment variables from a .env file into process.env
dotenv.config();

// Create an instance of the Express application
const app = express();

// Define the port on which the server will listen for requests
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, 'client')));

// Parse incoming JSON requests and populate the req.body property
app.use(express.json());

// Define an endpoint to get weather data for a specified city
app.get('/api/weather', async (req, res) => {
  // Extract the 'city' query parameter from the request URL
  const { city } = req.query;

  // Get the OpenWeatherMap API key from environment variables
  const apiKey = process.env.OPENWEATHER_API_KEY;
  
  try {
    // Make a GET request to the OpenWeatherMap API to fetch weather data for the specified city
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    // Send the received weather data as a JSON response
    res.json(response.data);
  } catch (error) {
    // Send a 500 Internal Server Error response with an error message if the request fails
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});