import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, checkApi } from "../../services/api";
import {
  UserProviderProps,
  UserProviderValues,
  iEditData,
  iRegisterData,
  iUser,
} from "./types";
import { toast } from "react-toastify";

export const UserContext = createContext<UserProviderValues>(
  {} as UserProviderValues
);

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState({} as iUser);
  const [reqLoading, setReqLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const userRetrieve = async () => {
    try {
      const user = await api.patch<iUser>("users");
      setUser(user.data);
    } catch (err) {
      toast.error("Não foi pegar os dados do usuário.");
      console.error(err);
    }
  };

  const userRegister = async (data: iRegisterData) => {
    try {
      await api
        .post("users", { ...data })
        .then(() => {
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

  const userEdit = async (data: iEditData) => {
    try {
      await api
        .patch("users", { ...data })
        .then(() => {
          toast.success("Usuário editado com sucesso!");
        })
        .catch((err) => {
          if (err.response.status == 409) {
            toast.error("E-mail de usuário já esta em uso.");
          }
        });
      userRetrieve();
    } catch (err) {
      toast.error("Não foi possível editar o usuário.");
      console.error(err);
    }
  };

  const userDelete = async () => {
    try {
      await api.delete("users");
      toast.success("Usuário deletado com sucesso!");
      localStorage.removeItem("@TOKEN")
      navigate("")
    } catch (err) {
      toast.error("Não foi possível deletar o usuário.");
      console.error(err);
    }
  };

  const apiWorking = async () => {
    try {
      setReqLoading(true)
      await checkApi.get("")
      toast.success("Api funcionando!");
    } catch (error) {
      toast.error("Api não está funcionando!")
    } finally {
      setReqLoading(false)
    }
  }

  return (
    <UserContext.Provider
      value={{ userRegister, userEdit, setUser, user, userRetrieve, userDelete, apiWorking, reqLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
