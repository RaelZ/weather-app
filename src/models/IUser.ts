export type IUser = {
  id: string;
  name: string;
  email: string;
  favoriteCities?: Array<ICities>;
  token?: string;
}
export interface ICities {
  name: string;
  cityId: number;
}
