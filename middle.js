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

// A function which returns only the middle element(s) of an array
// arrays with 1 or 2 elements have no middle
// arrays > 2 with an even number of elements return two middle elements
// arrays > 2 with an uneven number of elements return one element

const middle = function(array) {
  let result = [];

  let mid = Math.round(array.length / 2);
  // console.log(mid);
  
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    return array[mid - 1];
  }
  if (array.length % 2 === 0) {
    result.push(array[mid - 1]);
    result.push(array[mid]);
    return result;
  }
};

// TEST CODE

// middle([1, 2, 3, 4]);

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);