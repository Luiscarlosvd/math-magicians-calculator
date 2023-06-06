import Big from 'big.js';
import operate from '../logic/operate';

describe('operate', () => {
  test('return the correct result for addition', () => {
    // Arrange
    // Act
    const result = operate('2', '3', '+');
    // Assert
    expect(result).toEqual(Big('2').plus(Big('3')).toString());
  });

  test('return the correct result for subtraction', () => {
    // Arrange
    // Act
    const result = operate('6', '3', '-');
    // Assert
    expect(result).toEqual(Big('6').minus(Big('3')).toString());
  });

  test('return the correct result for multiplication', () => {
    // Arrange
    // Act
    const result = operate('4', '2', 'x');
    // Assert
    expect(result).toEqual(Big('4').times(Big('2')).toString());
  });

  test('return the correct result for division', () => {
    // Arrange
    // Act
    const result = operate('6', '3', '÷');
    // Assert
    expect(result).toEqual(Big('6').div(Big('3')).toString());
  });

  test('return error message when dividing by 0', () => {
    // Arrange
    // Act
    const result = operate('6', '0', '÷');
    // Assert
    expect(result).toEqual("Can't divide by 0.");
  });

  test('return the correct result for mod operation', () => {
    // Arrange
    // Act
    const result = operate('7', '3', '%');
    // Assert
    expect(result).toEqual(Big('7').mod(Big('3')).toString());
  });

  test('return error message when finding mod with divisor of 0', () => {
    // Arrange
    // Act
    const result = operate('7', '0', '%');
    // Assert
    expect(result).toEqual("Can't find modulo as can't divide by 0.");
  });

  test('should throw an error for an unknown operation', () => {
    // Arrange
    const numberOne = '2';
    const numberTwo = '3';
    const operation = '$';

    // Act and Assert
    expect(() => operate(numberOne, numberTwo, operation)).toThrowError(`Unknown operation '$'`);
  });
});