import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

const ButtonsSection = ({ onClick }) => (
  <div className="buttons-calculator">
    <button type="button" className="button">AC</button>
    <button type="button" onClick={onClick} className="button">+/-</button>
    <button type="button" onClick={onClick} className="button">%</button>
    <button type="button" onClick={onClick} className="button button-orange">÷</button>
    <button type="button" onClick={onClick} className="button">7</button>
    <button type="button" onClick={onClick} className="button">8</button>
    <button type="button" onClick={onClick} className="button">9</button>
    <button type="button" onClick={onClick} className="button button-orange">X</button>
    <button type="button" onClick={onClick} className="button">4</button>
    <button type="button" onClick={onClick} className="button">5</button>
    <button type="button" onClick={onClick} className="button">6</button>
    <button type="button" onClick={onClick} className="button button-orange">-</button>
    <button type="button" onClick={onClick} className="button">1</button>
    <button type="button" onClick={onClick} className="button">2</button>
    <button type="button" onClick={onClick} className="button">3</button>
    <button type="button" onClick={onClick} className="button button-orange">+</button>
    <button type="button" onClick={onClick} className="button" id="button-0">0</button>
    <button type="button" onClick={onClick} className="button">.</button>
    <button type="button" className="button button-orange">=</button>
  </div>
);

ButtonsSection.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonsSection;
