import { twMerge } from "tailwind-merge"

export function getBackgroundGradientClassName(iconCode: string | undefined) {
  const baseClassName = "bg-gradient-to-b from-[#FFF6D9] to-[#FF9B54] dark:from-[#5E687E] dark:to-[#191F2B]"
  switch (iconCode) {
  case '01d':
  case '02d':
  case '10d':
    return twMerge(baseClassName, "from-[#FFF6D9] to-[#FF9B54]")
  case '03d':
  case '04d':
  case '09d':
  case '11d':
  case '13d':
  case '50d':
    return twMerge(baseClassName, "from-[#FFF6D9] to-[#7D89A7]")
  case '01n':
  case '02n':
  case '10n':
  case '03n':
  case '04n':
  case '09n':
  case '11n':
  case '13n':
  case '50n':
    return twMerge(baseClassName, "from-[#222A3A] to-[#FFF6D9]")
  default:
    return baseClassName
  }
}

export function getNightGradientClassName(iconCode: string | undefined) {
  switch (iconCode) {
  case '01n':
  case '02n':
  case '10n':
  case '03n':
  case '04n':
  case '09n':
  case '11n':
  case '13n':
  case '50n':
    return "bg-gradient-to-b from-[#222A3A] to-[#222A3A]/0"
  default:
    return ""
  }
}