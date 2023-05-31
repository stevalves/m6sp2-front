import { useEffect } from "react";
import { ContactCard } from "../../../components/ContactCard";
import { StyledContact } from "./styles";
import { useContacts } from "../../../hooks/useContacts";
import { ContactsEmpty } from "../../../components/ContactEmpty";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { getDate } from "../../../utils/formatarData";

export const Contatos = () => {
  const { contacts, refresh } = useContacts();

  useEffect(() => {
    refresh();
  }, []);

  const pdf = (): void => {
    const arr: string[][] = [];
    contacts.forEach((contact) => {
      arr.push([
        contact.name,
        contact.email,
        contact.phone,
        getDate(contact.created_at),
      ]);
    });

    const doc = new jsPDF();
    doc.text(`Foram gerados ${contacts.length} contatos`, 20, 10);
    autoTable(doc, {
      head: [["Nome", "E-mail", "Telefone", "Criado em"]],
      body: arr,
    });
    doc.save("relatorio")
  };

  return (
    <StyledContact>
      <div>
        <h2>Meus Contatos</h2>
        <button onClick={pdf}>Gerar Relatório</button>
      </div>
      <ul>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard contact={contact} key={contact.id} />
          ))
        ) : (
          <ContactsEmpty />
        )}
      </ul>
    </StyledContact>
  );
};
