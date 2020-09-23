import React from "react";
import { FloorWrapper } from "./style";
import Zone from "../Zone/component";

const Floor = ({ zones, tables, currentFloor, setZone}) => {
  
  const getZones = () => {
    const filteredItems = Object.keys(zones)
      .filter((key) => Number(zones[key].floor) === currentFloor)
      .reduce((accum, key) => {
        accum[key] = zones[key];
        return accum;
      }, {});
    return filteredItems;
  };

  return (
    <FloorWrapper>
      <Zone zones={getZones()} tables={tables} />
    </FloorWrapper>
  );
};

export default Floor;
