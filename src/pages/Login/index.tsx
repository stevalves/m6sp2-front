import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();

  return (
    <main>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(signIn)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="password">password</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
