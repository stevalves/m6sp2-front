import styled from "styled-components";

export const StyledContactCard = styled.li`
  width: 30%;
  height: max-content;
  border-radius: 12px;
  border: 1px solid var(--main-2);
  margin-top: 1rem;
  overflow: hidden;

  h2>svg {
    transform: translateY(3px);
  }

  div:nth-child(1) {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--main-3);
    border-radius: 12px 12px 0 0;
    padding: 1rem 5%;
    h3{
      color: var(--white);
      font-weight: 500;
      font-size: 1.15rem;
    }
    button {
      all: unset;
      cursor: pointer;
      svg {
        color: var(--white);
        font-weight: 500;
        font-size: 1.15rem;
      }
    }
  }
  div:nth-child(2) {
    padding: 1rem 5%;
  }

  @media (max-width: 600px) {
      width: 100%;
    }
`