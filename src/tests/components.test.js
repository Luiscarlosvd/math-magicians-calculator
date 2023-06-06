import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import ButtonsSection from '../components/ButtonsSection';
import Calculator from '../components/Calculator';

// ButtonSection component tests

describe('ButtonsSection', () => {
  test('should match the snapshot', () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    const { container } = render(<ButtonsSection onClick={onClick} />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should call the onClick prop', () => {
    // Arrange
    const onClick = jest.fn();
    const { getByText } = render(<ButtonsSection onClick={onClick} />);

    // Act
    fireEvent.click(getByText('1'));

    // Assert
    expect(onClick).toHaveBeenCalled();
  });
});

// Calculator component test

describe('Calculator', () => {
  test('should match the snapshot', () => {
    // Arrange

    // Act
    const { container } = render(<Calculator />);

    // Assert
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should update the result with the correct value', () => {
    // Arrange
    const { getByText } = render(<Calculator />);
    const expectedValue = '3';

    // Act
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    const resultElement = document.querySelector('.div-result');
    
    // Assert
    expect(resultElement).toHaveTextContent(expectedValue);
  });
});
