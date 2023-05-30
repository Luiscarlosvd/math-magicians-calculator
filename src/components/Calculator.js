import React, { useState } from 'react';
import './calculator.css';
import ButtonsSection from './ButtonsSection';

function Calculator() {
  const [calculate, setCalculate] = useState(0);
  const handleValue = (e) => {
    if (calculate === 0) {
      setCalculate(e.target.textContent);
    } else if (e.target.textContent === 'AC') {
      setCalculate(0);
    } else {
      setCalculate((lastNumber) => lastNumber + e.target.textContent);
    }
  };
  return (
    <div className="calculator-container">
      <div className="div-result">{calculate}</div>
      <ButtonsSection onClick={handleValue} />
    </div>
  );
}

export default Calculator;
