import { redirect, useLoaderData, useSearchParams } from "react-router"
import type { Route } from "./+types/home"
import { fetchWeatherDataByCity } from "../api/open-weather-api"
import type { OneCallResponse } from "~/api/OpenWeatherOneCall.type"
import { SecondaryWeatherIcon, WeatherIcon } from "~/components/WeatherIcon"
import { getBackgroundGradientClassName } from "~/util/classname-helper"
import { twMerge } from "tailwind-merge"
import { z } from "zod"
import { IconSearch } from "~/components/icons/IconSearch"
import type { Location } from "~/api/OpenWeatherLocation.type"
import { formatDateDDMM, formatTimeHHMMWithZone } from "~/util/time"
import { ForecastCard, ForecastItem } from "~/components/ForecastCard"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WeatherAct" },
    { name: "description", content: "Check your weather!" },
  ]
}

export async function loader({ request }: Route.LoaderArgs) {
  const searchParams = new URL(request.url).searchParams
  let weatherData: OneCallResponse | null = null
  let locationData: Location | null = null
  if (searchParams.get('q')) {
    const res = await fetchWeatherDataByCity(searchParams.get('q')!)
    weatherData = res.weatherData
    locationData = res.locationData
  }
  return { weatherData, locationData, mainWeatherIcon: weatherData?.current.weather[0].icon }
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const searchSchema = z.object({
    q: z.string()
  })
  const parsedFormData = searchSchema.safeParse(Object.fromEntries(formData.entries()))
  if (!parsedFormData.success) return null
  return redirect(`/?q=${encodeURIComponent(parsedFormData.data.q)}`)
}

export default function Home() {
  const { weatherData, locationData, mainWeatherIcon } = useLoaderData<typeof loader>()
  const [searchParams] = useSearchParams()
  const mainWeather = weatherData?.current.weather[0]
  const backgroundClass = getBackgroundGradientClassName(mainWeatherIcon)
  return (
    <div className="flex flex-col items-center justify-center mb-24">
      <form method="post" className="flex">
        <input name="q" defaultValue={locationData?.local_names?.de ?? searchParams.get('q') ?? ''} type="text" className=" w-2xs max-w-screen p-2 pr-10 bg-white dark:bg-primary rounded-lg focus:outline-2 focus:outline-offset-0 focus:outline-signal shadow-md" />
        <button className="p-2 cursor-pointer flex items-center justify-center -ml-10" type="submit"><IconSearch /></button>
      </form>
      <div className={twMerge("fixed top-0 left-0 w-full h-full bg-gradient-to-b dark:to-[#5E687E] dark:from-[#191F2B] -z-10", backgroundClass)} />
      {weatherData !== null ? (
        <>
          <div>
            <WeatherIcon iconCode={mainWeatherIcon} className="max-w-full translate-y-[40%] -mt-[40%]" />
          </div>
          <div className="w-full rounded-4xl bg-white/30 dark:bg-primary/30 backdrop-blur-3xl flex flex-col items-center p-4 md:p-8">
          <div className="flex justify-center items-center gap-4 my-4">
            <SecondaryWeatherIcon iconCode={mainWeatherIcon} className="w-20 xs:w-32" />
            <div className="flex flex-col items-center">
              <div className="font-family-fancy text-8xl xs:text-9xl">{Math.round(weatherData.current.temp)}</div>
              <p>{`${formatTimeHHMMWithZone(weatherData.current.dt, weatherData.timezone)} - ${mainWeather?.description}`}</p>
              <p>{`Gefühlt ${Math.round(weatherData.current.feels_like)}°`}</p>
            </div>
          </div>
            <ForecastCard className="my-8" headline="Die nächsten Stunden">
                {weatherData.hourly.map((hourlyWeather, index) => (
                  index === 0 ? null :
                  <ForecastItem key = {hourlyWeather.dt} weatherIcon={hourlyWeather.weather[0].icon}>
                      <p>{formatTimeHHMMWithZone(hourlyWeather.dt, weatherData.timezone)}</p>
                      <p>{`${Math.round(hourlyWeather.temp)}°`}</p>
                  </ForecastItem>
                ))}
            </ForecastCard>
            <ForecastCard className="mt-8" headline="Die nächsten Tage">
                {weatherData.daily.map((dailyWeather, index) => (
                  index === 0 ? null :
                  <ForecastItem key = {dailyWeather.dt} weatherIcon={dailyWeather.weather[0].icon}>
                    <p>{formatDateDDMM(dailyWeather.dt, weatherData.timezone)}</p>
                    <p>{`${Math.round(dailyWeather.temp.day)}°`}</p>
                  </ForecastItem>
                ))}
            </ForecastCard>
          </div>
        </>
      )
        : null
      }
    </div>
  )
}