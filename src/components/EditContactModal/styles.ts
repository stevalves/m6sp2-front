import styled from "styled-components";

export const StyledEditContactForm = styled.form`
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  h2 {
    color: var(--main-1);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10%;
  }

  button {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    background-color: var(--white-2);
    border: 1px solid var(--gray-2);
    font-weight: 400;
    color: var(--main-1);
    font-size: 1.25rem;
    :hover {
      border: 1px solid var(--gray-3);
      color: var(--gray-3);
      transition: .3s;
    }
    :disabled {
      filter: brightness(80%);
    }
  }
`