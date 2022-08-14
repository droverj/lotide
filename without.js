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

// Function that takes in two arrays. An item that appears in both the first and second array
// is removed from the source array.
const without = function(source, itemToRemove) {
  let filtered = [];
  let removeStr;

  for (const num of source) {
    // for... of loop - returns a list of values of numeric properties
    if (typeof source[num] === "number" && source[num] !== itemToRemove[num]) {
      filtered.push(source[num])
      // source array is pushed into new array (filtered) if an element didnt also appear
      //  in itemsToRemove array
    }
  }
  if (typeof source[0] === "number") {
    // if the first array is an array of numbers...
    return filtered;
  }

  for (const elmt in itemToRemove) {
    // for...in loop returns a list of keys on the object being iterated over
    if (typeof itemToRemove[elmt] === "string" && typeof source[elmt] === "string") {
      removeStr = itemToRemove.toString();
      // console.log(removeStr);
    }
  }
  for (const elmt in source) {
    if (source[elmt] !== removeStr) {
      filtered.push(source[elmt]);
    }
  }
  return filtered;
}


// without([10,0,1], [, 1])
 
// assertArraysEqual(without(["1", "2", "3"], ["2"]), ["1", "3"])
// assertArraysEqual(without([10, 0, 1], [1]), [10, 0])

// without(["1", "2", "3"], ["2"]); // => ["1", "3"]
// without(["hello", "world", "lighthouse"], ["world"]) // => ["hello", "lighthouse"]

// without([1, 2, 3], [1, "2", "3"]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
// without(["1"], ["1"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"])

// assertArraysEqual(without([1, 2, 3], ["1", 2, 3]), [1]) 
// assertArraysEqual(without([""], ["1"]), [""])
// assertArraysEqual(without([], ["1"]), [])