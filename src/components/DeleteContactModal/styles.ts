import styled from "styled-components";

export const StyledDeleteContact = styled.div`
  font-family: "Nunito", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  height: 100%;
  padding: 1rem;

  h2 {
    color: var(--main-1);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10%;
  }

  h4 {
    text-align: center;
    color: var(--main-1);
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10%;
    span:nth-child(1) {
      color: var(--color-error);
      font-weight: 600;
    }
    span:nth-child(2) {
      color: var(--black);
      font-weight: 600;
      text-decoration: underline;
      display: block;
      padding: .5rem 0;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
        transition: 0.3s;
      }
    }
  }
`;
