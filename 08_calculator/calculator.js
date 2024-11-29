const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
	const arr = [];
  for(let i = 0; i < b; i++) {
    arr.push(a);
  };
  return multiply(arr);
  
};

const factorial = function(n) {
	const arr = [];
  for(let i = 1; i <= n; i++) {
    arr.push(i);
  };
  return multiply(arr);
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
