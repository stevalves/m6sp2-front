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
  loading: boolean;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) return setLoading(false);

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const res = await api.post("/login", data);
      const { token } = res.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("@TOKEN", token);

      toast.success("Login feito com sucesso!");
      navigate("dashboard");
    } catch (err) {
      toast.error("Não foi possível realizar o login.");
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
