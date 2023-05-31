import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { useContacts } from "../../hooks/useContacts";

export const Dashboard = () => {
  const { contacts } = useContacts();

  return (
    <>
      <Header contacts={contacts.length} />
      <Outlet />
    </>
  );
};
