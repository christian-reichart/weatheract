export function getBackgroundGradientClassName(iconCode: string) {
  const baseClassName = "bg-gradient-to-b dark:from-[#5E687E] dark:to-[#191F2B]"
  switch (iconCode) {
  case '01d':
  case '01n':
  case '02d':
  case '10d':
  case '02n':
  case '10n':
  case '03d':
  case '03n':
  case '04d':
  case '09d':
  case '11d':
  case '04n':
  case '09n':
  case '11n':
  case '13d':
  case '13n':
  case '50d':
  case '50n':
  default:
    return baseClassName
  }
}