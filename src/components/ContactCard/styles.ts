import styled from "styled-components";

export const StyledContactCard = styled.li`
  width: 30%;
  height: max-content;
  border-radius: 12px;
  margin-top: 1rem;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);

  h2 > svg {
    transform: translateY(3px);
  }

  > div:nth-child(1) {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--main-1);
    padding: 1rem 5%;
    h3 {
      color: var(--white);
      font-weight: 500;
      font-size: 1.15rem;
    }
    div {
      display: flex;
      gap: 0.5rem;
      button {
        all: unset;
        cursor: pointer;
        svg {
          color: var(--white);
          font-weight: 500;
          font-size: 1.15rem;
          :hover {
            color: var(--gray-4);
            transition: .2s;
          }
        }
      }
    }
  }
  > div:nth-child(2) {
    padding: 1rem 5%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
