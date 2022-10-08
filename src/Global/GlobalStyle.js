import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        padding: 2rem 1rem;
    }

    :root{
        //Títulos
        --titleSize: 2rem;
        --titleShadow: 2px 2px 2px #000;
        --titleColor: #008080;
        --titleMargin: 1rem;

        //Parágrafos
        --parSize: 1rem;
        --parColor: #008080;
        --parMargin: 1rem;

        //Caixas
        --inputBorder: none;
        --inputShadow: inset -2px -2px 2px #000;
        --bgInput: #aeaeae;
    }
`