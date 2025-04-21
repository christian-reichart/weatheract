export function formatTimeHHMMWithZone(dt: number, timezone: string): string {
  const date = new Date(dt * 1000)

  return new Intl.DateTimeFormat("de-DE", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date)
}

export function formatDateDDMM(dt: number, timezone: string): string {
  const date = new Date(dt * 1000)

  const formatter = new Intl.DateTimeFormat("de-DE", {
    timeZone: timezone,
    day: "2-digit",
    month: "2-digit",
  })

  return formatter.format(date)
}
