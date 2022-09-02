// test/withoutTest.js
const assert = require('chai').assert;
const without = require('../without');

// TEST CODE
describe("#without", () => {
  it("should return the first array but only include items that do not match with items in the second array", () => {
    assert.deepEqual(without([1, 2, 3], [2, 3, 4]), 1);
  });

});