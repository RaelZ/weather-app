export type TCreateBox = {
  create: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  setCreate: Function;
  setOpen: Function;
  handleSubmit: Function;
  load: boolean;
  err: boolean;
};
