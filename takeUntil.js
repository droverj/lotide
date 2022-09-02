// takeUntil.js

// A function which takes in an array and a callback
// The function returns a slice of the array with elements taken from the beginning
// The function stops executing once a truthy value is found
// The callback is only provided with one item from the array
const takeUntil = function(array, callback) {
  if (Array.isArray(array) === false) {
    return undefined;
  }

  const result = [];

  for (const item of array) {
    if (callback(item) === true) {
      return result;
    }
    if (callback(item) === false) {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;