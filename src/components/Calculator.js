import React from 'react';
import './calculator.css';
import ButtonsSection from './ButtonsSection';

function Calculator() {
  const handleValue = (e) => {
    console.log(e.target.textContent);
  };
  return (
    <div className="calculator-container">
      <div className="div-result">0</div>
      <ButtonsSection onClick={handleValue} />
    </div>
  );
}

export default Calculator;
