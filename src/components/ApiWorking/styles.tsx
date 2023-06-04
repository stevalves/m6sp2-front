import styled from "styled-components";

export const StyledApiWorking = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: max-content;
  margin: 8px 0 0 8px;
  button {
    height: 40px;
    width: 150px;
    border-radius: 4px;
    background-color: var(--white-2);
    border: 1px solid var(--gray-2);
    font-weight: 600;
    color: var(--gray-1);
    :hover {
      border: 1px solid var(--gray-3);
      color: var(--gray-3);
      transition: 0.3s;
    }
    :disabled {
      filter: brightness(80%);
    }
  }
`;
