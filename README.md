Weather Dashboard
This project is a simple weather dashboard application built using Node.js for the backend and plain HTML, CSS, and JavaScript for the frontend. The application fetches weather data from the OpenWeatherMap API and displays it to the user based on their input city.

Features
Fetches real-time weather data for any city using the OpenWeatherMap API.
Displays weather information including temperature, humidity, wind speed, and weather description.
Simple and responsive UI.
Technologies Used
Node.js
Express.js
Axios
dotenv
CORS
HTML
CSS
JavaScript
Setup and Installation
Prerequisites
Node.js installed on your machine.
An API key from OpenWeatherMap. You can get one by signing up on their website.
Steps
Clone the repository

bash
Copy code
git clone https://github.com/MugishaGoal/weather-dashboard.git
cd weather-dashboard
Install dependencies

bash
Copy code
npm install
Create a .env file in the root directory and add your OpenWeatherMap API key

env
Copy code
OPENWEATHER_API_KEY=your_api_key_here
Run the server

bash
Copy code
node index.js
Open index.html

You can use a live server extension in VS Code or any other method to serve the index.html file and test the application in your browser.

Project Structure
bash
Copy code
weather-dashboard/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
|__ src
|   |__index.js
|
├── .env
├── server.js
├── package.json
└── README.md
client/: Contains the frontend files (HTML, CSS, and JavaScript).
.env: Environment file to store API keys and other sensitive information.
index.js: Node.js server file.
package.json: Contains project metadata and dependencies.
README.md: Project documentation.
Usage
Open the application in your browser.
Enter the name of the city you want to get the weather information for in the input field.
Click the "Get Weather" button.
The weather information for the specified city will be displayed below.
Error Handling
The application validates the city name to ensure it only contains letters and spaces.
If the city name is invalid or if there is an error fetching data, an appropriate error message will be displayed to the user.
Contributing
Fork the repository.
Create your feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
OpenWeatherMap for providing the weather API.
Node.js, Express.js, Axios, and other open-source projects.

The Weather dashboard can be accessed via:
https://mugisha-weather.netlify.app/

Thanks.