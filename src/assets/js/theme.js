import { createGlobalStyle } from "styled-components";
export const darkTheme = {
  body: "#000",
  textColor: "#fff",
  headingColor: "lightblue",
  btnFill: "#fff",
  customSelect: "000",
};

export const lightTheme = {
  body: "#fff",
  textColor: "#000",
  headingColor: "#d23669",
  btnFill: "#000",
  customSelect: "fff",
};

export const GlobalStyles = createGlobalStyle`
   body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: .3s ease;
   }
   h2{
     color: ${(props) => props.theme.headingColor};
   }
   button svg{
     fill: ${(props) => props.theme.btnFill};
   }
   background-color: ${(props) => props.theme.customSelect};
   `
