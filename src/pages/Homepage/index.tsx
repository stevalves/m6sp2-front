import { Link } from "react-router-dom";
import { StyledHomepage } from "./styles";
import { Logo } from "../../components/Logo";

export function Homepage() {
  return (
    <StyledHomepage>
      <div>
        <Logo shadow={true} />
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/register"}>
          <button>Register</button>
        </Link>
      </div>
    </StyledHomepage>
  );
}
