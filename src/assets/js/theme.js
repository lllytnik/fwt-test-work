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
  rangetBackground: "#000",
  rangeColor: "#fff",
  borderColor: "1px solid #fff",
  paginationPageBackgroundActive: "#fff !important",
  paginationPageBorderActive: "#fff !important",
  paginationPageColorActive: "#000 !important",
  paginationPageBorder: "1px solid #fff",
  paginationPageColor: "#fff",
  paginationPageBackgroundHover: "#464646",
  paginationPageBorderHover: "1px solid #fff",
  paginationPageColorHover: "#fff",
  paginationPageBackgroundDisabled: "#000",
  paginationPageBorderDisabled: "1px solid #4c4c4c",
  paginationPageColorDisabled: "#4c4c4c",

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
  formInputBackground: "#EFEFEF",
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
 .Range{
  background: ${(props) => props.theme.rangetBackground};
  color: ${(props) => props.theme.rangeColor};
  border: ${(props) => props.theme.borderColor};
 }
 .Range__сontainer{
  background: ${(props) => props.theme.rangetBackground};
  color: ${(props) => props.theme.rangeColor};
 }
 .form__input{
  background: ${(props) => props.theme.formInputBackground};
 }
 .PaginationPageWithActive{
  background: ${(props) => props.theme.paginationPageBackgroundActive};
  border: ${(props) => props.theme.paginationPageBorderActive};
  color: ${(props) => props.theme.paginationPageColorActive};
 }
 .PaginationPage{
  border: ${(props) => props.theme.paginationPageBorder};
  color: ${(props) => props.theme.paginationPageColor};
 }
 .PaginationPage:hover{
  background: ${(props) => props.theme.paginationPageBackgroundHover};
  border: ${(props) => props.theme.paginationPageBorderHover};
  color: ${(props) => props.theme.paginationPageColorHover};
 }
 .PaginationPage:disabled{
  background: ${(props) => props.theme.paginationPageBackgroundDisabled};
  border: ${(props) => props.theme.paginationPageBorderDisabled};
  color: ${(props) => props.theme.paginationPageColorDisabled};
 }
   `

