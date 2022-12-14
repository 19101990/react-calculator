import './App.scss';
import React, { useState } from "react";
import Button from './Button.js'

function App() {
  const [operator, setOperator] = useState(null);
  const [oldValue, setOldValue] = useState(null);
  const [newValue, setNewValue] = useState("0");

  const handleOperations = () => {
    let result;
    switch(operator) {
      case '+':
        result = parseInt(oldValue) + parseInt(newValue);
        console.log(result)
        break;
      case '-':
        result = oldValue - newValue;
        console.log(result)
        break;
      case '*':
        result = oldValue * newValue;
        console.log(result)
        break;
      case '/':
        result = oldValue / newValue;
        console.log(result)
        break;
    }
    setNewValue(result);
    setOldValue(null);
    setOperator(null);
  }
  const handleCalculation = (buttonValue) => {
    if(newValue === "0") {
      switch(buttonValue) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          setNewValue(String(buttonValue));
          break;
        case '0':
          return newValue !== "0" ? setNewValue(String(buttonValue)) : '';
        case 'AC':
          setOldValue(null);
          setNewValue("0");
          break;
      }
    } else {
      switch(buttonValue) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
          setNewValue(newValue + String(buttonValue));
          break;
        case 'AC':
          setOldValue(null);
          setNewValue("0");
          break;
        case '/':
          setOldValue(newValue);
          setNewValue("0");
          setOperator("/")
          break;
        case '*':
          setOldValue(newValue);
          setNewValue("0");
          setOperator("*")
          break;
        case '-':
          setOldValue(newValue);
          setNewValue("0");
          setOperator("-")
          break;
        case '+':
          setOldValue(newValue);
          setNewValue("0");
          setOperator("+")
          break;
        case '=':
          handleOperations();
          break;
      }
    }
  }
  return (
    <div className="calculator">
      <div className="calculator__display">
        <div className="calculator__result_previous">{oldValue}</div>
        <div className="calculator__result_new">{newValue}</div>
      </div>
      <div className="calculator__buttons">

        <Button className="button --top" buttonValue="AC" onClick={handleCalculation} />
        <Button className="button --top" buttonValue="+/-" onClick={handleCalculation} />
        <Button className="button --top" buttonValue="%" onClick={handleCalculation} />

        <Button className="button --number" buttonValue="7" onClick={handleCalculation} />
        <Button className="button --number" buttonValue="8" onClick={handleCalculation} />
        <Button className="button --number" buttonValue="9" onClick={handleCalculation} />
        <Button className="button --number" buttonValue="4" onClick={handleCalculation} />
        <Button className="button --number" buttonValue="5" onClick={handleCalculation} />
        <Button className="button --number" buttonValue="6" onClick={handleCalculation} />
        <Button className="button --number" buttonValue="1" onClick={handleCalculation} />
        <Button className="button --number" buttonValue="2" onClick={handleCalculation} />
        <Button className="button --number" buttonValue="3" onClick={handleCalculation} />
        <Button className="button --number --zero" buttonValue="0" onClick={handleCalculation} />
        <Button className="button --number --decimal" buttonValue="." onClick={handleCalculation} />

        <Button className="button --right" buttonValue="/" onClick={handleCalculation} />
        <Button className="button --right" buttonValue="*" onClick={handleCalculation} />
        <Button className="button --right" buttonValue="-" onClick={handleCalculation} />
        <Button className="button --right" buttonValue="+" onClick={handleCalculation} />
        <Button className="button --right" buttonValue="=" onClick={handleCalculation} />
        
      </div>
    </div>
  );
}

export default App;
