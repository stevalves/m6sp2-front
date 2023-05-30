import styled, { css } from "styled-components";
import { iLogo } from "./types";

const StyledLogoShadow = css`
  text-shadow: -6px 20px 6px var(--black);
`

export const StyledLogo = styled.h3<iLogo>`
  ${(props) => props.shadow && StyledLogoShadow}
  font-size: 2.5rem;
  line-height: 125%;
  color: var(--main-1);
  font-style: italic;
  cursor: default;
  > b {
    color: var(--main-1);
    font-weight: 500;
    font-style: normal;
  }
`;
