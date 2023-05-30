import { StyledInput } from "./styles";
import { iInputValues } from "./types";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, iInputValues>(
  ({ type, label, id, placeholder, ...rest }, ref) => {
    return (
      <StyledInput>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...rest}
          ref={ref}
        />
      </StyledInput>
    );
  }
);
