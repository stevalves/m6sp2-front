import { useContext } from "react";
import { UserContext } from "../contexts/UserContexts";

export const useUsers = () => {
  const userContext = useContext(UserContext);

  return userContext
};
