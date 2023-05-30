import { StyledContactCard } from "./styles";
import { AiOutlineMail, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { Contact } from "../../contexts/ContactContexts/types";
import { useState } from "react";
import { EditContactModal } from "../EditContactModal";

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  const { name, created_at, email, id, phone } = contact;
  const getDate = (data: string) => {
    const date = new Date(data);
    const day =
      String(date.getDate()).length > 1 ? date.getDate() : "0" + date.getDate();
    const hours =
      String(date.getHours()).length > 1
        ? date.getHours()
        : "0" + date.getHours();
    const minutes =
      String(date.getMinutes()).length > 1
        ? date.getMinutes()
        : "0" + date.getMinutes();
    const month =
      String(date.getMonth()).length > 1
        ? date.getMonth()
        : "0" + date.getMonth();
    return `${day}/${month}/${date.getFullYear()} ${hours}:${minutes}`;
  };

  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal);

  return (
    <StyledContactCard key={id}>
      <div>
        <h3>{name}</h3>
        <div>
          <button onClick={handleModal}>
            <AiOutlineEdit />
          </button>
          <button>
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
      {modal && <EditContactModal toggleModal={handleModal} contact={contact} />}
    </StyledContactCard>
  );
};
