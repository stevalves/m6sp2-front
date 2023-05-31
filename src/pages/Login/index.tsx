import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";
import { StyledLogin } from "./styles";
import { Form } from "../../components/Form";
import { Link } from "react-router-dom";
import { LoadingRing } from "../../styles/loading";
import { Input } from "../../components/Input";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const { signIn, reqLoading } = useAuth();

  return (
    <StyledLogin>
      <Form formTitle="Login" submiter={handleSubmit(signIn)}>
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

        <button type="submit" disabled={reqLoading}>
          {reqLoading ? <LoadingRing /> : "Entrar"}
        </button>
        <Link to={"/register"}>Não possui registro?</Link>
      </Form>
    </StyledLogin>
  );
};
