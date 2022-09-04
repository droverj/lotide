// letterPositions.js
// const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};

  if (typeof sentence !== "string" || sentence === "") {
    return undefined;
  }

  sentence = sentence.toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

// TEST CODE
// console.log(letterPositions("hello"));
// console.log(letterPositions("hello").e);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
// assertArraysEqual(letterPositions(""), undefined);
// assertArraysEqual(letterPositions(123), undefined);
// assertArraysEqual(letterPositions([]), undefined);
// assertArraysEqual(letterPositions("HeLlO").l, [2, 3]);

module.exports = letterPositions;