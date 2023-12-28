const DeleteButton = (props) => {
  return <button onClick={() => props.onDelete(props.itemNo)}>Delete</button>;
};

export default DeleteButton;
