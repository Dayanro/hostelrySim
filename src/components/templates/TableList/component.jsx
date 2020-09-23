import React, { useState } from "react";
import { WrapperTableList } from "./style";
import { CardList } from "../../organisms";
import { SearchBar, NavLink } from "../../molecules";

const MESSAGES = {
  TABLE_IS_EMPTY: "no tiene clientes",
  TABLE_IS_FULL: "está ocupada",
  TABLE_IS_BOOKED: "está reservada",
  TABLE_IS_WAITING_FOR_CHECK: "está esperando la cuenta",
};

const TableList = ({ items }) => {
  const [name, setName] = useState("");

  const InfoTable = (tableName) => {
    const type = Object.keys(MESSAGES);
    const randomMessagekey = type[Math.floor(Math.random() * type.length)];
    return `La ${tableName} ${MESSAGES[randomMessagekey]} `;
  };

  const filterTablesByName = (items) => {
    const value = name.toLowerCase();
    const filteredItems = Object.keys(items)
      .filter((key) => items[key].name_table.toLowerCase().includes(value))
      .reduce((accum, key) => {
        accum[key] = items[key];
        return accum;
      }, {});
    return value.length > 0 ? filteredItems : items;
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <WrapperTableList>
      <div className="menuWrapper">
        <NavLink text="Mesas" />
      </div>

      <div className="searchWrapper">
        <SearchBar text={"Listado de Mesas"} onChange={onChangeName} />
      </div>

      <div className="listWrapper">
        <CardList
          items={filterTablesByName(items)}
          getCardMessage={InfoTable}
        />
      </div>
    </WrapperTableList>
  );
};

export default TableList;
