// test/tailTest.js
const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE
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