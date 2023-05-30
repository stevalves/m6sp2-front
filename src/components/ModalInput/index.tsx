import { StyledModalInput } from "./styles";
import { iInputValues } from "./types";
import { forwardRef } from "react";

export const ModalInput = forwardRef<HTMLInputElement, iInputValues>(
  ({ type, label, id, placeholder, ...rest }, ref) => {
    return (
      <StyledModalInput>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...rest}
          ref={ref}
        />
      </StyledModalInput>
    );
  }
);
