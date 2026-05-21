function checkDivisible(dividend, divisor) {
  return !(dividend % divisor)
}

const leapYears = function(year) {
  if (!checkDivisible(year, 4)) { return false }
  if (checkDivisible(year, 100)) {
    if (checkDivisible(year, 400)) {
      return true
    }
    return false
  }
  return true
};

// Do not edit below this line
module.exports = leapYears;
