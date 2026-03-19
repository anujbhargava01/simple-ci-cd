function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a ** b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function greet(name) {
  if (!name) return "Hello, Guest!";
  return `Hello, ${name}!`;
}

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
  greet
};