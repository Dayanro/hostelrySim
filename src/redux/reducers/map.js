import { LOAD_MAP } from "../actions/map";
import { combineReducers } from "redux";



const mapReducer = (state = {
    floors: {},
    zones: {},
    tables: {}
}, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOAD_MAP:
      console.log(payload);
      return payload.map;
    default:
      return state;
  }
};

// const floorById = (state = {}, action) => {
//   const { payload, type } = action;
//   switch (type) {
//     case LOAD_MAP:
//       console.log(payload)
//       const floors1 = payload.floors;
//       return floors1;
//     default:
//       return state;
//   }
// };

// const zoneById = (state = {}, action) => {
//   const { payload, type } = action;
//   switch (type) {
//     case LOAD_MAP:
//       return payload;
//     default:
//       return state;
//   }
// };

// const tableById = (state = {}, action) => {
//   const { payload, type } = action;
//   switch (type) {
//     case LOAD_MAP:
//       return payload;
//     default:
//       return state;
//   }
// };

// const userReducer = combineReducers({
//   floorById,
//   zoneById,
//   tableById,
// });


export default mapReducer;
