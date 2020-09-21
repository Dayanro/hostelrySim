import React from "react";
import { TableWrapper } from "./style";
import { Table } from "../../molecules";

const Tables = ({ tables }) => {

  console.log("TABLES", tables);
  return (
    <TableWrapper>
      {Object.keys(tables).map((table) => (
        <Table
          key={tables[table].name_table}
          id={tables[table].id_table}
          name={tables[table].name_table}
          posX={Number(tables[table].x)}
          posY={Number(tables[table].y)}
        />
      ))}
    </TableWrapper>
  );
};

export default Tables;
