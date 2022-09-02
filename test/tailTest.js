// test/tailTest.js
const assert = require('chai').assert;
const tail = require('../tail');


// Test Case 1: tail returns a new array and not a modified version of original array
// const words = ["Yo Yo", "Lighthouse", "Lab"];
// tail(words);
// assertEqual(words.length, 3);

// // Test Case 2: Confirms tail is returning desired output
// const test = tail(["this", "is", "a", "test"]);
// assertEqual(test[0], "is");
// assertEqual(test[1], "a");
// assertEqual(test.length, 3);


// // Test Case 3: Assertions for an empty array
// const empty = tail([]);
// assertEqual(empty[0], undefined);
// assertEqual(empty.length, 0);

// console.log(module)

describe("#tail", () => {
  it("should return ['Lighthouse', 'Lab'] for ['Yo Yo', 'Lighthouse', 'Lab']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Lab']), ['Lighthouse', 'Lab']);
  });

  it("should return [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("should return undefined for an empty array", () => {
    assert.strictEqual(tail([]), undefined);
  });

  it("should return undefined for an array with less than two items", () => {
    assert.strictEqual(tail([1]), undefined);
  });

  it("should return undefined if it is not an array", () => {
    assert.strictEqual(tail("hello"), undefined);
  });
});