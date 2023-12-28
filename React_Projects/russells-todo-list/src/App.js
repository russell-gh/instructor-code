import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodoData } from "./features/todoSlice";
import Interface from "./components/Interface";
import "./App.css";
import Todos from "./components/Todos";

const App = () => {
  const dispatch = useDispatch();

  const getTodos = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );

    data.length = 5;

    data.forEach((todo) => {
      todo.entryDate = Date.now() + Math.round(Math.random() * 10000000000);
    });

    dispatch(setTodoData(data));
  };

  useEffect(() => {
    getTodos();
  });

  return <Interface />;
};

export default App;
