import styled from "styled-components";

export const StyledInput = styled.fieldset`
    border: 1px solid var(--main-2);
    background-color: var(--white-2);
    border-radius: 8px;
    padding: 8px 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    
  :hover {
    border: 1px solid var(--main-3);
    transition: 0.3s;
  }

  label {
    color: var(--gray-2);
    font-weight: 500;
    font-size: 1.25rem;
    display: block;
    border-bottom: 1px solid var(--gray-2);
    line-height: 150%;
  }

  input {
    border: none;
    background-color: transparent;
    width: 100%;
    height: 40px;
    color: var(--gray-3);
    font-size: 1.25rem;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: var(--gray-4);
      font-size: 1rem;
    }
  }
`;
