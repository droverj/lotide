// test/assertArraysEqualTest.js

const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(["hello"], ["hello"]); // Pass
assertArraysEqual([1,2,3], [1, 2, 3]); // Pass
assertArraysEqual([""], [""]); // Pass
assertArraysEqual([], [123]); // Undefined
assertArraysEqual([1,2,3], [1, 2, 3, 4]); // Fail
assertArraysEqual([1,2,3], [1, "2", 3]); // Fail
assertArraysEqual([3,2,1], [1,2,3]); // Fail
assertArraysEqual([1], ["1"]); // Fail
assertArraysEqual(["hello"], ["hello", "there"]); // fail