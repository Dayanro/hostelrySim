import React from "react";
import { LabelWrapper, LabelText } from "./style";

const Label = ({ text }) => {
    return (
      <LabelWrapper>
        <LabelText>{text}</LabelText>
      </LabelWrapper>
    );
};

export default Label;
