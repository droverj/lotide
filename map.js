const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};


// TEST CODE
const results1 = map(words, word => word[0]);
console.log(results1);

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

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])

const emptyArray = [];

const results2 = map(emptyArray, word => word);

assertArraysEqual(results2, []);

const oneWord = ["one"];

const results3 = map(oneWord, word => word[2]);

assertArraysEqual(results3, ["e"]);