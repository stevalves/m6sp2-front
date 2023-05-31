import { ReactNode } from "react";

export interface iRegisterContactData {
  name: string;
  email: string;
  phone: string;
}

export interface Contact extends iRegisterContactData {
  id: string;
  created_at: string;
}

export interface ContactProviderProps {
  children: ReactNode;
}

export interface ContactProviderValues {
  contactRegister: (data: iRegisterContactData) => void;
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  refresh: () => Promise<void>;
}
