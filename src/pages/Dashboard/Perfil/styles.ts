import styled from "styled-components";

export const StyledPerfil = styled.main`
  width: 100%;
  padding: 0px 3vh;
  margin: 1rem 0;

  > h2 {
    color: var(--main-1);
    font-weight: 600;
    font-size: 2rem;
  }

  > div {
    margin-top: 1rem;
    background: linear-gradient(var(--main-1), var(--main-2));
    width: 100%;
    height: 250px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: end;
    > div {
      width: 70%;
      height: 200px;
      background-color: var(--white);
      border: 2px solid var(--main-1);
      transform: translateY(50px);
      border-radius: 8px;
      min-width: 220px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.5rem;
      h2,
      svg {
        color: var(--main-1);
        font-weight: 600;
        font-size: 1.5rem;
      }
      h4 {
        color: var(--gray-3);
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
      }
      div:nth-child(1) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        > button {
          all: unset;
          cursor: pointer;
        }
      }
      div:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          span {
            color: var(--gray-2);
            font-weight: 500;
            font-size: 1.15rem;
          }
          >svg{
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
