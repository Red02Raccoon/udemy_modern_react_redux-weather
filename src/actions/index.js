import axios from "axios";

const API_KEY = "0b6c1ff5605b99b94aa899b8af970c05";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function featchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
