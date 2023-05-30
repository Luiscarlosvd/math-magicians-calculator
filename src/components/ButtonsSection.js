import React from 'react';
import './button.css';

const ButtonsSection = () => (
  <div className="buttons-calculator">
    <button type="button" className="button">AC</button>
    <button type="button" className="button">+/-</button>
    <button type="button" className="button">%</button>
    <button type="button" className="button button-orange">÷</button>
    <button type="button" className="button">7</button>
    <button type="button" className="button">8</button>
    <button type="button" className="button">9</button>
    <button type="button" className="button button-orange">X</button>
    <button type="button" className="button">4</button>
    <button type="button" className="button">5</button>
    <button type="button" className="button">6</button>
    <button type="button" className="button button-orange">-</button>
    <button type="button" className="button">1</button>
    <button type="button" className="button">2</button>
    <button type="button" className="button">3</button>
    <button type="button" className="button button-orange">+</button>
    <button type="button" className="button" id="button-0">0</button>
    <button type="button" className="button">.</button>
    <button type="button" className="button button-orange">=</button>
  </div>
);

export default ButtonsSection;
