import { redirect, useLoaderData, useSearchParams } from "react-router"
import type { Route } from "./+types/home"
import { fetchWeatherDataByCity } from "../api/open-weather-api"
import { testData } from "~/api/test-data"
import type { OneCallResponse } from "~/api/OpenWeatherOneCall.type"
import { SecondaryWeatherIcon, WeatherIcon } from "~/components/WeatherIcon"
import { Card } from "~/components/ui/Card"
import { getBackgroundGradientClassName } from "~/util/classname-helper"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WeatherAct" },
    { name: "description", content: "Check your weather!" },
  ]
}

export async function loader({ request }: Route.LoaderArgs) {
  const searchParams = new URL(request.url).searchParams
  let weatherData: OneCallResponse | null = testData
  if (searchParams.get('q')) {
    weatherData = await fetchWeatherDataByCity(searchParams.get('q')!)
  }
  return { weatherData, mainWeatherIcon: weatherData?.current.weather[0].icon }
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const searchSchema = z.object({
    q: z.string()
  })
  const parsedFormData = searchSchema.safeParse(Object.fromEntries(formData.entries()))
  if (!parsedFormData.success) return null
  return redirect(`/?q=${parsedFormData.data.q}`)
}

export default function Home() {
  const { weatherData, mainWeatherIcon } = useLoaderData<typeof loader>()
  const mainWeather = weatherData?.current.weather[0]
  const backgroundClass = getBackgroundGradientClassName(mainWeatherIcon)
  return (
    <div className="flex flex-col items-center justify-center">
      <form method="post">
        <input name="q" type="text" className="p-2 border border-gray-300 rounded-lg" />
        <button className="p-2 border border-gray-300 rounded-lg" type="submit">ok</button>
      </form>
      <div className={twMerge("absolute top-0 left-0 w-full h-full bg-gradient-to-b dark:to-[#5E687E] dark:from-[#191F2B] -z-10", backgroundClass)} />
      {weatherData !== null ? (
        <>
          <div>
            <WeatherIcon iconCode={mainWeatherIcon} className="max-w-full translate-y-[40%] -mt-[40%]" />
          </div>
          <div className="w-full rounded-4xl bg-secondary/30 dark:bg-primary/30 backdrop-blur-3xl flex flex-col items-center p-4 md:p-8">
          <div className="flex justify-center items-center gap-4">
            <SecondaryWeatherIcon iconCode={mainWeatherIcon} className="w-20 xs:w-32" />
            <div className="flex flex-col items-center">
              <div className="font-family-fancy text-8xl xs:text-9xl">{Math.round(weatherData.current.temp)}</div>
              <p>{mainWeather?.description}</p>
              <p>{`Gefühlt ${Math.round(weatherData.current.feels_like)}°`}</p>
            </div>
          </div>
            <Card className="mt-4 w-full">
              <h3 className="font-family-fancy text-2xl text-center">Stündlich</h3>
            </Card>
            <Card className="mt-4 w-full">
              <h3 className="font-family-fancy text-2xl text-center">Die nächsten Tage</h3>
            </Card>
          </div>
        </>
      )
        : null
      }
    </div>
  )
}
