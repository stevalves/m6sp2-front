import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { StyledEditContactForm } from "./styles";
import { useForm } from "react-hook-form";
import { EditContactData, schema } from "./validation";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useContacts } from "../../hooks/useContacts";
import { Contact } from "../../contexts/ContactContexts/types";
import { Input } from "../Input";

type EditContactModalProps = {
  toggleModal: () => void;
  contact: Contact;
};

export const EditContactModal = ({
  toggleModal,
  contact,
}: EditContactModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditContactData>({
    resolver: zodResolver(schema),
  });

  const { refresh } = useContacts();

  const { name, email, phone } = contact;

  const editContact = async (data: EditContactData) => {
    try {
      await api.patch<Contact>(`/contacts/${contact.id}`, {
        ...data,
      });

      refresh();
      toggleModal();
      toast.success("Contato cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      toggleModal();
      toast.error("Não foi possível cadastrar o contato!");
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <StyledEditContactForm onSubmit={handleSubmit(editContact)}>
        <h2>Editar Contato</h2>
        <Input
          id="name"
          label="Nome"
          placeholder="Insira o nome do contato..."
          type="text"
          value={name}
          {...register("name")}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <Input
          id="email"
          label="E-mail"
          placeholder="Insira o e-mail do contato..."
          type="email"
          value={email}
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          id="phone"
          label="Telefone"
          placeholder="Insira o telefone do contato..."
          type="number"
          value={String(phone)}
          {...register("phone")}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
        <button type="submit">Salvar</button>
      </StyledEditContactForm>
    </Modal>
  );
};
