import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import ButtonsSection from '../components/ButtonsSection';
import Calculator from '../components/Calculator';
import GetQuote from '../components/GetQuote';
import Navbar from '../components/Navbar';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';
import Navbarlayout from '../components/navbarlayout';



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

// GetQuote component tests

describe('GetQuote', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should display loading text on the screen when waiting for api response', () => {
    // Arrange
    jest.spyOn(axios, 'get').mockImplementation(() => new Promise(() => {}));
    // Act
    render(<GetQuote />);

    // Assert
    const loadingText = screen.getByText('Loading ...');
    expect(loadingText).toBeInTheDocument();
  });

  test('should display the quote on the screen when it gets the data from the Api', async () => {
    // Arrange
    const responseQuote = {
      data: [
        {
          quote: 'Hello',
          author: 'Luis',
        },
      ],
    };
    jest.spyOn(axios, 'get').mockResolvedValue(responseQuote);

    // Act
    render(<GetQuote />);

    // Assert
    const quoteText = await screen.findByText('“Hello” - Luis');
    expect(quoteText).toBeInTheDocument();
  });

  test('should display error message on the screen when api get method fails', async () => {
    // Arrange
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('API request failed'));

    // Act
    render(<GetQuote />);

    // Assert
    const errorMessage = await screen.findByText('Sorry... We are experiencing some errors..');
    expect(errorMessage).toBeInTheDocument();
  });



  //  TEST IF NAVBAR IS RENDERED WITHOUT ERRORS
  test('renders Navbar component without errors', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  //  TEST IF HOME IS RENDERED WITHOUT ERRORS
  test('renders Navbar component without errors', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  //  TEST IF NAVBAR LAYOUT IS RENDERED WITHOUT ERRORS
  test('renders Navbar component without errors', () => {
    render(
      <MemoryRouter>
        <Navbarlayout />
      </MemoryRouter>
    );
  });



});

