import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 5vh 0;
  padding: 6vh 3vh;
  width: 90%;
  max-width: 550px;
  height: max-content;
  background: var(--main-2);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  >a {
    color: var(--white-1);
    :hover{
      text-decoration: underline;
    }
  }
  h3 {
    color: var(--white);
    font-weight: 500;
    font-size: 2rem;
    width: 100%;
    border-bottom: 1px solid white;
    line-height: 150%;
    text-align: center;
  }
  button {
    height: 40px;
    width: 100%;
    border-radius: 4px;
    background-color: var(--white-2);
    border: 1px solid var(--gray-2);
    font-weight: 600;
    color: var(--gray-1);
    :hover {
      border: 1px solid var(--gray-3);
      color: var(--gray-3);
      transition: .3s;
    }
    :disabled {
      filter: brightness(80%);
    }
  }
`;
