import { createGlobalStyle } from "styled-components";
export const darkTheme = {
  body: "#000",
  textColor: "#fff",
  headingColor: "lightblue",
  btnFill: "#fff",
  customSelect: "000",
  inputColor: "#fff",
  inputBorder: "1px solid #fff",
  selectColor: "#fff",
  selectBorder: "1px solid #fff",
  selectBackground: "#000",
  selectBackgroundHover: "#fff",
  selectColorHover: "#000",
};

export const lightTheme = {
  body: "#fff",
  textColor: "#000",
  headingColor: "#d23669",
  btnFill: "#000",
  customSelect: "fff",
  inputColor: "#000",
  inputBorder: "1px solid #000",
  selectColor: "#000",
  selectBorder: "1px solid #000",
  selectBackground: "#fff",
  selectBackgroundHover: "#000",
  selectColorHover: "#fff",
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
   .Input {
     color: ${(props) => props.theme.inputColor};
     border: ${(props) => props.theme.inputBorder};
  }
  .Select {
    color: ${(props) => props.theme.selectColor};
    border: ${(props) => props.theme.selectBorder};
    background: ${(props) => props.theme.selectBackground};
 }
 .Select__optionContainer{
  background: ${(props) => props.theme.selectBackground};
 }
 .Select__option:hover{
  background: ${(props) => props.theme.selectBackgroundHover};
  color: ${(props) => props.theme.selectColorHover};
 }
   `

