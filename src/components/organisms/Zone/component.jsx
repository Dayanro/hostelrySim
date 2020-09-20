import React from "react";
import { ZoneWrapper, Feature1 } from "./style";
import Tables from "../Tables/component";

const Zone = ({ zones, tables }) => {
    
  const getTables = () => {
    const filteredItems = Object.keys(tables)
      .filter(
        (key) => Number(tables[key].id_zone) === Number(Object.keys(zones))
      )
      .reduce((accum, key) => {
        accum[key] = tables[key];
        return accum;
      }, {});
    console.log("zones.id_zone");
    return filteredItems;
  };

  console.log("getZones", getTables());

  ;

  console.log("ZONE", zones);
  return (
    <ZoneWrapper>
      <Tables tables={getTables()} />
      <Feature1/>
    </ZoneWrapper>
  );
};

export default Zone;
