import styled from "styled-components";

export const StyledNoPermissionModal = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: .5rem;
  height: 60%;

  h2 {
    color: var(--main-1);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10%;
  }

  div {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h3 {
    color: var(--main-1);
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 10%;
    text-align: center;
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