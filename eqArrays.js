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
  for (const item in actual) {
    if (Array.isArray(actual[item])) {
      if (!eqArrays(actual[item], expected[item])) {
        return false;
      }
    } else if (actual[item] !== expected[item]) {
      return false
    }
  }
  return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // true
console.log(eqArrays([1, 3, 3], [1, 2, 3])); // false
console.log(eqArrays([1, [3, 3]], [1, [3, 3]])); // true
console.log(eqArrays([1, [2, 3]], [1, [3, 3]])); // false
console.log(eqArrays([1, [3, 3], [4, 5, 6]], [1, [3, 3], [4, 5, 6]])); // true
console.log(eqArrays([1, [3, 3, [4, 5, 6]]], [1, [3, 3, [4, 5, 6]]])); // true
console.log(eqArrays([1, [3, 3, [4, 5, 6]]], [1, [3, 3, [4, 5, [6]]]])); // false




module.exports = eqArrays;