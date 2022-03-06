const API = process.env.REACT_APP_API_URL;

export const DELETE = {
  removeFav: `${API}users/favorite-city/`,
};
export const GET = {
  weather: `${API}weather`,
  user: `${API}user/`,
  favoriteCities: `${API}user/favorite-city/weather`,
  getWoeid: `${API}cities/city`,
};
export const POST = {
  signIn: `${API}auth/signin`,
  signUp: `${API}auth/signup`,
};
export const PATCH = {
  addFav: `${API}users/favorite-city`,
};
