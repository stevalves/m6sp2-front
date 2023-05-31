import { AiOutlineEdit, AiOutlineMail } from "react-icons/ai";
import { StyledPerfil } from "./styles";
import { useUsers } from "../../../hooks/useUsers";
import { useEffect, useState } from "react";
import { getDate } from "../../../utils/formatarData";
import { FiPhoneCall } from "react-icons/fi";
import { EditUserModal } from "../../../components/EditUserModal";

export const Perfil = () => {
  const { user, userRetrieve } = useUsers();

  const [editModal, setEditModal] = useState(false);
  const handleEditModal = () => setEditModal(!editModal);

  useEffect(() => {
    userRetrieve();
  }, []);

  const { created_at, email, name, phone } = user;

  return (
    <StyledPerfil>
      <h2>Meus Dados</h2>
      <div>
        <div>
          <div>
            <h2>{name}</h2>
            <button onClick={handleEditModal}>
              <AiOutlineEdit />
            </button>
          </div>
          <div>
            <h3>
              <AiOutlineMail /> <span>{email}</span>
            </h3>
            <h3>
              <FiPhoneCall /> <span>{phone}</span>
            </h3>
          </div>
          <h4>Criado em: {getDate(created_at)}</h4>
        </div>
      </div>
      {editModal && <EditUserModal toggleModal={handleEditModal} user={user} />}
    </StyledPerfil>
  );
};
