function showLocation(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(showLocation);

let apiKey = "40c070457645a25e3aed4a4bf9319268";
let city = "Erlangen";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

function showTemperature(response) {
  let temperature = Math.round(`${response.data.main.temp}`);
  console.log(temperature);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `It is ${temperature} °C in ${city}`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
