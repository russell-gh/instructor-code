const location = document.getElementById("location");
const weatherDisplay = document.getElementById("weather");

let lat;
let long;

export function success(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
  location.innerText = `Latitude: ${lat} Longitude: ${long}`;

  location.setAttribute(
    "href",
    `https://www.google.com/maps/place/${lat},${long}`
  );

  location.setAttribute("target", "_blank");
}

export function error() {
  location.innerText = "Location Unavailable";
  location.removeAttribute("href");
  location.removeAttribute("target");
}

export function getLocalweather() {
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=17a3e02a9cc47ed1eac90bc2f9c0012a`;

  axios.get(weatherApi).then(function (response) {
    console.log(response);
    const location = response.data.name;
    const temp = (response.data.main.temp - 273).toFixed(2);
    const maxTemp = (response.data.main.temp_max - 273).toFixed(2);
    const minTemp = (response.data.main.temp_min - 273).toFixed(2);
    const weather = response.data.weather[0].description;
    weatherDisplay.innerText = `Weather in ${location}... Current temperature is ${temp}C with a maximum and minimum of ${maxTemp}C & ${minTemp}C. It will be ${weather} today.`;
  });
}
