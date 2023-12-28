import { useState } from "react";

const Quote = (props) => {
  const [like, setLike] = useState(false);

  console.log(like);

  return (
    <>
      <div>
        <p>{props.text}</p>
        {like && <p>You like this char!</p>}
        <button
          onClick={() => {
            setLike(!like);
          }}
        >
          Like
        </button>
      </div>
    </>
  );
};

export default Quote;
