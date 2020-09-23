import React from "react";
import { WrapperSearchBar} from "./style";
import { Input } from "../../atoms";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ text, onChange }) => {
  return (
    <WrapperSearchBar>
      <div className="searchWrapper">
        <Input onChange={onChange} />
        <div className="ImagenWrapper">
          <FontAwesomeIcon icon={faSearch} size="2x" color="#c7c4c7" />
        </div>
      </div>
    </WrapperSearchBar>
  );
};

export default SearchBar;
