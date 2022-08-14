const eqArrays = function(actual, expected) {
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (eqArrays(actual, expected) === false) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// A function which is passed an array of arrays as an argument
// Returns a single "flattened" array
const flatten = function(arrays) {
  let result = [];

  for (let i = 0; i < arrays.length; i++) {
    // loop through the outer array
    if (Array.isArray(arrays[i]) === false) {
      result.push(arrays[i])
      // if the element is not an array, push it into a new array
    };
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
assertArraysEqual(flatten([[], [], 1, [2, 3]]), [1, 2, 3]);
assertArraysEqual(flatten(["Lighthouse", ["Labs", "Inc"]]), ["Lighthouse", "Labs", "Inc"]);
assertArraysEqual(flatten([[], [0], "hello", 0, [1, 2, 3]]), [0, "hello", 0, 1, 2, 3]);
assertArraysEqual(flatten([[], []]), []);



