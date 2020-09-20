import React, { useState, useEffect } from "react";
import { WrapperTableList } from "./style";
import { CardList } from "../../organisms";
import { SearchBar } from "../../molecules";

const MESSAGES = {
  TABLE_IS_EMPTY: "no tiene clientes",
  TABLE_IS_FULL: "está ocupada",
  TABLE_IS_BOOKED : "está reservada",
  TABLE_IS_WAITING_FOR_CHECK : "está esperando la cuenta"
}

const TableList = ({ items }) => {
  const [name, setName] = useState("");


  const InfoTable = (tableName) => { 
    const type= Object.keys(MESSAGES)
    const randomMessagekey = type[Math.floor(Math.random() * type.length)];
    console.log('MESA', randomMessagekey)
    
    return `La ${tableName} ${MESSAGES[randomMessagekey]} `;
  }

  const filterTablesByName = (items) => {
    console.log("ITEMS", items);
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
      <SearchBar text={"Mesas"} onChange={onChangeName} />
      <CardList
        items={filterTablesByName(items)}
        getCardMessage={InfoTable}
      />
    </WrapperTableList>
  );
};

export default TableList;
