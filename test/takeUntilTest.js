// takeUntilTest.js
const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

// TEST CODE
describe("#takeUntil", () => {
  it("should return undefined if the argument is not an array", () => {
    assert.strictEqual(takeUntil("", num => num < 0), undefined);
  });

  it("should return a slice of the array from the beginning until a truthy value is found", () => {
    assert.deepEqual(takeUntil(["hey", "hey", "you", "you"], word => word === "you"), ["hey", "hey"]);
  });

  it("should return a slice of the array from the beginning until a truthy value is found", () => {
    assert.deepEqual(takeUntil([0, -1, -2, -3], num => num < 0), [0]);
  });
});