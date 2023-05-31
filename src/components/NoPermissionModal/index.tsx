import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal";
import { StyledNoPermissionModal } from "./styles";

type NoPermissionModalProps = {
  toggleModal: () => void;
};

export const NoPermissionModal = ({ toggleModal }: NoPermissionModalProps) => {
  const navigate = useNavigate()

  const handleReturn = () => {
    localStorage.removeItem("@TOKEN")
    toggleModal()
    navigate("login")
  }

  return (
    <Modal toggleModal={toggleModal} noClose={true}>
      <StyledNoPermissionModal>
        <h2>Erro de autenticação</h2>
        <div>
          <h3>Você não tem permissão para acessar a página!</h3>
          <button onClick={handleReturn}>Voltar para o login</button>
        </div>
      </StyledNoPermissionModal>
    </Modal>
  );
};
