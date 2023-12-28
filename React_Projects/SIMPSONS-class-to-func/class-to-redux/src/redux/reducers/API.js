import { SET_API_DATA } from "../types";
import { initialState } from "../initialState";

export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_API_DATA:
      return { ...state, apiData: action.payload };
    default:
      return state;
  }
}
