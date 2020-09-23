import { LOAD_MAP } from "../actions/map";


const mapReducer = (state = {
    floors: {},
    zones: {},
    tables: {}
}, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOAD_MAP:
      return payload.map;
    default:
      return state;
  }
};


export default mapReducer;
