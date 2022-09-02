// eqArrays.js

// A function that compares two arrays
// Returns true if they're the same and false if they're not
const eqArrays = function(actual, expected) {
  if (actual.length === 0) {
    return undefined;
  }
  for (const elmt in actual) {
    if (actual[elmt] !== expected[elmt]) {
      return false;
    }
    if (expected.length !== actual.length) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;