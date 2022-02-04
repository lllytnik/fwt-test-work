import React, { Component } from "react";
import Select from "react-select";
/* import { Select } from "fwt-internship-uikit"; */
import s from "./CustomSelect.module.scss";

function CustomSelect(props) {
  /*   const options = [
    { value: "Salvador dali", label: "Salvador dali" },
    { value: "Vincent van gogh", label: "Vincent van gogh" },
    { value: "Claude monet", label: "Claude monet" },
    { value: "Victor vasnetsov", label: " Victor vasnetsov" },
    { value: "Salvador dali", label: "Salvador dali" },
    { value: "Vincent van gogh", label: "Vincent van gogh" },
    { value: "Claude monet", label: "Claude monet" },
  ]; */

  return (
    <div>
      <Select
        className={s.customSelect}
        options={props.options}
        placeholder={props.placeholder}
      />
    </div>
  );
}
export default CustomSelect;
