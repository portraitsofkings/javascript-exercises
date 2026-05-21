
const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) { return "ERROR"; }
  if (min < 0 || max < 0) { return "ERROR"; }
  if (min > max) { [ min, max ] = [ max, min ]; }

  // or without using arrays, just in a for loop
  const arr = []
  const SUM_INITIAL = 0

  for (let i = min; i <= max; i++) { arr.push(i); }
  return arr.reduce((sum, currentNumber) => sum += currentNumber, SUM_INITIAL)
};

// Do not edit below this line
module.exports = sumAll;
