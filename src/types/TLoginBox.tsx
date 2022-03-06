export type TLoginBox = {
  login: {
    email: string;
    password: string;
  };
  setLogin: Function;
  setOpen: Function;
  handleSubmit: Function;
  load: boolean;
};
