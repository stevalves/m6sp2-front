import styled from "styled-components";
import { commonBg } from "../../styles/commonBg";

export const StyledHomepage = styled.main`
  ${commonBg};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    width: 90%;
    max-width: 600px;
    background: var(--gray-trans);
    backdrop-filter: blur(10px);
    border-radius: var(--radius-1);
    border: 1px solid var(--gray-trans);
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    > a {
      width: 60%;

      button {
        width: 100%;
        height: 50px;
        border-radius: 15px 0 15px 0px;
        border: 1px solid var(--main-2);
        font-size: 1.25rem;
        color: var(--gray-2);
        font-weight: 700;
        background-color: var(--gray-trans);
        
        :hover {
          color: var(--gray-1);
          background-color: transparent;
          transition: 0.3s;
        }
      }
    }
  }
`;
