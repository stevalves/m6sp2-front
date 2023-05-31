import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);

  > div {
    width: 90%;
    max-width: 450px;
    height: 450px;
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    position: relative;
    animation: down 1s ease-in-out;
    overflow-y: auto;

    @keyframes down {
      from{ transform: translateY(-20px)}
      to{ transform: translateY(0)}
    }

    >button {
      all: unset;
      cursor: pointer;
      position: absolute;
      top: 16px;
      right: 16px;
      svg {
        font-size: 1.25rem;
        transform: scale(1);
        color: var(--main-1);
        transition: 0.3s;
      }
      :hover svg {
        transform: scale(1.4);
        color: var(--color-error);
      }
    }
  }
`;
