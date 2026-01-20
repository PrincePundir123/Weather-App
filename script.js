// const cityName = document.querySelector('.js-place-name');
// const search =document.getElementById('.js-search');

// const apiKey ="265c1dddf084100b37a9a6c7dabebf33";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const weatherimage=document.querySelector('.js-weather-image');
// const  temperature = document.querySelector('.js-temp');
// const place = document.querySelector('.js-place');
// const  humidity = document.querySelector('.js-humidity-percentage');
// const wind =document.querySelector('.js-wind')
// //fetching
// async function checkWeather(city) {
// 	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
// 	var data = await response.json();
// 	place.innerText = data.name;
// 	temperature.innerText = data.main.temp;
// 	humidity.innerText = data.main.humidity;
// 	wind.innerText = data.wind.speed;
// 	console.log(data);
// }
// checkWeather(cityName);
// function searchForWeather (){
// 	search.addEventListener('click' ,() =>{
// 		checkWeather(cityName.value);
// 	});
// }
// searchForWeather();

const cityName = document.querySelector('.js-place-name');
const search = document.querySelector('.js-search');

const weatherImage = document.querySelector('.js-weather-image');
const temperature = document.querySelector('.js-temp');
const place = document.querySelector('.js-place');
const humidity = document.querySelector('.js-humidity-percentage');
const wind = document.querySelector('.js-wind');

const apiKey = "265c1dddf084100b37a9a6c7dabebf33";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Fetch Weather
async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	const data = await response.json();

	console.log(data);

	place.innerText = data.name;
	temperature.innerText = data.main.temp + "°C";
	humidity.innerText = data.main.humidity + "%";
	wind.innerText = data.wind.speed + " km/h";
	cityName.value ="";
}

// Search Button
search.addEventListener('click', () => {
	checkWeather(cityName.value);
});

const clickSearch = document.querySelector('.js-place-name');
clickSearch.addEventListener('keydown',(event) =>{
	if(event.key === "Enter"){
	   checkWeather(cityName.value);;
	}
});
