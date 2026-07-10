
const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
const cityUrl = "https://geocoding-api.open-meteo.com/v1/reverse?latitude=52.52&longitude=13.41"

async function weather() {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    const rep = await fetch(cityUrl)
    const dat = await rep.json();

    const cityName = dat.results[0].name;
    const tempe = data.hourly.temperature_2m[0];

    document.querySelector(".name").innerHTML = cityName
    document.querySelector(".temp").innerHTML = tempe + "°C";
}
weather()
