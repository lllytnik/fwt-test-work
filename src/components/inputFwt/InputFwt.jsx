import React, { Component } from "react";
import { Input } from "fwt-internship-uikit";
import "./InputFwt.scss";

function InputFwt(props) {
  return <Input className="input" placeholder={props.placeholder} />;
}
export default InputFwt;
