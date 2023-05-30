import { ReactNode } from "react";

export type iRegisterData = {
  name: string;
  email: string;
  password: string;
  phone: number;
};

export interface UserProviderProps {
  children: ReactNode;
}

export interface UserProviderValues {
    userRegister: (data: iRegisterData | any) => void;
}
