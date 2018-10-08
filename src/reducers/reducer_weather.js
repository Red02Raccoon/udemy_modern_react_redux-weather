import { FETCH_WEATHER } from "../actions/index";
FETCH_WEATHER;
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data];
  }
  return state;
}
