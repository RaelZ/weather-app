import axios from "axios";
import { DELETE, GET, PATCH } from "../config";

class CityApi {
  getCity = (cityName: string) =>
    axios
      .get(GET.weather, { params: { cityName } })
      .then((res) => ({ success: true, data: res.data }))
      .catch((err) => ({ success: false, data: err }));

  getFavCity = () =>
    axios
      .get(GET.favoriteCities)
      .then((res) => ({ success: true, data: res.data }))
      .catch((err) => ({ success: false, data: err }));

  getCityId = (id: string) =>
    axios
      .get(GET.user + id)
      .then((res) => ({ success: true, data: res.data }))
      .catch((err) => ({ success: true, data: err }));
      
  getWoeId = (cityName: string) =>
    axios
      .get(GET.getWoeid, { params: { cityName } })
      .then((res) => ({ success: true, data: res.data }))
      .catch((err) => ({ success: true, data: err }));

  addFav = (cityName: string, cityId: number) =>
    axios
      .patch(PATCH.addFav, { cityName, cityId })
      .then((res) => ({ success: true, data: res.data }))
      .catch((err) => ({ success: true, data: err }));

  removeFav = (cityId: number) =>
    axios
      .delete(DELETE.removeFav + cityId)
      .then((res) => ({ success: true, data: res.data }))
      .catch((err) => ({ success: true, data: err }));
}

export const cityApi = new CityApi();
