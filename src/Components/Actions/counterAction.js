import { decrement, increment, reset } from "../Constants/counterConstant";

export const incrementCounter = () => {
  return {
    type: increment,
  };
};

export const decrementCounter = () => {
  return {
    type: decrement,
  };
};

export const resetCounter = () => {
  return {
    type: reset,
  };
};
