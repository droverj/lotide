// A function which takes in an array and a callback
// The function returns a slice of the array with elements taken from the beginning
// The function stops executing once a truthy value is found
// The callback is only provided with one item from the array

const takeUntil = function(array, callback) {
  if (Array.isArray(array) === false) {
    return undefined;
  }

  const result = [];

  for (const item of array) {
    if (callback(item) === true) {
      return result;
    }
    if (callback(item) === false) {
      result.push(item);
    }
  }
  return result;
};


const eqArrays = function(actual, expected) {
  for (const elmt in actual) {
    if (actual[elmt] !== expected[elmt]) {
      return false;
      // loops through the first array and compares each element to the same index in the second array
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

// TEST CODE
const numbers = [1, 2, 3, 4, 5, -5, -4, -3];

const results1 = takeUntil(numbers, num => num < 0);
// console.log(results1);
assertArraysEqual(results1, [1, 2, 3, 4, 5]);


const words = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results2 = takeUntil(words, word => word === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const numbers2 = [0, -1, -2, -3, -4];

const results3 = takeUntil(numbers2, num => num < 0);
assertArraysEqual(results3, [0]);

const results4 = takeUntil(numbers2, num => num === 0);
assertArraysEqual(results4, []);

const results5 = takeUntil(words, word => word.length > 4);
assertArraysEqual(results5, ["I've", "been", "to"]);

const results6 = takeUntil("hello", word => word[1]);
assertArraysEqual(results6, undefined);