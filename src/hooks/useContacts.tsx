import { useContext } from "react";
import { ContactContext } from "../contexts/ContactContexts";

export const useContacts = () => {
  const contactsContext = useContext(ContactContext);

  return contactsContext
};
