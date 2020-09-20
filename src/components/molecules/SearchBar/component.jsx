import React from "react";
import { WrapperSearchBar } from "./style";
import { Input, Label } from "../../atoms";

const SearchBar = ({ text, onChange }) => {
  return (
    <WrapperSearchBar>
      <Label text={text} />
      <Input onChange={onChange} />
    </WrapperSearchBar>
  );
};

export default SearchBar;
