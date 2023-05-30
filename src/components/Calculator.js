import React from 'react';
import './calculator.css';
import Button from './Button';

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="div-result">0</div>
      <div className="buttons-calculator">
        <Button name="AC" />
      </div>
    </div>
  );
}

export default Calculator;
