import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  Contact,
  ContactProviderProps,
  ContactProviderValues,
  iRegisterContactData,
} from "./types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ContactContext = createContext<ContactProviderValues>(
  {} as ContactProviderValues
);

export const ContactContextProvider = ({ children }: ContactProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([] as Contact[]);
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const res = await api.get<Contact[]>("contacts");
      setContacts(res.data);
    })();
  }, []);

  const refresh = async () => {
    try {
      const res = await api.get<Contact[]>("contacts");
      setContacts(res.data);
    } catch (err) {
      navigate("login")
    }
  };

  const contactRegister = async (data: iRegisterContactData) => {
    try {
      await api.post("contacts", { ...data, phone: Number(data.phone) });
    } catch (err) {
      toast.error("Não foi possível realizar o cadastro.");
      console.error(err);
    }
  };

  return (
    <ContactContext.Provider value={{ contactRegister, contacts, setContacts, refresh }}>
      {children}
    </ContactContext.Provider>
  );
};
