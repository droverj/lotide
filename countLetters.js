const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function that takes in a sentence as a string
// returns a count of each of the letters in that sentence
// will return an object
const countLetters = function(sentence) {
  const result = {};

  if (typeof sentence !== "string" || sentence === "") {
    return undefined;
  }
  
  sentence = sentence.toLowerCase();

  for (const letter of sentence) {
    if (letter !== " ") {
      // skip spaces
      if (result[letter]) {
        result[letter] += 1;
        // if the letter already exists in result, add 1 to the value
      } else {
        result[letter] = 1;
        // for each letter in the sentence, set a key of that letter to result with
        // a value of 1 for each letter
      }
    }
  }
  // console.log(result);
  return result;
};


const result1 = countLetters("hello");
// { "h": 1, "e": 1, "l": 2, "o": 1 };

assertEqual(result1["h"], 1); // h appears in hello once, compares the value in "h" key
assertEqual(result1["l"], 2);


const result2 = countLetters("lighthouse in the house");
assertEqual(result2["e"], 3);
assertEqual(result2[" "], undefined);

const result3 = countLetters("wEiRd RiGhT");
assertEqual(result3["r"], 2); // expected 2, returned undefined => fixed

const result4 = countLetters(123);
assertEqual(result4, undefined);

const result5 = countLetters("");
assertEqual(result5, undefined);