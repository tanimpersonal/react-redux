import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../Actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log(count);
  const center = {
    textAlign: "center",
  };
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  return (
    <div style={center}>
      <p>Count : {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
