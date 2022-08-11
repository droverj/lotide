const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// // Test Case 1: tail returns a new array and not a modified version of original array
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