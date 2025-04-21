export function formatTimeHHMMWithZone(dt: number, timezone: string): string {
  const date = new Date(dt * 1000)

  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date)
}
