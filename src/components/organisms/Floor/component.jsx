import React, { useState } from "react";
import { FloorWrapper } from "./style";
import Zone from "../Zone/component";

const Floor = ({ zones, tables, currentFloor }) => {
  

  const getZones = () => {
    const filteredItems = Object.keys(zones)
      .filter((key) => Number(zones[key].floor) === currentFloor)
      .reduce((accum, key) => {
        accum[key] = zones[key];
        return accum;
      }, {});
    console.log("filteredItems", filteredItems);
    return filteredItems;
  };


  console.log("getZones", getZones());

  return (
    <FloorWrapper>
      <Zone zones={getZones()} tables={tables}/>
    </FloorWrapper>
  );
};

export default Floor;
