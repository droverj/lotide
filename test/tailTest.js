const assertEqual = require('../assertEqual');
const tail = require('../tail');
// const { tail, assertEqual } = require('../tail', '../assertEqual')


// Test Case 1: tail returns a new array and not a modified version of original array
const words = ["Yo Yo", "Lighthouse", "Lab"];
tail(words);
assertEqual(words.length, 3);

// Test Case 2: Confirms tail is returning desired output
const test = tail(["this", "is", "a", "test"]);
assertEqual(test[0], "is");
assertEqual(test[1], "a");
assertEqual(test.length, 3);


// Test Case 3: Assertions for an empty array
const empty = tail([]);
assertEqual(empty[0], undefined);
assertEqual(empty.length, 0);

// console.log(module)