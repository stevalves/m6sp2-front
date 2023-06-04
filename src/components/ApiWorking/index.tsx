import { useUsers } from "../../hooks/useUsers";
import { LoadingRing } from "../../styles/loading";
import { StyledApiWorking } from "./styles";

export const ApiWorking = () => {
  const { reqLoading, apiWorking } = useUsers();

  return (
    <StyledApiWorking>
      <button onClick={apiWorking} disabled={reqLoading}>
        {reqLoading ? <LoadingRing /> : "Checar status da API"}
      </button>
    </StyledApiWorking>
  );
};
