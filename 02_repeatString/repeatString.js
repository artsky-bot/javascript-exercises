const repeatString = function (string, num) {
  try {
    string.repeat(num);
  } catch {
    return "ERROR";
  }
  return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
