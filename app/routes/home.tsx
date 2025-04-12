import { useLoaderData } from "react-router"
import type { Route } from "./+types/home"
import { getWeatherData } from "../apis/open-weather-api"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WeatherAct" },
    { name: "description", content: "Check your weather!" },
  ]
}

type Coordinates = {
  lat: number
  lon: number
}

// TODO: get coordinates from city input
const munichCoordinates: Coordinates = {
  lat: 48.135124,
  lon: 11.581981,
}

export async function loader({ request }: Route.LoaderArgs) {
  const weatherData = await getWeatherData(munichCoordinates.lat, munichCoordinates.lon)
  return { weatherData }
}

export default function Home() {
  const { weatherData } = useLoaderData<typeof loader>()
  console.log(weatherData)
  weatherData.current.weather
  return <div>Home</div>
}
