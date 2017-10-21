import axios from 'axios'

const dotenv = require('dotenv')
dotenv.load()

const BASE_URL = 'http://api.openweathermap.org/data/2.5/'

export function getCurrentWeather(cityname) {
    const currentWeatherUrl = `${BASE_URL}weather?q=${cityname}&type=accurate&APPID=c1be1430bdb55ac77961e7a1f117f123`
    return axios.get(currentWeatherUrl).then(response => {
        console.log(response.data)
        return response.data
    })
}

export function getFiveDayForecastEndpoint(cityname) {
    const fiveDayForecastUrl = `${BASE_URL}forecast?q=${cityname}&type=accurate&cnt=5&APPID=c1be1430bdb55ac77961e7a1f117f123`
    return axios.get(fiveDayForecastUrl).then(response => {
        console.log(response.data)
        return response.data
    })
}
