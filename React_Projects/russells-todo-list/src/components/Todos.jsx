import { useSelector } from "react-redux";
import { selectTodos } from "../features/todoSlice";
import Todo from "./Todo";
import { useState } from "react";
import AddTodo from "./AddTodo";
import SearchInput from "./SearchInput";

const Todos = () => {
  const todos = useSelector(selectTodos);
  const [searchTerm, setSearchTerm] = useState("");

  const onInput = (e) => {
    setSearchTerm(e.target.value);
  };

  let todosCopy = [...todos];
  if (searchTerm) {
    todosCopy = todosCopy.filter((todo) => {
      return todo.title.includes(searchTerm);
    });
  }
  console.log(todosCopy);
  return (
    <>
      <div className="title">
        <h2>Russells Todo List</h2>
      </div>
      <div className="controls">
        <AddTodo />
        <SearchInput onInput={onInput} />
      </div>
      <div>
        {todosCopy && todosCopy.length === 0 && <p>Nothing to ToDo!</p>}
      </div>
      {todosCopy.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export default Todos;
