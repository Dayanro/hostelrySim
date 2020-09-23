import React from "react";
import { ZoneWrapper } from "./style";
import Tables from "../Tables/component";

const Zone = ({ zones, tables}) => {
  const getTables = () => {
    const filteredItems = Object.keys(tables)
      .filter(
        (key) => Number(tables[key].id_zone) === Number(Object.keys(zones))
      )
      .reduce((accum, key) => {
        accum[key] = tables[key];
        return accum;
      }, {});
   
    return filteredItems;
  };

  return (
    <ZoneWrapper>
      <Tables tables={getTables()} />
    </ZoneWrapper>
  );
};

export default Zone;
