import { decrement, increment, reset } from "../Constants/counterConstant";

const initialCounter = {
  count: 0,
};

const reducer = (state = initialCounter, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    case reset:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
export default reducer;
