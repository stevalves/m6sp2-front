import { MdContacts } from "react-icons/md";
import { StyledContactsEmpty } from "./styles";

export const ContactsEmpty = () => {
  return (
    <StyledContactsEmpty>
      <MdContacts />
      <h2>Sua lista de contatos está vazia :(</h2>
    </StyledContactsEmpty>
  );
};
