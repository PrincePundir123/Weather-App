# 🌤️ Weather App

A modern, responsive weather web application that provides real-time weather data, forecasts, and atmospheric insights for any location worldwide.

## 📋 Table of Contents

- [Overview](#-overview)

- [Live Demo](https://princepundir123.github.io/Weather-App/)

## 📝 Overview



**Weather App** is a fully client-side weather application built with vanilla HTML, CSS, and JavaScript. It fetches live weather data using the [OpenWeatherMap API](https://api.openweathermap.org/data/2.5/weather?units=metric&q=) and presents it in a clean, intuitive interface. Users can search for any city in the world and get instant access to current conditions.



Whether you're planning a trip, checking morning conditions, or just curious about the weather on the other side of the world — this app has you covered.

---

### Core Features

- 🔍 **City Search** — Search any city or town globally by name

- 📍 **Geolocation Support** — Automatically detect and display weather for the user's current location

- 🌡️ **Current Weather** — Real-time temperature, "feels like," humidity, wind speed, and visibility

-

## 🛠️ Tech Stack



| Technology | Purpose |

|---|---|

| **HTML5** | Semantic markup and structure |

| **CSS3** | Styling, animations, responsive layout (Flexbox & Grid) |

| **JavaScript (ES6+)** | App logic, DOM manipulation, API calls |

| **OpenWeatherMap API** | Weather data source (current + forecast) |

| **Fetch API** | Async HTTP requests to weather endpoints |

| **LocalStorage** | Persisting user preferences and search history |

| **Geolocation API** | Browser-native location detection |



---



## 🏁 Getting Started



Follow these steps to run the project locally on your machine.



### Prerequisites



- 

### Installation



1. **Clone the repository**

   ```bash

   git clone https://github.com/your-username/weather-app.git

   ```



2. **Navigate into the project directory**

   ```bash

   cd weather-app

   ```



3. **Open the project**



   Simply open `index.html` in your browser:

   ```bash

   open index.html

   # or on Windows:

   start index.html

   ```



   Or use **Live Server** in VS Code for hot-reloading during development.



### API Key Setup



1. Go to [https://openweathermap.org/](https://openweathermap.org/) and create a free account.

2. Navigate to **My API Keys** in your dashboard and copy your key.

   ```javascript

   // js/config.js

   const API_KEY = "YOUR_API_KEY_HERE";

   const BASE_URL = "https://openweathermap.org/";

   ```



> ⚠️ **Security Note:** Never commit your API key to a public repository. Use environment variables or a `.env` file and add it to `.gitignore` for production applications.



---





## ⚙️ How It Works



### 1. User Input

The user either types a city name in the search bar or clicks **"Use My Location"** to trigger the browser's Geolocation API.



### 2. API Requests

The app makes two parallel `fetch` calls to OpenWeatherMap:

- **Current Weather:** `GET /weather?q={city}&appid={key}`

- **5-Day Forecast:** `GET /forecast?q={city}&appid={key}`



### 3. Data Processing

Raw API responses are parsed and transformed:

- Temperatures converted from Kelvin to °C or °F

- Unix timestamps converted to human-readable dates

- Wind degrees converted to compass directions (N, NE, E, SE, etc.)




## 📡 API Reference



This app uses the [OpenWeatherMap API](https://openweathermap.org/api).



### Current Weather Endpoint

```

GET https://api.openweathermap.org/data/2.5/weather?units=metric&q={city name}&appid={API key}

```

## 🤝 Contributing



Contributions are welcome! Here's how to get involved:



1. **Fork** the repository

2. **Create** a new feature branch

   ```bash

   git checkout -b feature/your-feature-name

   ```

3. **Commit** your changes

   ```bash

   git commit -m "feat: add your feature description"

   ```

4. **Push** to your branch

   ```bash

   git push origin feature/your-feature-name

   ```

5. **Open a Pull Request** against the `main` branch





---
## 🗺️ Roadmap



Planned features for upcoming versions:


## 🙏 Acknowledgements



- [OpenWeatherMap](https://api.openweathermap.org/data/2.5/weather?units=metric&q=) — Free-tier weather API

- [Font Awesome](https://fontawesome.com/) — UI icons

- [Google Fonts](https://fonts.google.com/) — Typography

- [MDN Web Docs](https://developer.mozilla.org/) — API references and documentation



---



## 📬 Contact



**Your Name**



- 🐙 GitHub: [prince pundir](https://github.com/PrincePundir123)

- 📧 Email: princepundir125@gmail.com

- 💼 LinkedIn: [linkedin.com/in/](https://www.linkedin.com/in/prince-pundir-b61283324/)



---



<div align="center">



Made with ❤️ and ☕ by [Prince Pundir](https://github.com/PrincePundir123)



⭐ **Star this repo if you found it useful!**



</div>   
