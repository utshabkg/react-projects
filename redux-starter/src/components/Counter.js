import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const curState = useSelector((state) => state.counter);
  return (
    <div>
      <h1>{curState}</h1>
      <div>
        <button>++</button>
        <button>--</button>
      </div>
    </div>
  );
};

export default Counter;
