const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// A function which takes in an object and a callback
// The function returns the first key which returns a truthy value
const findKey = function(object, callback) {
  const keys = Object.keys(object);
  
  for (const item of keys) {
    if (callback(object[item]) === true) {
      return (item);
    }
  }
};

// TEST CODE

// const results1 = findKey({
//   "Blue Hill":  { stars: 1 },
//   "noma":       { stars: 2 },
//   "elBulli":    { stars: 3 },
//   "Ora":        { stars: 2 },
//   "Akelarre":   { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// console.log(results1);

// const results2 = findKey({
//   string: "string",
//   numbers: 123,
//   numArr: [1, 2, 3],
//   words: ["Hello", "World"]
// }, x => Array.isArray(x));

// console.log(results2);

// const results3 = findKey({
//   first:
//     { second: "final"}
// }, x => x.second === "final"); // => first

// function didn't work on third object within an object

// console.log(results3);

// const results4 = findKey({
//   "Blue Hill":  { stars: 1 },
//   "Akaleri":    { stars: 3 },
//   "noma":       { stars: 2 },
//   "elBulli":    { stars: 3 },
//   "Ora":        { stars: 2 },
//   "Akelarre":   { stars: 3 }
// }, x => x.stars === 3); // => "Akaleri"

// assertEqual(results1, "noma");
// assertEqual(results2, "numArr");
// assertEqual(results3, "first");
// assertEqual(results4, "Akaleri");
// assertEqual(findKey({}, x => x + x), undefined);
// assertEqual(findKey(123, x => x - x), undefined);
// assertEqual(findKey([123], x => x * 2), undefined);

// const results5 = findKey({
//   first:
//     { second:
//       { third: "final" }
//     }
// }, x => x.second.third === "final"); // => first

// console.log(results5);

module.exports = findKey;