import { useEffect } from "react";
import { ContactCard } from "../../../components/ContactCard";
import { StyledContact } from "./styles";
import { useContacts } from "../../../hooks/useContacts";
import { ContactsEmpty } from "../../../components/ContactEmpty";

export const Contatos = () => {
  const { contacts, refresh } = useContacts();

  useEffect(() => {
    refresh();
  }, []);

  return (
    <StyledContact>
      <h2>Meus Contatos</h2>
      <ul>
        {contacts.length>0 ? contacts.map((contact) => (
          <ContactCard contact={contact} key={contact.id} />
        )) : <ContactsEmpty />}
      </ul>
    </StyledContact>
  );
};
