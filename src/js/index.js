const display = document.getElementById("display");

// Addition function
function add(a, b) {
  return a + b;
}

// Subtraction function
function subtract(a, b) {
  return a - b;
}

// Multiplication function
function multiply(a, b) {
  return a * b;
}

// Division function
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

// Function to append value to the display
function appendValue(display, value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay(display) {
  display.value = "";
}

// Function to delete the last character
function deleteLast(display) {
  display.value = display.value.slice(0, -1);
}

// Function to parse and calculate the result
function calculate() {
  try {
    const result = evaluateExpression(display.value);
    display.value = result;
  } catch (error) {
    alert(error.message);
    clearDisplay();
  }
}

// Function to evaluate an expression using the operation functions
function evaluateExpression(expression) {
  const operators = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
  };

  const tokens = expression.match(/(\d+\.?\d*|\.\d+|[+\-*/])/g);
  if (!tokens) throw new Error("Invalid expression");

  const values = [];
  const ops = [];

  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };

  const applyOperator = () => {
    const b = values.pop();
    const a = values.pop();
    const op = ops.pop();
    const operation = operators[op];
    if (!operation) throw new Error("Invalid operator");
    values.push(operation(a, b));
  };

  for (const token of tokens) {
    if (!isNaN(token)) {
      values.push(parseFloat(token));
    } else if (operators[token]) {
      while (ops.length && precedence[ops[ops.length - 1]] >= precedence[token]) {
        applyOperator();
      }
      ops.push(token);
    } else {
      throw new Error("Invalid token");
    }
  }

  while (ops.length) {
    applyOperator();
  }

  if (values.length !== 1) throw new Error("Invalid calculation");
  return values[0];
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  appendValue,
  clearDisplay,
  deleteLast,
};