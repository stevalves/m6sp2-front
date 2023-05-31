import { StyledContactCard } from "./styles";
import { AiOutlineMail, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { Contact } from "../../contexts/ContactContexts/types";
import { useState } from "react";
import { EditContactModal } from "../EditContactModal";
import { DeleteContactModal } from "../DeleteContactModal";
import { getDate } from "../../utils/formatarData";

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  const { name, created_at, email, id, phone } = contact;

  const [editModal, setEditModal] = useState(false);
  const handleEditModal = () => setEditModal(!editModal);

  const [deleteModal, setDeleteModal] = useState(false);
  const handleDeleteModal = () => setDeleteModal(!deleteModal);

  return (
    <StyledContactCard key={id}>
      <div>
        <h3>{name}</h3>
        <div>
          <button onClick={handleEditModal}>
            <AiOutlineEdit />
          </button>
          <button onClick={handleDeleteModal}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
      <div>
        <h2>
          <AiOutlineMail /> {email}
        </h2>
        <h2>
          <FiPhoneCall /> {phone}
        </h2>
        <h2>
          <MdDateRange /> {getDate(created_at)}
        </h2>
      </div>
      {deleteModal && (
        <DeleteContactModal
          toggleModal={handleDeleteModal}
          contactId={contact.id}
          contactName={contact.name}
        />
      )}
      {editModal && (
        <EditContactModal toggleModal={handleEditModal} contact={contact} />
      )}
    </StyledContactCard>
  );
};
