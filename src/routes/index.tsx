import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Homepage } from "../pages/Homepage";
import { Register } from "../pages/Register";
import { Contatos } from "../pages/Dashboard/Contatos";
import { Sobre } from "../pages/Dashboard/Sobre";
import { Perfil } from "../pages/Dashboard/Perfil";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Homepage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Contatos />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

