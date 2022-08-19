const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// A function that compares two arrays
// Returns true if they're the same and false if they're not
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

// console.log(eqArrays([], [123]));
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
// console.log(eqArrays([], undefined)); // true
// console.log(eqArrays([""], "")); // false

assertEqual(eqArrays([1,2,3], [1, "2", 3]), false);
assertEqual(eqArrays([""], []), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1], ["1"]), false);
assertEqual(eqArrays([], [123]), undefined);
assertEqual(eqArrays([1, 2, 3], [1, "2", 3, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, "4"]), false);
assertEqual(eqArrays(["123"], [123]), false);
assertEqual(eqArrays(["hello"], ["hello"]), true);
assertEqual(eqArrays(["hello"], ["hello", "there"]), false);