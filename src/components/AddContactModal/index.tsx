import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { StyledAddContactForm } from "./styles";
import { useForm } from "react-hook-form";
import { RegisterContactData, schema } from "./validation";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useContacts } from "../../hooks/useContacts";
import { Contact } from "../../contexts/ContactContexts/types";
import { Input } from "../Input";

type AddContactModalProps = {
  toggleModal: () => void;
};

export const AddContactModal = ({ toggleModal }: AddContactModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterContactData>({
    resolver: zodResolver(schema),
  });

  const { setContacts } = useContacts();

  const createContact = async (data: RegisterContactData) => {
    try {
      const res = await api.post<Contact>("/contacts", {
        ...data,
      });

      setContacts((previousContacts) => [res.data, ...previousContacts]);
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
      <StyledAddContactForm onSubmit={handleSubmit(createContact)}>
        <h2>Adicionar Contato</h2>
        <Input
          id="name"
          label="Nome"
          placeholder="Insira o nome do contato..."
          type="text"
          {...register("name")}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <Input
          id="email"
          label="E-mail"
          placeholder="Insira o e-mail do contato..."
          type="email"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          id="phone"
          label="Telefone"
          placeholder="Insira o telefone do contato..."
          type="number"
          {...register("phone")}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
        <button type="submit">Adicionar</button>
      </StyledAddContactForm>
    </Modal>
  );
};
