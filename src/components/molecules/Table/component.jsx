import React from "react";
import { TableWrapper} from "./style";

const Table = ({ text, posX, posY }) => {
  return (
      <TableWrapper posX={posX} posY={posY}>
        {text}
      </TableWrapper>
  
  );
};

export default Table;
