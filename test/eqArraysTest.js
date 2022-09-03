// test/eqArraysTest
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
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
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // true
assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), false); // false
assertEqual(eqArrays([1, [3, 3]], [1, [3, 3]]), true); // true
assertEqual(eqArrays([1, [2, 3]], [1, [3, 3]]), false); // false
assertEqual(eqArrays([1, [3, 3], [4, 5, 6]], [1, [3, 3], [4, 5, 6]]), true); // true
assertEqual(eqArrays([1, [3, 3, [4, 5, 6]]], [1, [3, 3, [4, 5, 6]]]), true); // true
assertEqual(eqArrays([1, [3, 3, [4, 5, 6]]], [1, [3, 3, [4, 5, [6]]]]), false); // false