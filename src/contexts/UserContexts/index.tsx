import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { UserProviderProps, UserProviderValues, iRegisterData } from "./types";
import { toast } from "react-toastify";

export const UserContext = createContext<UserProviderValues>(
  {} as UserProviderValues
);

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();

  const userRegister = async (data: iRegisterData) => {
    try {
      await api
        .post("users", { ...data, phone: Number(data.phone) }).then(() => {
            toast.success("Usuário cadastrado com sucesso!");
            navigate("/login");
        })
        .catch((err) => {
          if (err.response.status == 409) {
            toast.error("E-mail de usuário já esta em uso.");
          }
        });

    } catch (err) {
      toast.error("Não foi possível realizar o cadastro.");
      console.error(err);
    }
  };

  return (
    <UserContext.Provider value={{ userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
