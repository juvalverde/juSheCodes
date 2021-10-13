// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   moscow: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// let enterCity = prompt("Enter a city?");

// enterCity = enterCity.toLowerCase();

// if (weather[enterCity] !== undefined) {
//   let temperature = weather[enterCity].temp;
//   let humidity = weather[enterCity].humidity;

//   let celcius = Math.round(temperature);
//   let farenheit = Math.round((temperature * 9) / 5 + 32);
//   alert(
//     `It is currently ${celcius}°C (${farenheit}°F) in ${enterCity} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${enterCity}`
//   );
// }

// Display current date
function formatDate(date) {
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  let monthDate = date.getDate();

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];

  return `${day}, ${monthDate} of ${month} ${hour}:${minutes}`;
}

// Search engine
function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(event) {
  event.preventDefault();

  let apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
  let city = document.querySelector("#inputField").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

// function submitAction(event) {
//   event.preventDefault();
//   let city = document.querySelector("#inputField").value;
//   searchCity(city);
// }

// function displayLocationWeather(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(searchLocation);
// }

let currentCityDate = document.querySelector("#date");
let todayDate = new Date();

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

// let currentLocationBtn = document.querySelector("#locationBtn");
// currentLocationBtn.addEventListener("click", displayLocationWeather);

currentCityDate.innerHTML = formatDate(todayDate);
