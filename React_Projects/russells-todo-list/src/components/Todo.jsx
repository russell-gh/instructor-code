import { deleteTodo, toggleCompleted } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCheck,
  faTicketSimple,
} from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const { title, completed, id, entryDate } = todo;

  return (
    <div className="todo">
      <div>
        <p>{new Date(entryDate).toLocaleDateString()}</p>
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="icon">
        {completed ? (
          <FontAwesomeIcon
            onClick={() => {
              dispatch(toggleCompleted(id));
            }}
            icon={faCheck}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              dispatch(toggleCompleted(id));
            }}
            icon={faTicketSimple}
          />
        )}
      </div>
      <div className="icon">
        <FontAwesomeIcon
          onClick={() => {
            dispatch(deleteTodo(id));
          }}
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export default Todo;
