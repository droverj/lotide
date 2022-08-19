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
  const values = Object.values(object);
  
  for (const item of keys) {
    if (callback(object[item]) === true) {
      return (item);
    }
  }
};

// TEST CODE

results1 = findKey({
  "Blue Hill":  { stars: 1 },
  "Akaleri":    { stars: 3 },
  "noma":       { stars: 2 },
  "elBulli":    { stars: 3 },
  "Ora":        { stars: 2 },
  "Akelarre":   { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(results1);