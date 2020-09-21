import React from "react";
import { PopoverWrapper, TextWrapper } from "./style";

const Popover = ({ text }) => {
  
  return (
    <PopoverWrapper>
      <TextWrapper>{text}</TextWrapper>
    </PopoverWrapper>
  );
};

export default Popover;
