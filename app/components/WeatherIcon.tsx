import clearSkyDay from '../assets/weather_icons/clear_sky_day.svg'
import clearSkyNight from '../assets/weather_icons/clear_sky_night.svg'
import fewCloudsDay from '../assets/weather_icons/few_clouds_day.svg'
import fewCloudsNight from '../assets/weather_icons/few_clouds_night.svg'
import scatteredCloudsDay from '../assets/weather_icons/scattered_clouds_day.svg'
import scatteredCloudsNight from '../assets/weather_icons/scattered_clouds_night.svg'
import brokenCloudsDay from '../assets/weather_icons/broken_clouds_day.svg'
import brokenCloudsNight from '../assets/weather_icons/broken_clouds_night.svg'
import snow from '../assets/weather_icons/snow.svg'
import mist from '../assets/weather_icons/mist.svg'

export function WeatherIcon({ iconCode, ...other }: { iconCode: string | undefined } & React.ImgHTMLAttributes<HTMLImageElement>) {
  switch (iconCode) {
    case '01d':
      return <img src={clearSkyDay} alt="clear sky" width="400" height="400" {...other} />
    case '01n':
      return <img src={clearSkyNight} alt="clear sky" width="400" height="400" {...other} />
    case '02d':
    case '10d':
      return <img src={fewCloudsDay} alt="few clouds" width="400" height="400" {...other} />
    case '02n':
    case '10n':
      return <img src={fewCloudsNight} alt="few clouds" width="400" height="400" {...other} />
    case '03d':
      return <img src={scatteredCloudsDay} alt="scattered clouds" width="400" height="400" {...other} />
    case '03n':
      return <img src={scatteredCloudsNight} alt="scattered clouds" width="400" height="400" {...other} />
    case '04d':
    case '09d':
    case '11d':
      return <img src={brokenCloudsDay} alt="broken clouds" width="400" height="400" {...other} />
    case '04n':
    case '09n':
    case '11n':
      return <img src={brokenCloudsNight} alt="broken clouds" width="400" height="400" {...other} />
    case '13d':
    case '13n':
      return <img src={snow} alt="snow" width="400" height="400" {...other} />
    case '50d':
    case '50n':
      return <img src={mist} alt="mist" {...other} />
    default:
      return <img src={clearSkyDay} alt="clear sky" width="400" height="400" {...other} />
  }
}