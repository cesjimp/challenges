/*API Documentation  www.https://openweathermap.org/api */

const inputCity=document.querySelector(".search-input")
const searchButton=document.querySelector(".search-button")
searchButton.addEventListener("click", searchCity)
let dataCurrentWeather;
let dataGeoCode;
let dataThreeHourForecast;
let cityToShowWeather;
let countryCode;
let dataCountriesObject;
let countryFiltered;
let countryCodeToSearch;




async function displayCountries(countryCode)
{
    const URL_API_COUNTRIES= `https://restcountries.com/v2/all` 
    const dataCountries = await fetch(URL_API_COUNTRIES)
    dataCountriesObject = await dataCountries.json()
    
    countryFiltered=dataCountriesObject.filter(country=>country.alpha2Code==countryCode)
    
    const countryFlagDOM=document.querySelector(".country-flag")
    const languageDOM=document.querySelector(".language")
    const currenciesDOM=document.querySelector(".currencies")
    countryFlagDOM.src=countryFiltered[0].flags.svg
    languageDOM.innerText=`Language: ${countryFiltered[0].languages[0].name}`
    currenciesDOM.innerText=`${countryFiltered[0].currencies[0].name} ${countryFiltered[0].currencies[0].code}`
    console.log(countryFiltered)
}




async function getDataGeoCode()/* Funcion que devuelve el nombre de la ciudad en diferentes idiomas y la latitud y longitud */
{
    const URL_API_GEONAME= `http://api.openweathermap.org/geo/1.0/direct?q=${cityToShowWeather},${countryCode}&limit=2&appid=18e77bd8751e26a70c3f0e6fe6ecb686` 
    const dataGeo = await fetch(URL_API_GEONAME)
    dataGeoCode = await dataGeo.json()
    console.log(`La conversion de la ciudad es`)
    console.log(dataGeoCode)
    
}
// getDataGeoCode()


async function getDataCurrentWeather()
{
    const URL_API_CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${cityToShowWeather},${countryCode}&units=metric&appid=18e77bd8751e26a70c3f0e6fe6ecb686` 
    const dataWeather = await fetch(URL_API_CURRENT_WEATHER)
    dataCurrentWeather = await dataWeather.json()


    const cityNameDOM=document.querySelector(".city-name")
    const countryCodeDOM=document.querySelector(".country-code")
    const iconCurrentWeatherDOM=document.querySelector(".icon-Current-Weather")
    const iconDescriptionDOM=document.querySelector(".icon-description")
    const iconWeatherMainDescriptionDOM=document.querySelector(".weather-main-description")
    const actualTemperaturenDOM=document.querySelector(".actual-temperature")
    const feelingTemperaturenDOM=document.querySelector(".temperature-feeling")
    const minTemperaturenDOM=document.querySelector(".min-temperature")
    const maxTemperaturenDOM=document.querySelector(".max-temperature")
    const iconCurrentWeatherCode=dataCurrentWeather.weather[0].icon
    const iconCurrentWeatherPath = `http://openweathermap.org/img/wn/${iconCurrentWeatherCode}@4x.png`
    iconCurrentWeatherDOM.src=iconCurrentWeatherPath
    cityNameDOM.innerText=dataCurrentWeather.name
    countryCodeDOM.innerText=dataCurrentWeather.sys.country
    countryCodeToSearch=dataCurrentWeather.sys.country
    iconDescriptionDOM.innerText=dataCurrentWeather.weather[0].description
    iconWeatherMainDescriptionDOM.innerText=dataCurrentWeather.weather[0].main
    actualTemperaturenDOM.innerText=`Actual ${dataCurrentWeather.main.temp}ºc`
    feelingTemperaturenDOM.innerText=`Feeling: ${dataCurrentWeather.main.feels_like}ºc `
    minTemperaturenDOM.innerText=`Min: ${dataCurrentWeather.main.temp_min}ºc` 
    maxTemperaturenDOM.innerText=`Max: ${dataCurrentWeather.main.temp_max}ºc`

    displayCountries(countryCodeToSearch)
}

async function getDatafiveDaysThreeHourForecast()
{

    const URL_API_FORECASTTHREHOURS= `http://api.openweathermap.org/data/2.5/forecast?q=${cityToShowWeather},${countryCode}&units=metric&cnt=10&appid=18e77bd8751e26a70c3f0e6fe6ecb686`
    const fiveDaysThreeHourForecast = await fetch(URL_API_FORECASTTHREHOURS)
    dataThreeHourForecast = await fiveDaysThreeHourForecast.json()
    console.log(`El forecast es`)
    console.log(dataThreeHourForecast)
    
}
// getDatafiveDaysThreeHourForecast()


function searchCity()
{
    cityToShowWeather=inputCity.value
    getDataCurrentWeather()
    inputCity.value=""
}

function iniciar()
{
    cityToShowWeather="Bogota"
    getDataCurrentWeather()
}

iniciar()
