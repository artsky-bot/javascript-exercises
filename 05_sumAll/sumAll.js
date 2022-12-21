const sumAll = function (firstVal, secondVal) {
  let sum = 0;

  if (
    firstVal < 0 ||
    typeof firstVal != "number" ||
    secondVal < 0 ||
    typeof secondVal != "number"
  ) {
    return "ERROR";
  }

  for (
    let i = firstVal > secondVal ? secondVal : firstVal;
    i <= (firstVal > secondVal ? firstVal : secondVal);
    i++
  ) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
