import { useEffect, useState } from "react";
import { ContactCard } from "../../../components/ContactCard";
import { Modal } from "../../../components/Modal";
import { StyledContact } from "./styles";
import { useContacts } from "../../../hooks/useContacts";

export const Contatos = () => {
  const { contacts, refresh } = useContacts();

  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal);

  useEffect(() => {
    refresh();
  }, []);

  return (
    <StyledContact>
      <h2>Meus Contatos</h2>
      <ul>
        {contacts.map((contact) => (
          <ContactCard contact={contact} />
        ))}
      </ul>
      {modal && (
        <Modal toggleModal={handleModal}>
          <></>
        </Modal>
      )}
    </StyledContact>
  );
};
