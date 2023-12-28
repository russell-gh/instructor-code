import { createSlice } from "@reduxjs/toolkit";
import { getRandomNumber } from "../utils";

const initialState = {};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTodoData: (state, action) => {
      state.todos = action.payload;
    },
    deleteTodo: (state, action) => {
      const indexOf = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );

      state.todos.splice(indexOf, 1);
    },
    toggleCompleted: (state, action) => {
      const indexOf = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );

      state.todos[indexOf].completed = !state.todos[indexOf].completed;
    },
    addTodo: (state, action) => {
      //stop if it already exists
      const indexOf = state.todos.findIndex(
        (todo) => todo.title === action.payload
      );

      if (indexOf === -1) {
        state.todos.unshift({
          id: getRandomNumber(),
          entryDate: Date.now(),
          title: action.payload,
          user_id: 0,
          completed: false,
        });
      }
    },
  },
});

export const { setTodoData, deleteTodo, toggleCompleted, addTodo } =
  counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTodos = (state) => state.todo.todos;

export default counterSlice.reducer;
