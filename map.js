const eqArrays = function(actual, expected) {
  for (const elmt of actual) {
    if (typeof actual[elmt] === "string" && typeof expected[elmt] !== "string") {
      return false;
    }
    if (typeof expected[elmt] === "string" && typeof actual[elmt] !== "string") {
      return false;
    }
  }
  for (const elmt in actual) {
    if (actual[elmt] !== expected[elmt]) {
      return false;
      // loops through the first array and compares each element to the same index in the second array
    }
    if (expected.length !== actual.length) {
      return false;
    }
    if (actual[elmt] === expected[elmt]) {
      return true;
    }
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (eqArrays(actual, expected) === false) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];

// A function which takes in an array and a callback.
// It returns a modified version of the original array based on the callback.
const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};


// TEST CODE


// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

// const emptyArray = [];
// const results2 = map(emptyArray, word => word);
// assertArraysEqual(results2, []);

// const nums = [1, 2, 3, 4, 5];
// const results3 = map(nums, num => num * 2);
// assertArraysEqual(results3, [2, 4, 6, 8, 10]);

// const results4 = map(words, word => word.slice(1));
// assertArraysEqual(results4, [ 'round', 'ontrol', 'o', 'ajor', 'om' ]);

// const results5 = map(words, word => word[0].toUpperCase() + word.slice(1));
// assertArraysEqual(results5, ['Ground', 'Control', 'To', 'Major', 'Tom']);

// const results6 = map(nums, num => num > 3);
// assertArraysEqual(results6, [false, false, false, true, true]);

module.exports = map;