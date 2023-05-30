import { MdContacts } from "react-icons/md";
import { StyledContatosVazio } from "./styles";

export const ContatosVazio = () => {
  return (
    <StyledContatosVazio>
      <MdContacts />
      <h2>Sua lista de contatos está vazia :(</h2>
    </StyledContatosVazio>
  );
};
