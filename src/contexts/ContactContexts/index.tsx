import { createContext, useState } from "react";
import { api } from "../../services/api";
import {
  Contact,
  ContactProviderProps,
  ContactProviderValues,
  iRegisterContactData,
} from "./types";
import { toast } from "react-toastify";

export const ContactContext = createContext<ContactProviderValues>(
  {} as ContactProviderValues
);

export const ContactContextProvider = ({ children }: ContactProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([] as Contact[]);

  const refresh = async () => {
    try {
      const res = await api.get<Contact[]>("contacts");
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const contactRegister = async (data: iRegisterContactData) => {
    try {
      await api.post("contacts", { ...data });
    } catch (err) {
      toast.error("Não foi possível realizar o cadastro.");
      console.error(err);
    }
  };

  return (
    <ContactContext.Provider
      value={{ contactRegister, contacts, setContacts, refresh }}
    >
      {children}
    </ContactContext.Provider>
  );
};
