import "./counter.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "../../states/reducers";

const Counter = () => {
  const curState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="main">
      <h1>{curState}</h1>
      <div className="buttons">
        <button onClick={() => dispatch(Increment())}>++</button>
        <button onClick={() => dispatch(Decrement())}>--</button>
      </div>
    </div>
  );
};

export default Counter;
