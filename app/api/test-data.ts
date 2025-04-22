/**
 * 01 - clear sky
 * 02 - few clouds
 * 03 - scattered clouds
 * 04 - broken clouds
 * 09 - shower rain
 * 10 - rain
 * 11 - thunderstorm
 * 13 - snow
 * 50 - mist
 * d - day
 * n - night
 */

const mainWeatherIcon = '02d'

export const testData = {
  "weatherData": {
    "lat": 48.3668,
    "lon": 10.8987,
    "timezone": "Europe/Berlin",
    "timezone_offset": 7200,
    "current": {
      "dt": 1745326620,
      "sunrise": 1745295173,
      "sunset": 1745345793,
      "temp": 15.86,
      "feels_like": 14.83,
      "pressure": 1017,
      "humidity": 51,
      "dew_point": 5.75,
      "uvi": 3,
      "clouds": 20,
      "visibility": 10000,
      "wind_speed": 2.06,
      "wind_deg": 340,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "Ein paar Wolken",
          "icon": mainWeatherIcon,
        }
      ]
    },
    "minutely": [
      {
        "dt": 1745326620,
        "precipitation": 0
      },
      {
        "dt": 1745326680,
        "precipitation": 0
      },
      {
        "dt": 1745326740,
        "precipitation": 0
      },
      {
        "dt": 1745326800,
        "precipitation": 0
      },
      {
        "dt": 1745326860,
        "precipitation": 0
      },
      {
        "dt": 1745326920,
        "precipitation": 0
      },
      {
        "dt": 1745326980,
        "precipitation": 0
      },
      {
        "dt": 1745327040,
        "precipitation": 0
      },
      {
        "dt": 1745327100,
        "precipitation": 0
      },
      {
        "dt": 1745327160,
        "precipitation": 0
      },
      {
        "dt": 1745327220,
        "precipitation": 0
      },
      {
        "dt": 1745327280,
        "precipitation": 0
      },
      {
        "dt": 1745327340,
        "precipitation": 0
      },
      {
        "dt": 1745327400,
        "precipitation": 0
      },
      {
        "dt": 1745327460,
        "precipitation": 0
      },
      {
        "dt": 1745327520,
        "precipitation": 0
      },
      {
        "dt": 1745327580,
        "precipitation": 0
      },
      {
        "dt": 1745327640,
        "precipitation": 0
      },
      {
        "dt": 1745327700,
        "precipitation": 0
      },
      {
        "dt": 1745327760,
        "precipitation": 0
      },
      {
        "dt": 1745327820,
        "precipitation": 0
      },
      {
        "dt": 1745327880,
        "precipitation": 0
      },
      {
        "dt": 1745327940,
        "precipitation": 0
      },
      {
        "dt": 1745328000,
        "precipitation": 0
      },
      {
        "dt": 1745328060,
        "precipitation": 0
      },
      {
        "dt": 1745328120,
        "precipitation": 0
      },
      {
        "dt": 1745328180,
        "precipitation": 0
      },
      {
        "dt": 1745328240,
        "precipitation": 0
      },
      {
        "dt": 1745328300,
        "precipitation": 0
      },
      {
        "dt": 1745328360,
        "precipitation": 0
      },
      {
        "dt": 1745328420,
        "precipitation": 0
      },
      {
        "dt": 1745328480,
        "precipitation": 0
      },
      {
        "dt": 1745328540,
        "precipitation": 0
      },
      {
        "dt": 1745328600,
        "precipitation": 0
      },
      {
        "dt": 1745328660,
        "precipitation": 0
      },
      {
        "dt": 1745328720,
        "precipitation": 0
      },
      {
        "dt": 1745328780,
        "precipitation": 0
      },
      {
        "dt": 1745328840,
        "precipitation": 0
      },
      {
        "dt": 1745328900,
        "precipitation": 0
      },
      {
        "dt": 1745328960,
        "precipitation": 0
      },
      {
        "dt": 1745329020,
        "precipitation": 0
      },
      {
        "dt": 1745329080,
        "precipitation": 0
      },
      {
        "dt": 1745329140,
        "precipitation": 0
      },
      {
        "dt": 1745329200,
        "precipitation": 0
      },
      {
        "dt": 1745329260,
        "precipitation": 0
      },
      {
        "dt": 1745329320,
        "precipitation": 0
      },
      {
        "dt": 1745329380,
        "precipitation": 0
      },
      {
        "dt": 1745329440,
        "precipitation": 0
      },
      {
        "dt": 1745329500,
        "precipitation": 0
      },
      {
        "dt": 1745329560,
        "precipitation": 0
      },
      {
        "dt": 1745329620,
        "precipitation": 0
      },
      {
        "dt": 1745329680,
        "precipitation": 0
      },
      {
        "dt": 1745329740,
        "precipitation": 0
      },
      {
        "dt": 1745329800,
        "precipitation": 0
      },
      {
        "dt": 1745329860,
        "precipitation": 0
      },
      {
        "dt": 1745329920,
        "precipitation": 0
      },
      {
        "dt": 1745329980,
        "precipitation": 0
      },
      {
        "dt": 1745330040,
        "precipitation": 0
      },
      {
        "dt": 1745330100,
        "precipitation": 0
      },
      {
        "dt": 1745330160,
        "precipitation": 0
      }
    ],
    "hourly": [
      {
        "dt": 1745323200,
        "temp": 16.09,
        "feels_like": 15.09,
        "pressure": 1017,
        "humidity": 51,
        "dew_point": 5.96,
        "uvi": 4.41,
        "clouds": 21,
        "visibility": 10000,
        "wind_speed": 1.67,
        "wind_deg": 293,
        "wind_gust": 2.85,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "Ein paar Wolken",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745326800,
        "temp": 15.86,
        "feels_like": 14.83,
        "pressure": 1017,
        "humidity": 51,
        "dew_point": 5.75,
        "uvi": 3,
        "clouds": 20,
        "visibility": 10000,
        "wind_speed": 1.65,
        "wind_deg": 278,
        "wind_gust": 2.5,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "Ein paar Wolken",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745330400,
        "temp": 16.17,
        "feels_like": 15.2,
        "pressure": 1017,
        "humidity": 52,
        "dew_point": 6.32,
        "uvi": 2.37,
        "clouds": 34,
        "visibility": 10000,
        "wind_speed": 1.84,
        "wind_deg": 304,
        "wind_gust": 2.08,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "Mäßig bewölkt",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745334000,
        "temp": 16.45,
        "feels_like": 15.53,
        "pressure": 1017,
        "humidity": 53,
        "dew_point": 6.85,
        "uvi": 1.61,
        "clouds": 48,
        "visibility": 10000,
        "wind_speed": 1.91,
        "wind_deg": 326,
        "wind_gust": 2.07,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "Mäßig bewölkt",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745337600,
        "temp": 16.9,
        "feels_like": 16.11,
        "pressure": 1017,
        "humidity": 56,
        "dew_point": 8.08,
        "uvi": 0.81,
        "clouds": 63,
        "visibility": 10000,
        "wind_speed": 1.86,
        "wind_deg": 346,
        "wind_gust": 2.06,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "Überwiegend bewölkt",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745341200,
        "temp": 17.01,
        "feels_like": 16.41,
        "pressure": 1017,
        "humidity": 63,
        "dew_point": 9.92,
        "uvi": 0.27,
        "clouds": 78,
        "visibility": 10000,
        "wind_speed": 1.57,
        "wind_deg": 42,
        "wind_gust": 2.42,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "Überwiegend bewölkt",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745344800,
        "temp": 15.66,
        "feels_like": 15.11,
        "pressure": 1017,
        "humidity": 70,
        "dew_point": 7.18,
        "uvi": 0,
        "clouds": 94,
        "visibility": 10000,
        "wind_speed": 2.29,
        "wind_deg": 96,
        "wind_gust": 3.12,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745348400,
        "temp": 13.42,
        "feels_like": 12.67,
        "pressure": 1018,
        "humidity": 71,
        "dew_point": 6.6,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.03,
        "wind_deg": 120,
        "wind_gust": 2.57,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745352000,
        "temp": 12.15,
        "feels_like": 11.33,
        "pressure": 1018,
        "humidity": 73,
        "dew_point": 6.53,
        "uvi": 0,
        "clouds": 95,
        "visibility": 10000,
        "wind_speed": 1.31,
        "wind_deg": 134,
        "wind_gust": 1.35,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745355600,
        "temp": 11.44,
        "feels_like": 10.68,
        "pressure": 1018,
        "humidity": 78,
        "dew_point": 6.24,
        "uvi": 0,
        "clouds": 81,
        "visibility": 10000,
        "wind_speed": 0.34,
        "wind_deg": 124,
        "wind_gust": 0.76,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "Überwiegend bewölkt",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745359200,
        "temp": 10.88,
        "feels_like": 10.16,
        "pressure": 1018,
        "humidity": 82,
        "dew_point": 5.93,
        "uvi": 0,
        "clouds": 76,
        "visibility": 10000,
        "wind_speed": 0.5,
        "wind_deg": 10,
        "wind_gust": 0.64,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "Überwiegend bewölkt",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745362800,
        "temp": 11.48,
        "feels_like": 10.85,
        "pressure": 1019,
        "humidity": 83,
        "dew_point": 5.93,
        "uvi": 0,
        "clouds": 82,
        "visibility": 10000,
        "wind_speed": 0.86,
        "wind_deg": 46,
        "wind_gust": 0.78,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "Überwiegend bewölkt",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745366400,
        "temp": 11.63,
        "feels_like": 11.02,
        "pressure": 1018,
        "humidity": 83,
        "dew_point": 6.02,
        "uvi": 0,
        "clouds": 85,
        "visibility": 10000,
        "wind_speed": 1.01,
        "wind_deg": 55,
        "wind_gust": 0.99,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745370000,
        "temp": 11.18,
        "feels_like": 10.52,
        "pressure": 1018,
        "humidity": 83,
        "dew_point": 5.89,
        "uvi": 0,
        "clouds": 90,
        "visibility": 10000,
        "wind_speed": 0.73,
        "wind_deg": 40,
        "wind_gust": 0.7,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745373600,
        "temp": 10.59,
        "feels_like": 9.87,
        "pressure": 1018,
        "humidity": 83,
        "dew_point": 5.87,
        "uvi": 0,
        "clouds": 95,
        "visibility": 10000,
        "wind_speed": 0.63,
        "wind_deg": 21,
        "wind_gust": 0.66,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745377200,
        "temp": 10.37,
        "feels_like": 9.58,
        "pressure": 1018,
        "humidity": 81,
        "dew_point": 5.94,
        "uvi": 0,
        "clouds": 96,
        "visibility": 10000,
        "wind_speed": 0.7,
        "wind_deg": 55,
        "wind_gust": 0.81,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745380800,
        "temp": 10.58,
        "feels_like": 9.76,
        "pressure": 1017,
        "humidity": 79,
        "dew_point": 5.91,
        "uvi": 0,
        "clouds": 97,
        "visibility": 10000,
        "wind_speed": 1.29,
        "wind_deg": 79,
        "wind_gust": 1.27,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745384400,
        "temp": 11.14,
        "feels_like": 10.4,
        "pressure": 1017,
        "humidity": 80,
        "dew_point": 6.33,
        "uvi": 0.11,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 1.47,
        "wind_deg": 86,
        "wind_gust": 1.74,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745388000,
        "temp": 10.59,
        "feels_like": 9.77,
        "pressure": 1017,
        "humidity": 79,
        "dew_point": 6.98,
        "uvi": 0.44,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 1.31,
        "wind_deg": 87,
        "wind_gust": 2.19,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745391600,
        "temp": 11.77,
        "feels_like": 10.93,
        "pressure": 1017,
        "humidity": 74,
        "dew_point": 7.27,
        "uvi": 1.14,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.39,
        "wind_deg": 92,
        "wind_gust": 1.93,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745395200,
        "temp": 13.25,
        "feels_like": 12.43,
        "pressure": 1016,
        "humidity": 69,
        "dew_point": 7.62,
        "uvi": 2.18,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.48,
        "wind_deg": 83,
        "wind_gust": 1.68,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745398800,
        "temp": 14.94,
        "feels_like": 14.16,
        "pressure": 1015,
        "humidity": 64,
        "dew_point": 8.04,
        "uvi": 3.17,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 2.18,
        "wind_deg": 91,
        "wind_gust": 2.56,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745402400,
        "temp": 16.45,
        "feels_like": 15.72,
        "pressure": 1014,
        "humidity": 60,
        "dew_point": 8.48,
        "uvi": 4.33,
        "clouds": 90,
        "visibility": 10000,
        "wind_speed": 2.72,
        "wind_deg": 93,
        "wind_gust": 3.11,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745406000,
        "temp": 17.41,
        "feels_like": 16.69,
        "pressure": 1013,
        "humidity": 57,
        "dew_point": 8.7,
        "uvi": 4.54,
        "clouds": 87,
        "visibility": 10000,
        "wind_speed": 3.01,
        "wind_deg": 82,
        "wind_gust": 3.25,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745409600,
        "temp": 17.59,
        "feels_like": 16.87,
        "pressure": 1013,
        "humidity": 56,
        "dew_point": 8.61,
        "uvi": 4.6,
        "clouds": 89,
        "visibility": 10000,
        "wind_speed": 2.83,
        "wind_deg": 72,
        "wind_gust": 3.17,
        "rain": {
          "1h": 0.2
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 0.26
      },
      {
        "dt": 1745413200,
        "temp": 17.39,
        "feels_like": 16.7,
        "pressure": 1012,
        "humidity": 58,
        "dew_point": 9.14,
        "uvi": 4.05,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.77,
        "wind_deg": 56,
        "wind_gust": 2.87,
        "rain": {
          "1h": 0.53
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745416800,
        "temp": 16.97,
        "feels_like": 16.39,
        "pressure": 1012,
        "humidity": 64,
        "dew_point": 9.99,
        "uvi": 3.33,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.29,
        "wind_deg": 53,
        "wind_gust": 3.49,
        "rain": {
          "1h": 0.79
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745420400,
        "temp": 16.57,
        "feels_like": 16.06,
        "pressure": 1011,
        "humidity": 68,
        "dew_point": 10.46,
        "uvi": 1.85,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 2.63,
        "wind_deg": 59,
        "wind_gust": 4.17,
        "rain": {
          "1h": 0.6
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745424000,
        "temp": 16.21,
        "feels_like": 15.79,
        "pressure": 1011,
        "humidity": 73,
        "dew_point": 11.29,
        "uvi": 0.8,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.85,
        "wind_deg": 47,
        "wind_gust": 4.21,
        "rain": {
          "1h": 0.61
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745427600,
        "temp": 15.08,
        "feels_like": 14.68,
        "pressure": 1010,
        "humidity": 78,
        "dew_point": 11.11,
        "uvi": 0.16,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.89,
        "wind_deg": 49,
        "wind_gust": 3.79,
        "rain": {
          "1h": 0.44
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745431200,
        "temp": 12.96,
        "feels_like": 12.45,
        "pressure": 1010,
        "humidity": 82,
        "dew_point": 9.88,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.09,
        "wind_deg": 81,
        "wind_gust": 2.76,
        "rain": {
          "1h": 0.83
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745434800,
        "temp": 11.87,
        "feels_like": 11.38,
        "pressure": 1011,
        "humidity": 87,
        "dew_point": 9.57,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.61,
        "wind_deg": 90,
        "wind_gust": 1.14,
        "rain": {
          "1h": 0.77
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10n"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745438400,
        "temp": 11.04,
        "feels_like": 10.63,
        "pressure": 1012,
        "humidity": 93,
        "dew_point": 9.9,
        "uvi": 0,
        "clouds": 100,
        "visibility": 5514,
        "wind_speed": 1.35,
        "wind_deg": 146,
        "wind_gust": 1.88,
        "rain": {
          "1h": 1.07
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "Mäßiger Regen",
            "icon": "10n"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745442000,
        "temp": 10.97,
        "feels_like": 10.66,
        "pressure": 1012,
        "humidity": 97,
        "dew_point": 10.49,
        "uvi": 0,
        "clouds": 100,
        "visibility": 8670,
        "wind_speed": 2.77,
        "wind_deg": 207,
        "wind_gust": 5.25,
        "rain": {
          "1h": 1.79
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "Mäßiger Regen",
            "icon": "10n"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745445600,
        "temp": 11.18,
        "feels_like": 10.89,
        "pressure": 1013,
        "humidity": 97,
        "dew_point": 10.49,
        "uvi": 0,
        "clouds": 100,
        "visibility": 4334,
        "wind_speed": 4.21,
        "wind_deg": 217,
        "wind_gust": 6.54,
        "rain": {
          "1h": 2.35
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "Mäßiger Regen",
            "icon": "10n"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745449200,
        "temp": 10.35,
        "feels_like": 10,
        "pressure": 1014,
        "humidity": 98,
        "dew_point": 9.93,
        "uvi": 0,
        "clouds": 100,
        "visibility": 4020,
        "wind_speed": 5.39,
        "wind_deg": 260,
        "wind_gust": 8.62,
        "rain": {
          "1h": 2.53
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "Mäßiger Regen",
            "icon": "10n"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745452800,
        "temp": 8.98,
        "feels_like": 5.67,
        "pressure": 1015,
        "humidity": 97,
        "dew_point": 8.39,
        "uvi": 0,
        "clouds": 100,
        "visibility": 2107,
        "wind_speed": 6.86,
        "wind_deg": 264,
        "wind_gust": 10.8,
        "rain": {
          "1h": 5.95
        },
        "weather": [
          {
            "id": 502,
            "main": "Rain",
            "description": "Starker Regen",
            "icon": "10n"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745456400,
        "temp": 8.42,
        "feels_like": 4.98,
        "pressure": 1016,
        "humidity": 96,
        "dew_point": 7.68,
        "uvi": 0,
        "clouds": 100,
        "visibility": 5070,
        "wind_speed": 6.78,
        "wind_deg": 256,
        "wind_gust": 11.17,
        "rain": {
          "1h": 5.98
        },
        "weather": [
          {
            "id": 502,
            "main": "Rain",
            "description": "Starker Regen",
            "icon": "10n"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745460000,
        "temp": 8.05,
        "feels_like": 4.86,
        "pressure": 1016,
        "humidity": 97,
        "dew_point": 7.42,
        "uvi": 0,
        "clouds": 100,
        "visibility": 5782,
        "wind_speed": 5.74,
        "wind_deg": 256,
        "wind_gust": 10.31,
        "rain": {
          "1h": 3.56
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "Mäßiger Regen",
            "icon": "10n"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745463600,
        "temp": 8.12,
        "feels_like": 5.16,
        "pressure": 1016,
        "humidity": 97,
        "dew_point": 7.55,
        "uvi": 0,
        "clouds": 100,
        "visibility": 7442,
        "wind_speed": 5.2,
        "wind_deg": 258,
        "wind_gust": 10.04,
        "rain": {
          "1h": 2.6
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "Mäßiger Regen",
            "icon": "10n"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745467200,
        "temp": 7.76,
        "feels_like": 4.61,
        "pressure": 1016,
        "humidity": 96,
        "dew_point": 7.11,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.44,
        "wind_deg": 258,
        "wind_gust": 10.42,
        "rain": {
          "1h": 1
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10n"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745470800,
        "temp": 7.69,
        "feels_like": 4.55,
        "pressure": 1017,
        "humidity": 95,
        "dew_point": 6.77,
        "uvi": 0.1,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.36,
        "wind_deg": 260,
        "wind_gust": 9.72,
        "rain": {
          "1h": 0.18
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745474400,
        "temp": 7.64,
        "feels_like": 4.73,
        "pressure": 1018,
        "humidity": 95,
        "dew_point": 6.77,
        "uvi": 0.4,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.79,
        "wind_deg": 262,
        "wind_gust": 9.15,
        "rain": {
          "1h": 0.19
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745478000,
        "temp": 7.54,
        "feels_like": 4.57,
        "pressure": 1018,
        "humidity": 95,
        "dew_point": 6.58,
        "uvi": 1.1,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.87,
        "wind_deg": 266,
        "wind_gust": 9.09,
        "rain": {
          "1h": 0.24
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745481600,
        "temp": 7.41,
        "feels_like": 4.65,
        "pressure": 1019,
        "humidity": 94,
        "dew_point": 6.33,
        "uvi": 0.59,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.35,
        "wind_deg": 269,
        "wind_gust": 9.06,
        "rain": {
          "1h": 0.27
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 1
      },
      {
        "dt": 1745485200,
        "temp": 7.4,
        "feels_like": 4.99,
        "pressure": 1019,
        "humidity": 93,
        "dew_point": 6.34,
        "uvi": 2.46,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.66,
        "wind_deg": 273,
        "wind_gust": 8.52,
        "rain": {
          "1h": 0.11
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "pop": 0.95
      },
      {
        "dt": 1745488800,
        "temp": 7.9,
        "feels_like": 5.69,
        "pressure": 1019,
        "humidity": 91,
        "dew_point": 6.44,
        "uvi": 3.39,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.5,
        "wind_deg": 276,
        "wind_gust": 7.82,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04d"
          }
        ],
        "pop": 0.86
      },
      {
        "dt": 1745492400,
        "temp": 8.86,
        "feels_like": 6.89,
        "pressure": 1019,
        "humidity": 87,
        "dew_point": 6.65,
        "uvi": 4.93,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.43,
        "wind_deg": 288,
        "wind_gust": 7.11,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04d"
          }
        ],
        "pop": 0.75
      }
    ],
    "daily": [
      {
        "dt": 1745319600,
        "sunrise": 1745295173,
        "sunset": 1745345793,
        "moonrise": 1745287440,
        "moonset": 1745320860,
        "moon_phase": 0.8,
        "summary": "There will be partly cloudy today",
        "temp": {
          "day": 16.15,
          "min": 7.68,
          "max": 17.01,
          "night": 11.44,
          "eve": 17.01,
          "morn": 8.56
        },
        "feels_like": {
          "day": 15.18,
          "night": 10.68,
          "eve": 16.41,
          "morn": 7.3
        },
        "pressure": 1017,
        "humidity": 52,
        "dew_point": 6.3,
        "wind_speed": 3.31,
        "wind_deg": 229,
        "wind_gust": 7.5,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "Ein paar Wolken",
            "icon": "02d"
          }
        ],
        "clouds": 21,
        "pop": 0,
        "uvi": 5.63
      },
      {
        "dt": 1745406000,
        "sunrise": 1745381463,
        "sunset": 1745432281,
        "moonrise": 1745375040,
        "moonset": 1745412120,
        "moon_phase": 0.83,
        "summary": "You can expect partly cloudy in the morning, with rain in the afternoon",
        "temp": {
          "day": 17.41,
          "min": 10.37,
          "max": 17.59,
          "night": 10.97,
          "eve": 15.08,
          "morn": 11.14
        },
        "feels_like": {
          "day": 16.69,
          "night": 10.66,
          "eve": 14.68,
          "morn": 10.4
        },
        "pressure": 1013,
        "humidity": 57,
        "dew_point": 8.7,
        "wind_speed": 3.29,
        "wind_deg": 53,
        "wind_gust": 5.25,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "Mäßiger Regen",
            "icon": "10d"
          }
        ],
        "clouds": 87,
        "pop": 1,
        "rain": 7.63,
        "uvi": 4.6
      },
      {
        "dt": 1745492400,
        "sunrise": 1745467755,
        "sunset": 1745518768,
        "moonrise": 1745462520,
        "moonset": 1745503500,
        "moon_phase": 0.87,
        "summary": "Expect a day of partly cloudy with rain",
        "temp": {
          "day": 8.86,
          "min": 7.4,
          "max": 11.72,
          "night": 8.52,
          "eve": 10.85,
          "morn": 7.69
        },
        "feels_like": {
          "day": 6.89,
          "night": 7.46,
          "eve": 10.18,
          "morn": 4.55
        },
        "pressure": 1019,
        "humidity": 87,
        "dew_point": 6.65,
        "wind_speed": 6.86,
        "wind_deg": 264,
        "wind_gust": 11.17,
        "weather": [
          {
            "id": 502,
            "main": "Rain",
            "description": "Starker Regen",
            "icon": "10d"
          }
        ],
        "clouds": 100,
        "pop": 1,
        "rain": 25.56,
        "uvi": 4.93
      },
      {
        "dt": 1745578800,
        "sunrise": 1745554048,
        "sunset": 1745605256,
        "moonrise": 1745549880,
        "moonset": 1745595000,
        "moon_phase": 0.91,
        "summary": "Expect a day of partly cloudy with rain",
        "temp": {
          "day": 8.63,
          "min": 6.74,
          "max": 10.28,
          "night": 6.74,
          "eve": 7.02,
          "morn": 7.67
        },
        "feels_like": {
          "day": 5.98,
          "night": 6.74,
          "eve": 7.02,
          "morn": 5.26
        },
        "pressure": 1021,
        "humidity": 90,
        "dew_point": 7.01,
        "wind_speed": 5.01,
        "wind_deg": 320,
        "wind_gust": 8.42,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "clouds": 99,
        "pop": 1,
        "rain": 1.52,
        "uvi": 3.92
      },
      {
        "dt": 1745665200,
        "sunrise": 1745640341,
        "sunset": 1745691744,
        "moonrise": 1745637300,
        "moonset": 1745686560,
        "moon_phase": 0.94,
        "summary": "You can expect partly cloudy in the morning, with clearing in the afternoon",
        "temp": {
          "day": 12.41,
          "min": 4.83,
          "max": 14.61,
          "night": 6.08,
          "eve": 9.71,
          "morn": 7.02
        },
        "feels_like": {
          "day": 11.38,
          "night": 3.66,
          "eve": 8.13,
          "morn": 4.7
        },
        "pressure": 1021,
        "humidity": 64,
        "dew_point": 5.59,
        "wind_speed": 6.22,
        "wind_deg": 82,
        "wind_gust": 7.74,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "Überwiegend bewölkt",
            "icon": "04d"
          }
        ],
        "clouds": 75,
        "pop": 0,
        "uvi": 5.12
      },
      {
        "dt": 1745751600,
        "sunrise": 1745726636,
        "sunset": 1745778231,
        "moonrise": 1745724840,
        "moonset": 1745778420,
        "moon_phase": 0,
        "summary": "There will be clear sky until morning, then partly cloudy",
        "temp": {
          "day": 15.57,
          "min": 2.38,
          "max": 15.79,
          "night": 9.6,
          "eve": 11.97,
          "morn": 7.38
        },
        "feels_like": {
          "day": 14.54,
          "night": 9.35,
          "eve": 11.1,
          "morn": 5.85
        },
        "pressure": 1023,
        "humidity": 52,
        "dew_point": 5.73,
        "wind_speed": 3.19,
        "wind_deg": 69,
        "wind_gust": 9.77,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "Bedeckt",
            "icon": "04d"
          }
        ],
        "clouds": 97,
        "pop": 0,
        "uvi": 6
      },
      {
        "dt": 1745838000,
        "sunrise": 1745812933,
        "sunset": 1745864719,
        "moonrise": 1745812620,
        "moonset": 1745870340,
        "moon_phase": 0.02,
        "summary": "The day will start with partly cloudy through the late morning hours, transitioning to clearing",
        "temp": {
          "day": 17.46,
          "min": 7.22,
          "max": 17.93,
          "night": 9.78,
          "eve": 13.34,
          "morn": 9.86
        },
        "feels_like": {
          "day": 16.54,
          "night": 8.6,
          "eve": 12.64,
          "morn": 9.41
        },
        "pressure": 1020,
        "humidity": 49,
        "dew_point": 6.44,
        "wind_speed": 4.3,
        "wind_deg": 81,
        "wind_gust": 4.62,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "Klarer Himmel",
            "icon": "01d"
          }
        ],
        "clouds": 3,
        "pop": 0,
        "uvi": 6
      },
      {
        "dt": 1745924400,
        "sunrise": 1745899230,
        "sunset": 1745951206,
        "moonrise": 1745900820,
        "moonset": 1745962080,
        "moon_phase": 0.06,
        "summary": "You can expect partly cloudy in the morning, with rain in the afternoon",
        "temp": {
          "day": 21.52,
          "min": 7.3,
          "max": 21.52,
          "night": 12.71,
          "eve": 15.57,
          "morn": 10.84
        },
        "feels_like": {
          "day": 21.06,
          "night": 12.33,
          "eve": 15.27,
          "morn": 10.09
        },
        "pressure": 1012,
        "humidity": 51,
        "dew_point": 10.78,
        "wind_speed": 3.75,
        "wind_deg": 43,
        "wind_gust": 3.63,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "Leichter Regen",
            "icon": "10d"
          }
        ],
        "clouds": 22,
        "pop": 1,
        "rain": 3.03,
        "uvi": 6
      }
    ]
  },
  "locationData": {
    "name": "Augsburg",
    "local_names": {
      "fa": "اوگسبورگ",
      "la": "Augusta Vindelicorum",
      "lv": "Augsburga",
      "cs": "Augšpurk",
      "tr": "Augsburg",
      "br": "Augsburg",
      "de": "Augsburg",
      "zh": "奥格斯堡",
      "ar": "أوغسبورغ",
      "th": "เอาก์สบูร์ก",
      "ru": "Аугсбург",
      "eu": "Augsburg",
      "sr": "Аугсбург",
      "fr": "Augsbourg",
      "ka": "აუგსბურგი",
      "es": "Augsburgo",
      "hy": "Աուգսբուրգ",
      "en": "Augsburg",
      "ja": "アウクスブルク",
      "uk": "Аугсбург",
      "eo": "Aŭgsburgo",
      "it": "Augusta"
    },
    "lat": 48.3668041,
    "lon": 10.8986971,
    "country": "DE",
    "state": "Bavaria"
  }
}