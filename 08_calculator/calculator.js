const add = function() {
  return arguments[0]+arguments[1];
};

const subtract = function() {
	return arguments[0]-arguments[1];
};

const sum = function() {
  let total = 0;
  arr = arguments[0];
  if (arr.length !== 0) {
    for (i = 0; i < arr.length; i++) {
      total = total + parseFloat(arr[i]);
    }
  }
  else {
    total = 0;
  }
  return total;
};

const multiply = function() {
  let total = 1;
  arr = arguments[0];
  if (arr.length !== 0) {
    for (i = 0; i < arr.length; i++) {
      total = total * parseFloat(arr[i]);
    }
  }
  else {
    total = 0;
  }
  return total;
};

const power = function(n, p) {
  return Math.pow(n, p);
};

const factorial = function(n) {
  let total = 1;
  if (arr.length !== 0) {
    for (i = n; i > 0; i--) {
      total = total * i;
    }
  }
  else {
    total = 1;
  }
  return total;
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
