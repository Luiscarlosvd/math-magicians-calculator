import React, { useState } from 'react';
import './calculator.css';
import ButtonsSection from './ButtonsSection';
import calculate from '../logic/calculate';

function Calculator() {
  const [result, setResult] = useState({
    total: null,
    next: 0,
    operation: null,
  });
  const handleValue = (e) => {
    setResult((prevState) => calculate(prevState, e.target.textContent));
  };
  const showResult = (total, next, operation) => {
    const invalid = [null, undefined];
    const showTotal = invalid.includes(total) ? '' : total;
    const showNext = invalid.includes(next) ? '' : next;
    const showOp = invalid.includes(operation) ? '' : operation;

    const show = `${showTotal}${showOp}${showNext}`;
    return show;
  };
  return (
    <div className="calculator-section-container">
      <h2>Let&apos;s do some Math</h2>
      <div className="calculator-container">
        <div className="div-result">{showResult(result.total, result.next, result.operation)}</div>
        <ButtonsSection onClick={handleValue} />
      </div>
    </div>
  );
}

export default Calculator;
