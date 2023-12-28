const Image = (props) => {
  return (
    <div>
      <img alt={props.text} src={props.image} />
    </div>
  );
};

export default Image;
