// assertObjectsEqual.js
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // added the util library's inspect function
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  if (eqObjects(actual, expected) === false) {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// const cd3 = { c: "1", d: [3, "2", 4] };
// const cd4 = { c: "1", d: ["3", 2, 4] };

// assertObjectsEqual(ab, ba); // => true
// assertObjectsEqual(ab, abc); // => false
// assertObjectsEqual(cd, dc); // => true
// assertObjectsEqual(cd2, cd3); // => false
// assertObjectsEqual(cd2, cd4); // => false

module.exports = assertObjectsEqual;