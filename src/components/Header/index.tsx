import { useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { StyledHeader } from "./styles";
import { iHeader } from "./types";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { AddContactModal } from "../AddContactModal";

export function Header({ contacts }: iHeader) {
  const [menuDrop, setMenuDrop] = useState("" as string);

  function handleClick(): void {
    menuDrop === "active" ? setMenuDrop("") : setMenuDrop("active");
  }

  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal)

  return (
    <StyledHeader contacts={contacts}>
      <Logo />
      <nav className={menuDrop}>
        <div>
          <button onClick={handleModal}>
            <BsPersonFillAdd />
          </button>
          <button
            onClick={handleClick}
            aria-label={menuDrop ? "Fechar Menu" : "Abrir Menu"}
            aria-haspopup="true"
            aria-expanded={Boolean(menuDrop)}
          >
            <span></span>
          </button>
        </div>
        <ul role="menu">
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"perfil"}>Perfil</Link>
          </li>
          <li>
            <Link to={"sobre"}>Sobre</Link>
          </li>
        </ul>
      </nav>
      {modal && <AddContactModal toggleModal={handleModal} />}
    </StyledHeader>
  );
}
