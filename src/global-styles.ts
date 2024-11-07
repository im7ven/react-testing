import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin:0;
}

html {
    scroll-behavior: smooth;
    font-size: 62.5%;
}


body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    max-width: 1200px;
    margin: 0 auto;

}
`;

export default GlobalStyle;
