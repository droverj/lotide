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


// assertArraysEqual([1,2,3], [1, 2, 3]);
// assertArraysEqual([3,2,1], [1,2,3]);
// assertArraysEqual([], undefined);
// assertArraysEqual([""], []);
// assertArraysEqual([1], ["1"]);