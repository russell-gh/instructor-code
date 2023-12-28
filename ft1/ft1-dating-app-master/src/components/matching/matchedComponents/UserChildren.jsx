import { matchedIcons } from "../matchedIcons";

const UserChildren = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.child}</span>
      {props.haveKids ? " Have kid(s)" : "Don't have kids"}
    </>
  );
};

export default UserChildren;
