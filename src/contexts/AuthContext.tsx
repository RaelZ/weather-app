import React, { createContext, useEffect, useState } from 'react';
import type { FC } from 'react';
import { TAuthContext } from '../types/TAuthContext';
import { authApi } from '../api/Auth';
import axios from 'axios';
import { ICreate, ILogin } from '../models/ILogin';

export const AuthContext = createContext<TAuthContext>({
  logged: false,
  handleLogin: Function,
  handleLogout: Function,
  handleCreate: Function,
  setUserName: Function,
});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState();
  const [userName, setUserName] = useState('');
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const itemUser = sessionStorage.getItem('user');
    const itemUserName = sessionStorage.getItem('userName');
    if (token && itemUser && itemUserName) {
      axios.defaults.headers.common['Authorization'] = token;
      getUser(itemUser);
      setUserName(itemUserName);
      setLogged(true);
    } else handleLogout();
  }, []);

  const getUser = async (id: string) => {
    const { success, data } = await authApi.getUser(id);
    if (success) setUser(data);
  };

  const handleLogin = async (login: ILogin) => {
    const { success, data } = await authApi.signIn(login);
    if (success) {
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('user', data.id);
      sessionStorage.setItem('userName', data.name);
      axios.defaults.headers.common['Authorization'] = data.token;
      await getUser(data.id);
      setLogged(true);
      return true;
    } else {
      handleLogout();
      return false;
    }
  };

  const handleCreate = async (create: ICreate) => {
    const { success, data } = await authApi.signUp(create);
    if (success) {
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('user', data.id);
      sessionStorage.setItem('userName', data.name);
      axios.defaults.headers.common['Authorization'] = data.token;
      await getUser(data.id);
      setLogged(true);
      return true;
    } else return false;
  };

  const handleLogout = async () => {
    sessionStorage.clear();
    axios.defaults.headers.common['Authorization'] = '';
    setLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{
        logged,
        handleLogin,
        handleLogout,
        handleCreate,
        user,
        userName,
        setUserName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
