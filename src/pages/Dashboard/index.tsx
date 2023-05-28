import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: number;
  created_at: Date;
}

export const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  useEffect(() => {
    (async () => {
      const res = await api.get<Contact[]>("contacts");
      setContacts(res.data);
    })();
  }, []);

  return (
    <>
      <h1>dash</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </>
  );
};
