import React, { useState, FC } from "react";

interface Props {
  title: String;
  initialCount: number;
}

const FuntionalCounter: FC<Props> = ({ initialCount, title }) => {
  const [count, setCount] = useState(initialCount);

  const increment = (): void => {
    const c: number = count + 1;
    setCount(c);
  };

  return (
    <>
      {title}: The count is: {count}
      <button
        onClick={() => {
          increment();
        }}
      >
        Add
      </button>
    </>
  );
};

export default FuntionalCounter;
