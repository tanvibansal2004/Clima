import axios from 'axios'
import { apiKey } from '../constants'

const forecastEndpoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`

const locationEndpoint = params => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`

const apiCall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint
    }
    try {
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log("error: ", error)
        return null
    }
}

export const fetchWeatherForecast = params => {
    let forecastUrl = forecastEndpoint(params)
    return apiCall(forecastUrl)
}

export const fetchLocations = params => {
    let locationUrl = locationEndpoint(params)
    return apiCall(locationUrl)
}