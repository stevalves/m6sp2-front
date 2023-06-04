import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, schema } from "./validator";
import { StyledRegister } from "./styles";
import { Form } from "../../components/Form";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import { Input } from "../../components/Input";
import { ApiWorking } from "../../components/ApiWorking";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const { userRegister } = useUsers();

  return (
    <StyledRegister>
      <ApiWorking />
      <Form formTitle="Registro" submiter={handleSubmit(userRegister)}>
        <Input
          id="name"
          label="Nome"
          placeholder="Insira seu nome..."
          type="text"
          {...register("name")}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <Input
          id="email"
          label="E-mail"
          placeholder="Insira seu e-mail..."
          type="email"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          id="password"
          label="Senha"
          placeholder="Insira sua senha..."
          type="password"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <Input
          id="phone"
          label="Telefone"
          placeholder="Insira seu telefone..."
          type="number"
          {...register("phone")}
        />
        {errors.phone && <span>{errors.phone.message}</span>}

        <button type="submit">Cadastrar</button>
        <Link to={"/login"}>Já possui cadastro?</Link>
      </Form>
    </StyledRegister>
  );
};
