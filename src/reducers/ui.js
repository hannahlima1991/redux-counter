const uiInitialState = {
  counter: 0,
};

const uiReducer = (state = uiInitialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_TEN":
      return { ...state, counter: state.counter + 10 };
    case "SUBTRACT_TEN":
      return { ...state, counter: state.counter - 10 };
    default:
      return state;
  }
};
export default uiReducer;
