import  map  from "../../json/map.json";
export const LOAD_MAP = "LOAD_MAP";

export const loadMap = () => {
  return {
    type: LOAD_MAP,
    payload: { map },
  };
};
