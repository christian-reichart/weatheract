import { ThemeSelect } from "~/theme/ThemeSelect"
import { Logo } from "./Logo"
import { Link, useRouteLoaderData } from "react-router"
import { IconSettings } from "../icons/IconSettings"
import { Dialog } from "../ui/Dialog"
import { useState } from "react"

export function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const weatherData = useRouteLoaderData('routes/home')
  const isBackgroundAlwaysDark = weatherData?.mainWeatherIcon?.endsWith('n')
  return (
    <header className="flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
      <Link to="/">
        <Logo className="h-6 w-auto md:h-8 lg:h-12" forceInverted={isBackgroundAlwaysDark} />
      </Link>
      <button className="absolute right-4 top-4 cursor-pointer p-1 opacity-50 hover:opacity-70 transition-all" onClick={() => setIsSettingsOpen(true)}>
        <IconSettings className={isBackgroundAlwaysDark ? 'text-secondary' : ''} />
      </button>
      <Dialog open={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} className="w-80 max-w-screen max-h-screen flex flex-col justify-center items-center p-8">
        <h2 className="font-family-fancy text-2xl mb-4">Farbthema</h2>
        <ThemeSelect />
      </Dialog>
    </header>
  )
}