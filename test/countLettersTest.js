// test/countLettersTest.js
const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("should return an object which represents a count of letters in a string", () => {
    assert.deepEqual(countLetters('Lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });

  it("should return the value for the letter key when accessed", () => {
    assert.deepEqual(countLetters('hello').l, 2);
  });

  it("should return undefined when passed an empty string", () => {
    assert.strictEqual(countLetters(""), undefined);
  });

  it("should return undefined if it is not passed a string", () => {
    assert.strictEqual(countLetters(123), undefined);
  });
});