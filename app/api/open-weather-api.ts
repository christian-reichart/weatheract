import { oneCallResponseSchema, type OneCallResponse } from "./OpenWeatherOneCall.type"
import { locationSearchResponseSchema } from "./OpenWeatherLocation.type"

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

async function fetchWeatherData(lat: number, lon: number) {
  const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall'
  try {
    const res = await fetch(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=de`)
    const parsedRes = oneCallResponseSchema.safeParse( await res.json() )
    if (!parsedRes.success) throw new Error(parsedRes.error.message)
    return parsedRes.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

async function fetchLocationData(city: string) {
  const baseUrl = 'http://api.openweathermap.org/geo/1.0/direct'
  try {
    const res = await fetch(`${baseUrl}?q=${city}&appid=${API_KEY}`)
    const parsedRes = locationSearchResponseSchema.safeParse(await res.json())
    if (!parsedRes.success) throw new Error(parsedRes.error.message)
    return parsedRes.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function fetchWeatherDataByCity(city: string) {
  try {
    const locationData = await fetchLocationData(city)
    if (locationData.length === 0) throw new Error('No location data found')
    const weatherData = await fetchWeatherData(locationData[0].lat, locationData[0].lon)
    return {
      locationData: locationData[0],
      weatherData
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}