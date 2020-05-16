function evaluate(expression) {
  const operands = [];
  const operators = [];

  for (const char of expression) {
    if (isOperand(char)) {
      operands.push(char);
    } else if (isOperator(char)) {
      while (
        operators.length !== 0 &&
        precedence(operators[operators.length - 1]) >= precedence(char)
      ) {
        process(operators, operands);
      }
      operators.push(char);
    } else if (char === "(") {
      operators.push(char);
    } else if (char === ")") {
      while (operators[operators.length - 1] !== "(") {
        process(operators, operands);
      }
      operators.pop();
    }
  }
  while (operators.length !== 0) {
    process(operators, operands);
  }
  return operands.pop();
}

function process(operators, operands) {
  const num1 = Number(operands.pop());
  const num2 = Number(operands.pop());
  const operator = operators.pop();
  let result = 0;
  switch (operator) {
    case "*":
      result = num2 * num1;
      break;
    case "/":
      result = Math.floor(num2 / num1);
      break;
    case "+":
      result = num2 + num1;
      break;
    case "-":
      result = num2 - num1;
      break;
  }
  operands.push(result);
}

function isOperator(char) {
  return char === "/" || char === "*" || char === "+" || char === "-";
}

function isOperand(char) {
  return Number(char).toString() === char;
}

function precedence(operator) {
  switch (operator) {
    case "/":
    case "*":
      return 2;
    case "+":
    case "-":
      return 1;
  }
}

console.log(evaluate("(1+2)/(1+2)*3"));
