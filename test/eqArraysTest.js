// test/eqArraysTest

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

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