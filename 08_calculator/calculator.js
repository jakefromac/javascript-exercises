const add = function(...args) {
	return args.reduce((sum, current) => sum + current);
};

const subtract = function(...args) {
  return args.reduce((sum, current) => sum - current);
};

const sum = function(args) {
  return args.reduce((sum, current) => sum + current, 0);
};

const multiply = function(args) {
  return args.reduce((sum, current) => sum * current);
};

const power = function(num1, num2) {
  return Math.pow(num1, num2)
};

const factorial = function(n) {
	if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
