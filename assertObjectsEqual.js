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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  let result = true;

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key]) === true) {
      return eqArrays(object1[key], object2[key]);
    }

    if (object1[key] === object2[key]) {
      result = true;
    }
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (eqObjects(actual, expected) === false) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { c: "1", d: [3, "2", 4] };
const cd4 = { c: "1", d: ["3", 2, 4] };

assertObjectsEqual(ab, ba) // => true
assertObjectsEqual(ab, abc) // => false
assertObjectsEqual(cd, dc) // => true
assertObjectsEqual(cd2, cd3) // => false
assertObjectsEqual(cd2, cd4) // => false