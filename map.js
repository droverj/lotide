// map.js
// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

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
// const words = ["ground", "control", "to", "major", "tom"];
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