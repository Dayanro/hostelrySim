import React from "react";
import { WrapperSearchBar, ImagenWrapper, SearchWrapper } from "./style";
import { Input, Label } from "../../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ text, onChange }) => {
  return (
    <WrapperSearchBar>
      <Label text={text} />
      <SearchWrapper>
        <Input onChange={onChange} />
        <ImagenWrapper>
          <FontAwesomeIcon icon={faSearch} size="2x" color="#c7c4c7" />
        </ImagenWrapper>
      </SearchWrapper>
    </WrapperSearchBar>
  );
};

export default SearchBar;
