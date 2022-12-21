const removeFromArray = function (randomArray, ...valArgs) {
  let valuesArray = [];
  for (const val of valArgs) {
    valuesArray.push(val);
  }

  valuesArray.forEach((value) => {
    if (randomArray.indexOf(value) == -1) {
      return;
    }
    randomArray.splice(randomArray.indexOf(value), 1);
  });

  return randomArray;
};

// Do not edit below this line
module.exports = removeFromArray;
