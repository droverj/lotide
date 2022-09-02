const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
    }
    if (expected.length !== actual.length) {
      return false;
    }
    if (actual[elmt] === expected[elmt]) {
      return true;
    }
  }
};

// function takes in two objects as the arguments
// returns true if the objects are the same and false otherwise
// objects must have the same # of keys
// the values for each key are the same in both objects
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  let result = true;

  if (keys1.length !== keys2.length) {
    return false;
  }
  // if the number of keys aren't equal, return false

  for (const key in object1) {
    if (Array.isArray(object1[key]) === true) {
      return eqArrays(object1[key], object2[key]);
    }
    // If the object has an array as a value for a key, use the eqArrays function to compare

    if (object1[key] === object2[key]) {
      result = true;
      // let's the loop complete
    }
  }
  return result;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// eqObjects(ab, ba); // -> true

// const abc = { a: "1", b: "2", c: "3" };

// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// const cd3 = { c: "1", d: [3, "2", 4] };

// eqObjects(cd, cd2); // => false
// eqObjects(cd2, cd3);

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqObjects(cd3, cd2), false);

module.exports = eqObjects;