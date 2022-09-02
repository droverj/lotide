// test/middleTest.js
const assert = require('chai').assert;
const middle = require('../middle');

// TEST CODE
describe("#middle", () => {
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should return an empty array for an array with two or less items", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("should return ['2', '3'] for ['1', '2', '3', '4']", () => {
    assert.deepEqual(middle(['1', '2', '3', '4']), ['2', '3']);
  });

  it("should return ['3'] for ['1', '2', '3', '4', '5']", () => {
    assert.deepEqual(middle(['1', '2', '3', '4', '5']), ['3']);
  });

  it("should return ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']);
  });

  it("should return undefined if it is not an array", () => {
    assert.strictEqual(middle("Hello, World!"), undefined);
  });
});