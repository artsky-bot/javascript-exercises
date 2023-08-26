const fibonacci = function (fibNumb) {
  if (fibNumb < 0) {
    return "OOPS";
  }
  let currentNumb = 0;
  let nextNumb = 1;
  let total;
  for (let i = 0; i < parseInt(fibNumb); i++) {
    total = currentNumb + nextNumb;
    currentNumb = nextNumb;
    nextNumb = total;
  }
  return currentNumb;
};

// Do not edit below this line
module.exports = fibonacci;
