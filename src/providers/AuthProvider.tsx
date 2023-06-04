import { createContext } from "react";
import { LoginData } from "../pages/Login/validator";
import { ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  signOut: () => void
  loading: boolean;
  reqLoading: boolean;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [reqLoading, setReqLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) return setLoading(false);

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      setReqLoading(true);
      const res = await api.post("/login", data);
      const { token } = res.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("@TOKEN", token);

      toast.success("Login feito com sucesso!");
      navigate("dashboard");
    } catch (err) {
      toast.error("Não foi possível realizar o login.");
      console.error(err);
    } finally {
      setReqLoading(false);
    }
  };

  const signOut = () => {
    try {
      localStorage.removeItem("@TOKEN");
      toast.success("Sessão finalizada!");
      navigate("");
    } catch (err) {
      toast.error("Não foi possível finalizar a sessão.");
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, loading, reqLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
