import React, { Component } from "react";
/* import { Select } from "fwt-internship-uikit"; */
import s from "./Input.module.scss";

function Input(props) {
  return (
    <form className={s.form}>
      <input className={s.formInput} placeholder="Name" type="text" />
    </form>
  );
}
export default Input;
