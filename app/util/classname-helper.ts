export function getBackgroundGradientClassName(iconCode: string) {
  const baseClassName = "bg-gradient-to-b dark:from-[#5E687E] dark:to-[#191F2B]"
  switch (iconCode) {
  case '01d':
  case '02d':
  case '10d':
    return "from-[#FFF6D9] to-[#FF9B54]"
  case '03d':
  case '04d':
  case '09d':
  case '11d':
  case '13d':
  case '50d':
    return "from-[#FFF6D9] to-[#7D89A7]"
  case '01n':
  case '02n':
  case '10n':
  case '03n':
  case '04n':
  case '09n':
  case '11n':
  case '13n':
  case '50n':
    return "from-[#191F2B] to-[#FFF6D9]"
  default:
    return baseClassName
  }
}