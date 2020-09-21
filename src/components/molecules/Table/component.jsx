import React from "react";
import { TableWrapper, MainTableWrapper, TextWrapper } from "./style";

const Table = ({ text, posX, posY, name, id }) => {
  return (
    <MainTableWrapper posX={posX} posY={posY}>
      <TableWrapper>
        <TextWrapper> {id} </TextWrapper>
      </TableWrapper>
    </MainTableWrapper>
  );
};

export default Table;
