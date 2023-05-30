import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
 ${Reset};
:root {
    --main-1: #4B4A67;
    --main-2: #7E8987;
    --main-3: #8DB580;
    --main-4: #C2CFB2;
    --gray-1: #3B3B3B;
    --gray-2: #525252;
    --gray-3: #696969;
    --gray-4: #808080;
    --gray-trans: rgba(330, 330, 330, 0.25);
    --black: #000;
    --white: #FFF;
    --white-1: #fffafa;
    --white-2: #f5fffb;
    --color-error: #E60000; 
    --color-success: #168821;
    --color-warning: #FFCD07;


    --radius-1: 5px;
    --radius-2: 15px;
    --radius-50: 50%;
  }

  * {
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }

  body {
    border-collapse: collapse;
    background-color: var(--white-1);
    }
`;
