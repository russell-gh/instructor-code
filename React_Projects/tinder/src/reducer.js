import { INITIAL_STATE } from "./config";
import { getLocalStorage } from "./utils";

const initialState = getLocalStorage() || INITIAL_STATE;

export function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case "LIKE_TOGGLE":
      const newLikes = [...state.likes];
      const indexOf = newLikes.indexOf(action.id);

      if (indexOf > -1) {
        //delete id from array
        newLikes.splice(indexOf, 1);
      } else {
        newLikes.push(action.id);
      }

      newState = { ...state, likes: newLikes };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;

    case "NEW_SEARCH":
      let filteredUsers = [...state.users];
      filteredUsers = filteredUsers.filter((user) => {
        return user[action.searchOption]
          .toLowerCase()
          .includes(action.searchInput.toLowerCase());
      });

      newState = { ...state, filteredUsers };

      localStorage.setItem("state", JSON.stringify(newState));
      return newState;

    case "SET_USERS":
      newState = { ...state, users: action.payload };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;

    case "SET_NEW_USER":
      newState = { ...state, currentUser: action.payload, screenMode: 1 };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;

    case "SET_SCREEN_MODE":
      newState = { ...state, screenMode: action.payload };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
}
