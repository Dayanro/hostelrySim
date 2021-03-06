import React from "react";
import {InputWrapper } from "./style";

const Input = ({ onChange }) => {
  return <InputWrapper onChange={onChange} type="text" placeholder="Buscar" />;
};

export default Input;
