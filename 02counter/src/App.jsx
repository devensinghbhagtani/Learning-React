import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const deleteValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <div className="back">
      <h1>{counter}</h1>
      <div className="buttons">
        <button onClick={addValue}>Add Value {counter}</button>
        <button onClick={deleteValue}>Remove Value {counter}</button>
      </div>
    </div>
  );
}

export default App;
