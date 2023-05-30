import React from 'react';
import './calculator.css';
import ButtonsSection from './ButtonsSection';

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="div-result">0</div>
      <ButtonsSection />
    </div>
  );
}

export default Calculator;
