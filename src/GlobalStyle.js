import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
      box-sizing: inherit;
      margin:0px;
    }

    body{
      font-family: 'Raleway', sans-serif;
    }

`;