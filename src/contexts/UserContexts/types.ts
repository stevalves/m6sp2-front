import { ReactNode } from "react";

export type iUser = {
  id: string
  name: string;
  email: string;
  password: string;
  phone: number | string;
  created_at: string;
}

export type iUserEdit = {
  id?: string
  name?: string;
  email?: string;
  password?: string;
  phone?: number | string;
  created_at?: string;
}

export type iRegisterData = {
  name: string;
  email: string;
  password: string;
  phone: number | string;
};

export type iEditData = {
  name?: string;
  email?: string;
  password?: string;
  phone?: number | string;
};

export interface UserProviderProps {
  children: ReactNode;
}

export interface UserProviderValues {
    userRegister: (data: iRegisterData) => void;
    userEdit: (data: iEditData) => void;
    userRetrieve: () => Promise<void>;
    setUser: React.Dispatch<React.SetStateAction<iUser>>;
    user: iUser;
    userDelete: () => Promise<void>
}
