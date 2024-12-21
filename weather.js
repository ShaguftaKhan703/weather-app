// let button = document.querySelector(".button");
// let inputValue = document.querySelector(".inputValue");
// let nameValue = document.querySelector(".name");
// let temp = document.querySelector(".temp");
// let desc = document.querySelector(".desc");

// button.addEventListener("click", function () {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value},91&appid=f96734b4bb7b36ad6e782826b96acd76`
//   )
//     .then((response) => response.json())
//     .then(displayDate)
//     .catch((err) => alert("Wrong City name"));
// });
// const displayDate = (weather) => {
//   temp.innerText = `${weather.main.temp}C`;
//   desc.innerText = `${weather.weather[0]}`;
// };

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const inputValue = document.querySelector(".inputValue");
  const city = document.querySelector(".city");
  const temp = document.querySelector(".temp");
  const desc = document.querySelector(".desc");

  button.addEventListener("click", function () {
    const apiKey = "f96734b4bb7b36ad6e782826b96acd76";
    const cityName = inputValue.value.trim();
    if (!cityName) {
      alert("Please enter a location!");
      return;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((weather) => {
        const kelvinTemp = weather.main.temp;
        const celsiusTemp = (kelvinTemp - 273.15).toFixed(2);
        city.innerText = weather.name; // Update city name
        temp.innerText = `Temperature: ${celsiusTemp}°C`; // Update temperature
        desc.innerText = weather.weather[0].description; // Update weather description
      })
      .catch((err) => alert(err.message));
  });
});
