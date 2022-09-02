// flatten.js
// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

// A function which is passed an array of arrays as an argument
// Returns a single "flattened" array
const flatten = function(arrays) {
  let result = [];

  for (let i = 0; i < arrays.length; i++) {
    // loop through the outer array
    if (Array.isArray(arrays[i]) === false) {
      result.push(arrays[i]);
      // if the element is not an array, push it into a new array
    }
    if (Array.isArray(arrays[i]) === true) {
      for (const each of arrays[i]) {
        result.push(each);
        // if the element is an inner array, loop through it and push each element
      }
    }
  }
  return result;
};

// flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
// flatten([[1, 2, 3], 4, 5, [6]]); // => [1, 2, 3, 4, 5, 6]
// flatten([[], [], 1, [2, 3]]); // => [1, 2, 3]
// assertArraysEqual(flatten([[], [], 1, [2, 3]]), [1, 2, 3]);
// assertArraysEqual(flatten(["Lighthouse", ["Labs", "Inc"]]), ["Lighthouse", "Labs", "Inc"]);
// assertArraysEqual(flatten([[], [0], "hello", 0, [1, 2, 3]]), [0, "hello", 0, 1, 2, 3]);
// assertArraysEqual(flatten([[], []]), []);

module.exports = flatten;


