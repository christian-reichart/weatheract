import { twMerge } from "tailwind-merge"
import { Card } from "./ui/Card"
import { SecondaryWeatherIcon, WeatherIcon } from "./WeatherIcon"
import { getBackgroundGradientClassName, getNightGradientClassName } from "~/util/classname-helper"

export function ForecastCard({ headline, children, className, ...other }: { headline: string,children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={twMerge('w-full overflow-auto bg-white', className)} {...other}>
    <h3 className="font-family-fancy text-2xl text-center sticky left-0 w-full mt-4 mb-8">{headline}</h3>
    <div className="flex justify-between gap-2">
      {children}
    </div>
  </Card>
  )
}

export function ForecastItem({ children, className, weatherIcon, ...other }: { children: React.ReactNode, weatherIcon: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={twMerge('flex flex-col items-center relative w-24 shrink-0 pb-6', className)} {...other}>
    {children}
    <div className={twMerge('flex flex-col items-center rounded-2xl relative w-24 h-28 mt-4', getNightGradientClassName(weatherIcon))}>
      <WeatherIcon iconCode={weatherIcon} />
      <SecondaryWeatherIcon iconCode={weatherIcon} className="absolute bottom-0 w-1/2" />
    </div>
  </div>
  )
}
