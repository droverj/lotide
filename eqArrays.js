// eqArrays.js

// A function that compares two arrays
// Returns true if they're the same and false if they're not
const eqArrays = function(actual, expected) {
  if (actual.length === 0) {
    return undefined;
  }
  if (actual.length !== expected.length) {
    return false;
  }
  for (const [index, value] of actual.entries()) {
    if (Array.isArray(value)) {
      if (!eqArrays(actual[index], expected[index])) {
        return false;
      }
    } else if (actual[index] !== expected[index]) {
      return false
    }
  }
  return true;
};




module.exports = eqArrays;