import React from "react";
import { PopoverWrapper} from "./style";

const Popover = ({ text }) => {
  return (
    <PopoverWrapper>
      <div className="frame">
        <div className="textPopover">
          Información
        </div>
      </div>
      <div className="textPopover">
        {text}
      </div>
    </PopoverWrapper>
  );
};

export default Popover;
