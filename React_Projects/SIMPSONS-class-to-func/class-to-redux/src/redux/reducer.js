import { initialState } from "./initialState";
import { findCharacterIndex } from "../utils";
import {
  ON_USER_INPUT,
  SET_API_DATA,
  DELETE_CHARACTER,
  TOGGLE_LIKE,
} from "./types";
import { combineReducers } from "redux";
import { apiReducer } from "./reducers/API";

export const rootReducer = combineReducers({ apiReducer, reducer });

export function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case SET_API_DATA:
      return { ...state, apiData: action.payload };

    case DELETE_CHARACTER: {
      const apiData = [...state.apiData];
      const index = findCharacterIndex(apiData, action.payload);
      apiData.splice(index, 1);

      return { ...state, apiData };
    }

    case TOGGLE_LIKE: {
      const apiData = [...state.apiData];
      const index = findCharacterIndex(apiData, action.payload);

      //debug
      if (index === -1) {
        console.log("Could not find character!");
        return;
      }

      apiData[index].likes = apiData[index].likes
        ? !apiData[index].likes
        : true;

      //calc the likes
      let likesCount = 0;
      for (let index = 0; index < apiData.length; index++) {
        if (apiData[index].likes) likesCount++;
      }

      console.log(likesCount);

      return { ...state, apiData, likesCount };
    }

    case ON_USER_INPUT:
      //filter the data
      let filteredApiData = [...state.apiData];

      filteredApiData = filteredApiData.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });

      console.log(filteredApiData, action.payload);

      return { ...state, userInput: action.payload, filteredApiData };

    default:
      return state;
  }
}
