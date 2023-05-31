import { StyledForm } from "./styles";
import { iFormValues } from "./types";

export function Form({ children, formTitle, submiter }: iFormValues) {
  return (
    <StyledForm onSubmit={submiter}>
      <h3>{formTitle}</h3>
      {children}
    </StyledForm>
  );
}
