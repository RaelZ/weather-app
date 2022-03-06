import { IUser } from "../models/IUser";

export type TAuthContext = {
  logged: boolean;
  user?: IUser;
  userName?: string;
  handleLogin: Function;
  handleLogout: Function;
  handleCreate: Function;
  setUserName: Function;
}
