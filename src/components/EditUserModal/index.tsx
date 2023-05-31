import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { StyledEditUserForm } from "./styles";
import { useForm } from "react-hook-form";
import { EditUserData, schema } from "./validation";
import { Input } from "../Input";
import { useUsers } from "../../hooks/useUsers";
import { iUser } from "../../contexts/UserContexts/types";

type EditUserModalProps = {
  toggleModal: () => void;
  user: iUser;
};

export const EditUserModal = ({
  toggleModal,
  user,
}: EditUserModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserData>({
    resolver: zodResolver(schema),
  });

  const { userEdit, userDelete } = useUsers();

  const { name, email, phone, password } = user;

  const editUser = async (data: EditUserData) => {
      userEdit(data)
      toggleModal();
  };

  const deleteUser = async () => {
    userDelete()
    toggleModal();
};

  return (
    <Modal toggleModal={toggleModal}>
      <StyledEditUserForm onSubmit={handleSubmit(editUser)}>
        <h2>Editar Usuário</h2>
        <Input
          id="name"
          label="Nome"
          placeholder="Insira o nome do usuário..."
          type="text"
          value={name}
          {...register("name")}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <Input
          id="email"
          label="E-mail"
          placeholder="Insira o e-mail do usuário..."
          type="email"
          value={email}
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          id="password"
          label="Senha"
          placeholder="Insira a senha do usuário..."
          type="password"
          value={password}
          {...register("password")}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          id="phone"
          label="Telefone"
          placeholder="Insira o telefone do usuário..."
          type="number"
          value={String(phone)}
          {...register("phone")}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
        <button type="submit">Salvar</button>
        <button onClick={deleteUser}>Deletar Usuário</button>
      </StyledEditUserForm>
    </Modal>
  );
};
