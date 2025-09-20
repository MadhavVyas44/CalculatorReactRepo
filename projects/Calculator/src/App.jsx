import Display from "./Components/display";
import Buttons from "./Components/Buttons";
import "./App.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisp = calVal + buttonText;
      setCalVal(newDisp);
    }
  };
  return (
    <>
      <div className="calculatorBox">
        <Display displayValue={calVal} />
        <Buttons onButtonClicked={onButtonClicked} />
      </div>
    </>
  );
}

export default App;
