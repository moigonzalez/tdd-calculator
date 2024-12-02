const display = document.getElementById("display");

// Function to append value to the display
function appendValue(value, display = document.getElementById("display")) {
}

// Function to clear the display

// Function to delete the last character

// Function to parse and calculate the result

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

// Exports for test
module.exports = {
  appendValue,
}

// Exports for html
window.appendValue = appendValue;