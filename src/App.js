import './App.scss';
import Button from './Button.js'

function App() {

  const handleCalculation = (buttonValue) => {
    console.log(buttonValue)
  }
  return (
    <div className="calculator">
      <div className="calculator__display">

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

        <Button className="button --right" buttonValue=":" onClick={handleCalculation} />
        <Button className="button --right" buttonValue="*" onClick={handleCalculation} />
        <Button className="button --right" buttonValue="-" onClick={handleCalculation} />
        <Button className="button --right" buttonValue="+" onClick={handleCalculation} />
        <Button className="button --right" buttonValue="=" onClick={handleCalculation} />
        
      </div>
    </div>
  );
}

export default App;
