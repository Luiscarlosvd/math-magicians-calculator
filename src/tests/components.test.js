import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ButtonsSection from '../components/ButtonsSection';

describe('ButtonsSection', () => {
  describe('when rendered', () => {
    it('should match the snapshot', () => {
      // Arrange
      const onClick = jest.fn();

      // Act
      const { container } = render(<ButtonsSection onClick={onClick} />);

      // Assert
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('when a button is clicked', () => {
    it('should call the onClick prop', () => {
      // Arrange
      const onClick = jest.fn();
      const { getByText } = render(<ButtonsSection onClick={onClick} />);

      // Act
      fireEvent.click(getByText('1'));

      // Assert
      expect(onClick).toHaveBeenCalled();
    });
  });
});