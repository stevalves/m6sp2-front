import styled from "styled-components";

export const StyledContact = styled.main`
    width: 100%;
    padding: 0 3vh;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    >h2 {
      color: var(--main-1);
      font-weight: 600;
      font-size: 2rem;
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
`