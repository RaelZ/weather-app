import axios from 'axios';
import { GET, POST } from '../config';
import { ILogin } from '../models/ILogin';
import { IUser } from '../models/IUser';

class AuthApi {
  signIn = async (data: ILogin) =>
    axios
      .post<IUser>(POST.signIn, data)
      .then((res) => ({ success: true, data: res.data }))
      .catch((err) => ({ success: false, data: err }));

  signUp = async (data: ILogin) =>
    axios
      .post<IUser>(POST.signUp, data)
      .then((res) => ({ success: true, data: res.data }))
      .catch((err) => ({ success: false, data: err }));

  getUser = async (id: string) =>
    axios
      .get<IUser>(`${GET.user}${id}`)
      .then((res) => ({ success: true, data: res.data }))
      .catch((err) => ({ success: false, data: err }));
}

export const authApi = new AuthApi();
