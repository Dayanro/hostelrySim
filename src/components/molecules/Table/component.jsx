import React from "react";

import {  MainTableWrapper } from "./style";

const Table = ({  posX, posY, name, id }) => {
  return (
    <MainTableWrapper posX={posX} posY={posY}>
      <div className="tableWrapper">
        <div className="textWrapper">
          <div className="tableId">
            {id}
          </div>
        </div>
      </div>
    </MainTableWrapper>
  );
};

export default Table;
