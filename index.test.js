const {
  sum,
  subtract,
  multiply,
  divide,
  greet
} = require('./index');

describe('Math functions', () => {
  test('sum', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('subtract', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('multiply', () => {
    expect(multiply(2, 4)).toBe(8);
  });

  test('divide', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide by zero', () => {
    expect(() => divide(10, 0)).toThrow();
  });
});

describe('Greet function', () => {
  test('greet with name', () => {
    expect(greet('Aman')).toBe('Hello, Aman!');
  });

  test('greet without name', () => {
    expect(greet()).toBe('Hello, Guest!');
  });
});