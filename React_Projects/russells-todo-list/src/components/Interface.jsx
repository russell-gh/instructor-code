import { useSelector } from "react-redux";
import { selectTodos } from "../features/todoSlice";
import Loading from "./Loading";
import Todos from "./Todos";

const Interface = () => {
  const todos = useSelector(selectTodos);

  return todos ? <Todos /> : <Loading />;
};

export default Interface;
