import type { OneCallResponse } from "./OpenWeatherOneCall.type"

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

async function fetchWeatherData(lat: number, lon: number): Promise<OneCallResponse> {
  const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall'

  const res = await fetch(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=de`)
  // TODO: Type validation... e.g. with zod
  return res.json() as Promise<OneCallResponse>
}

async function fetchLocationData(city: string) {
  const baseUrl = 'http://api.openweathermap.org/geo/1.0/direct'

  const res = await fetch(`${baseUrl}?q=${city}&appid=${API_KEY}`)

  return res.json()
}

export async function fetchWeatherDataByCity(city: string): Promise<OneCallResponse> {
  const locationData = await fetchLocationData(city)
  return fetchWeatherData(locationData[0].lat, locationData[0].lon)
}