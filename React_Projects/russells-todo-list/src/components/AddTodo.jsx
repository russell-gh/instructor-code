import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { useState } from "react";

const AddTodo = () => {
  const [todoName, setTodoName] = useState("");
  const dispatch = useDispatch();

  const onInput = (e) => {
    setTodoName(e.target.value);
  };

  return (
    <div className="addTodo">
      <label for="todoName">Task name: </label>
      <input onInput={onInput} type="text" id="todoName" name="todoName" />
      <button
        onClick={() => {
          dispatch(addTodo(todoName));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
