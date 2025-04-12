import { env } from "process"
import type { OneCallResponse } from "./OpenWeatherOneCall.type"

export async function getWeatherData(lat: number, lon: number): Promise<OneCallResponse> {
  const api_key = env.OPEN_WEATHER_API_KEY
  const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall'

  const res = await fetch(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=de`)
  // TODO: Type validation... e.g. with zod
  return res.json() as Promise<OneCallResponse>
}