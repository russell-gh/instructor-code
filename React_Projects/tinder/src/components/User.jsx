import { useDispatch } from "react-redux";
import { LIKE_TOGGLE } from "../types";

const User = (props) => {
  const dispatch = useDispatch();

  const { user } = props;

  return (
    <>
      <h3>{user.name}</h3>
      <p>{user.address.city}</p>
      <button onClick={() => dispatch({ type: LIKE_TOGGLE, id: user.id })}>
        Like
      </button>
      <hr></hr>
    </>
  );
};

export default User;
