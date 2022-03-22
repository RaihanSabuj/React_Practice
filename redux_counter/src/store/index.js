import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  // action hold (ActionType,Payload)
  if (action.type === "increment") {
    return { ...state, counter: action.payload };
  } else {
    return state;
  }
};

export const store = createStore(reducer);
