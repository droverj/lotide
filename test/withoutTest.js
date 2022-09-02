// test/withoutTest.js
const assert = require('chai').assert;
const without = require('../without');

// TEST CODE
describe("#without", () => {
  it("should return the source array but with items not found in the itemToRemove array", () => {
    assert.deepEqual(without([1,2,3], [1,4,5]), [2, 3]);
  });

  it("should return the source array but with items not found in the itemToRemove array", () => {
    assert.deepEqual(without(["Hello", "Lighthouse", "Labs"], ["Hello", "Hi", "Hey"]), ["Lighthouse", "Labs"]);
  });

  it("should return the source array but with items not found in the itemToRemove array", () => {
    assert.deepEqual(without([1, "3", 3], [2, 3, 5]), [1, "3"]);
  });

  it("should return the source array but with items not found in the itemToRemove array", () => {
    assert.deepEqual(without([1, "3", 3], [2, "3", 5]), [1, 3]);
  });

  it("should return the source array but with items not found in the itemToRemove array", () => {
    assert.deepEqual(without(["1", 3, 4, 7], ["1", "3", 5, 5, 6, "7"]), [3, 4, 7]);
  });

  it("should return an array with an empty string if the first array is an empty string", () => {
    assert.deepEqual(without([""], ["1"]), [""]);
  });

  it("should return undefined if the source argument is not an array", () => {
    assert.strictEqual(without(123, [4, 5, 6]), undefined);
  });

  it("should return a copy of the source array if no numbers match in the itemToRemove array", () => {
    assert.deepEqual(without([1, 2, 3], [4, 5, 6]), [1, 2, 3]);
  });
});