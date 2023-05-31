import { Modal } from "../Modal";
import { StyledDeleteContact } from "./styles";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useContacts } from "../../hooks/useContacts";
import { Contact } from "../../contexts/ContactContexts/types";

type DeleteContactModalProps = {
  toggleModal: () => void;
  contactId: string;
  contactName: string;
};

export const DeleteContactModal = ({
  toggleModal,
  contactId,
  contactName,
}: DeleteContactModalProps) => {
  const { refresh } = useContacts();

  const deleteContact = async () => {
    try {
      await api.delete<Contact>(`/contacts/${contactId}`);

      refresh();
      toggleModal();
      toast.success("Contato deletado com sucesso!");
    } catch (error) {
      console.error(error);
      toggleModal();
      toast.error("Não foi possível deletar o contato!");
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <StyledDeleteContact>
        <h2>Deletar Contato</h2>
        <h4>
          Você está <span>deletando</span> o contato<span>{contactName}</span>
          Você tem certeza?
        </h4>
        <div>
          <button onClick={deleteContact}>Sim</button>
          <button onClick={toggleModal}>Não</button>
        </div>
      </StyledDeleteContact>
    </Modal>
  );
};
