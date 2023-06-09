import Big from 'big.js';
import operate from '../logic/operate';
import calculate from '../logic/calculate';

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
    expect(() => operate(numberOne, numberTwo, operation)).toThrowError('Unknown operation \'$\'');
  });
});

describe('calculate', () => {
  test('update next when a button is pressed', () => {
    // Arrange & Act
    const result = calculate(
      {
        total: '23',
        next: '68',
        operation: '-',
      },
      '4',
    );

    // Assert
    expect(result).toEqual({
      total: '23',
      next: '684',
      operation: '-',
    });
  });

  test('Clear values from calculator when AC is pressed', () => {
    const result = calculate(
      {
        total: '23',
        next: '34',
        operation: '%',
      },
      'AC',
    );

    expect(result).toEqual({
      total: null,
      next: 0,
      operation: null,
    });
  });
});
