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

};
console.log(power(4,3));

const factorial = function() {
	
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
