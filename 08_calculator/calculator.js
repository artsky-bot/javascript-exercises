const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  const sum = array.reduce((total, current) => {
    return total + current;
  }, 0);
  return sum;
};

const multiply = function (array) {
  const product = array.reduce((total, current) => {
    return total * current;
  });
  return product;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let product = 1;
  if (n === 0 || n === 1) {
    return 1;
  } else {
    for (let i = n; i > 0; i--) {
      product = product * i;
    }
    return product;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
