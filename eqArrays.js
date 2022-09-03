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
    // object destructuring with the entries() method
    // entries method returns an object with key value pairs for each index
    if (Array.isArray(value)) {
      // recursion begins
      if (!eqArrays(actual[index], expected[index])) {
        // function will stop calling itself if it is not an array
        // it will return false if one of the elements do not match
        return false;
      }
    } else if (actual[index] !== expected[index]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;