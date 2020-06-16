import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, subtractTen, addTen } from "./actions";
import "./App.css";

function App() {
  const { counter } = useSelector((state) => state.ui);
  console.log(counter);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        <h1>{counter}</h1>
      </div>
      <div className="plusMinusOne">
        <button onClick={() => dispatch(increment())}>Add 1</button>
        <button onClick={() => dispatch(decrement())}>Subtract 1</button>
      </div>
      <div className="plusMinusTen">
        <button onClick={() => dispatch(addTen())}>Add 10</button>
        <button onClick={() => dispatch(subtractTen())}>Subtract 10</button>
      </div>
    </div>
  );
}

export default App;
