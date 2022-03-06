export interface ICity {
  temp: number;
  date: string;
  time: string;
  cityId: number;
  condition_code: string;
  description: string;
  currently: string;
  cid: string;
  city: string;
  img_id: string;
  humidity: number;
  wind_speedy: string;
  sunrise: string;
  sunset: string;
  condition_slug: string;
  city_name: string;
  forecast: Array<IForecast>;
  latitude: number;
  longitude: number;
}

export interface IForecast {
  date: string;
  weekday: string;
  max: number;
  min: number;
  description: string;
  condition: string;
}