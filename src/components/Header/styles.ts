import styled from "styled-components";
import { iHeader } from "./types";

export const StyledHeader = styled.header<iHeader>`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 14vh;
  min-height: 80px;
  max-height: 100px;
  width: 100%;
  padding: 0 3vh;
  background-color: var(--white-4);
  font-family: "Nunito", sans-serif;

  nav {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 1rem;
    div {
      display: flex;
      gap: 1rem;
      button:nth-child(1) {
        all: unset;
        display: block;
        cursor: pointer;
        svg {
          font-size: 2rem;
          color: var(--main-1);
          :hover {
            color: var(--main-2);
            transition: 0.3s;
          }
        }
        ::after {
          content: "${(props) => props.contacts}";
          display: inline-block;
          transform: translateY(-20px) translateX(-8px);
          color: var(--gray-1);
          font-weight: 500;
        }
      }
      button {
        display: none;
      }
    }
    ul {
      display: flex;
      gap: 1rem;
      li {
        width: 100%;
        display: flex;
        button {
          all: unset;
          cursor: pointer;
          width: 100%;
          padding: 24px;
          display: flex;
          justify-content: center;
          font-size: 1.5rem;
          text-align: center;
          color: var(--main-1);
          :hover {
            color: var(--main-2);
            transition: 0.3s;
          }
        }
      }
    }
  }

  @media (max-width: 760px) {
    nav {
      div > button {
        display: block;
        background-color: transparent;
        border: none;
        span {
          display: block;
          width: 24px;
          border-top: 2px solid;
          ::after,
          ::before {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            margin-top: 5px;
            background-color: currentColor;
            transition: 0.3s;
            position: relative;
          }
        }

        nav.active span {
          background-color: aqua;
        }
      }
      ul {
        display: flex;
        position: fixed;
        width: 100%;
        left: 0;
        top: 89px;
        height: 0;
        background-color: #f4f4f4;
        z-index: 1;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        visibility: hidden;
        transition: 0.6s;
        overflow-y: hidden;
        li {
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        }
      }
    }

    nav.active ul {
      visibility: visible;
      height: 100vh;
    }

    nav.active > div > button > span {
      border-top-color: transparent;
      ::after {
        transform: rotate(45deg);
        top: -7px;
      }
      ::before {
        transform: rotate(135deg);
      }
    }
  }
`;
