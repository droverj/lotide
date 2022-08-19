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
  if (eqArrays(actual, expected) === undefined) {
    console.log(`🟡🟡🟡 Assertion Undefined`);
  }
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (eqArrays(actual, expected) === false) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(["hello"], ["hello"]); // Pass
assertArraysEqual([1,2,3], [1, 2, 3]); // Pass
assertArraysEqual([""], [""]); // Pass
assertArraysEqual([], [123]); // Undefined
assertArraysEqual([1,2,3], [1, 2, 3, 4]); // Fail
assertArraysEqual([1,2,3], [1, "2", 3]); // Fail
assertArraysEqual([3,2,1], [1,2,3]); // Fail
assertArraysEqual([1], ["1"]); // Fail
assertArraysEqual(["hello"], ["hello", "there"]); // fail