import { z } from "zod";

const rain1hrSchema = z.object({
  "1h": z.number(),
});

const snow1hrSchema = z.object({
  "1h": z.number(),
});

const weatherSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

const currentWeatherSchema = z.object({
  dt: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
  temp: z.number(),
  feels_like: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  uvi: z.number(),
  clouds: z.number(),
  visibility: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  wind_gust: z.number().optional(),
  rain: rain1hrSchema.optional(),
  snow: snow1hrSchema.optional(),
  weather: z.array(weatherSchema),
});

const minutelySchema = z.object({
  dt: z.number(),
  precipitation: z.number(),
});

const hourlySchema = z.object({
  dt: z.number(),
  temp: z.number(),
  feels_like: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  uvi: z.number(),
  clouds: z.number(),
  visibility: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  wind_gust: z.number().optional(),
  rain: rain1hrSchema.optional(),
  snow: snow1hrSchema.optional(),
  weather: z.array(weatherSchema),
  pop: z.number(),
});

const dayTempSchema = z.object({
  day: z.number(),
  min: z.number(),
  max: z.number(),
  night: z.number(),
  eve: z.number(),
  morn: z.number(),
});

const dayFeelsLikeSchema = z.object({
  day: z.number(),
  night: z.number(),
  eve: z.number(),
  morn: z.number(),
});

const dailySchema = z.object({
  dt: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
  moonrise: z.number(),
  moonset: z.number(),
  moon_phase: z.number(),
  summary: z.string(),
  temp: dayTempSchema,
  feels_like: dayFeelsLikeSchema,
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  wind_gust: z.number().optional(),
  weather: z.array(weatherSchema),
  clouds: z.number(),
  pop: z.number(),
  rain: z.number().optional(),
  snow: z.number().optional(),
  uvi: z.number(),
});

const alertSchema = z.object({
  sender_name: z.string(),
  event: z.string(),
  start: z.number(),
  end: z.number(),
  description: z.string(),
  tags: z.array(z.string()),
});

export const oneCallResponseSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  current: currentWeatherSchema,
  minutely: z.array(minutelySchema),
  hourly: z.array(hourlySchema),
  daily: z.array(dailySchema),
  alerts: z.array(alertSchema).optional(),
});

export type OneCallResponse = z.infer<typeof oneCallResponseSchema>;
export type CurrentWeather = z.infer<typeof currentWeatherSchema>;
export type Rain1hr = z.infer<typeof rain1hrSchema>;
export type Snow1hr = z.infer<typeof snow1hrSchema>;
export type Weather = z.infer<typeof weatherSchema>;
export type Minutely = z.infer<typeof minutelySchema>;
export type Hourly = z.infer<typeof hourlySchema>;
export type Daily = z.infer<typeof dailySchema>;
export type DayTemp = z.infer<typeof dayTempSchema>;
export type DayFeelsLike = z.infer<typeof dayFeelsLikeSchema>;
export type Alert = z.infer<typeof alertSchema>;
