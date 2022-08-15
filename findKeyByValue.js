const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function takes in an object and a value
// scans the object => returns the first key which contains the given value
// if no key with that value is found, it should return undefined
const findKeyByValue = function(object, value) {
  let result;
  const keys = Object.keys(object);

  for (const key of keys) {
    // console.log(object[key]) // The Wire
    // console.log(key); // drama
    if (value === object[key]) {
      result = key;
    }
  }
  console.log(result);
  return result;
}


// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);