import { StyledLogo } from "./styles";
import { iLogo } from "./types";

export function Logo({shadow}: iLogo) {
  return (
    <StyledLogo shadow={shadow}>
      <b>Our</b>C
    </StyledLogo>
  );
}
