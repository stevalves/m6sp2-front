import { css } from "styled-components";
import background from "../assets/wp.jpg";

export const commonBg = css`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: auto 150%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
`;
