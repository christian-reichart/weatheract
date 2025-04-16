import { useLoaderData } from "react-router"
import type { Route } from "./+types/home"
import { fetchWeatherDataByCity } from "../api/open-weather-api"
import { testData } from "~/api/test-data"
import type { OneCallResponse } from "~/api/OpenWeatherOneCall.type"
import { WeatherIcon } from "~/components/WeatherIcon"
import { Card } from "~/components/ui/Card"
import { getBackgroundGradientClassName } from "~/util/classname-helper"
import { twMerge } from "tailwind-merge"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WeatherAct" },
    { name: "description", content: "Check your weather!" },
  ]
}

export async function loader({ request }: Route.LoaderArgs) {
  // const weatherData = await fetchWeatherDataByCity('Mering')
  const weatherData: OneCallResponse = testData
  return { weatherData }
}

export default function Home() {
  const { weatherData } = useLoaderData<typeof loader>()
  const mainWeather = weatherData.current.weather[0]
  const backgroundClass = getBackgroundGradientClassName(mainWeather.icon)
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={twMerge("absolute top-0 left-0 w-full h-full bg-gradient-to-b dark:to-[#5E687E] dark:from-[#191F2B] -z-10", backgroundClass)} />
      <div>
        <WeatherIcon iconCode={mainWeather.icon} className="max-w-full translate-y-1/2 -mt-[50%]" />
      </div>
      <div className="w-full rounded-t-4xl bg-secondary/30 dark:bg-primary/30 backdrop-blur-3xl flex flex-col items-center p-4">
        <div className="font-family-fancy text-9xl">{Math.round(weatherData.current.temp)}</div>
        <p>{mainWeather.description}</p>
        <p>{`Gefühlt ${Math.round(weatherData.current.feels_like)}°`}</p>
        <Card className="mt-4 w-full">
          <h3 className="font-family-fancy text-2xl text-center">Stündlich</h3>
        </Card>
        <Card className="mt-4 w-full">
          <h3 className="font-family-fancy text-2xl text-center">Die nächsten Tage</h3>
        </Card>
      </div>
    </div>
  )
}
