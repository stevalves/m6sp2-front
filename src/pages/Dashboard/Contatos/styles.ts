import styled from "styled-components";

export const StyledContact = styled.main`
  width: 100%;
  padding: 0 3vh;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    h2 {
      color: var(--main-1);
      font-weight: 600;
      font-size: 2rem;
    }
    button {
      min-height: 40px;
      padding: .5rem;
      border-radius: 4px;
      background-color: var(--white-2);
      border: 1px solid var(--gray-2);
      font-weight: 400;
      color: var(--main-1);
      font-size: 1.25rem;
    }
  }

  ul {
    display: flex;
    overflow-x: auto;
    flex-direction: column;
    gap: 5%;
  }

  @media (min-width: 600px) {
    ul {
      flex-wrap: wrap;
      align-items: stretch;
      justify-content: left;
      flex-direction: row;
    }
  }
`;
