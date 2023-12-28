export const API_URL = "https://jsonplaceholder.typicode.com/users";

export const INITIAL_STATE = {
  users: [],
  currentUser: {},
  screenMode: 0,
  searchRequirements: {
    location: undefined,
    age: undefined,
    sex: undefined,
  },
  likes: [],
};
