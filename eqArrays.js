// A function that compares two arrays
// Returns true if they're the same and false if they're not
// const eqArrays = function(actual, expected) {
//   for (const elmt of actual) {
//     if (typeof actual[elmt] === "string" && typeof expected[elmt] !== "string") {
//       return false;
//     }
//     if (typeof expected[elmt] === "string" && typeof actual[elmt] !== "string") {
//       return false;
//     }
//   }
//   for (const elmt in actual) {
//     if (actual[elmt] !== expected[elmt]) {
//       return false;
//       // loops through the first array and compares each element to the same index in the second array
//     }
//     if (expected.length !== actual.length) {
//       return false;
//     }
//     if (actual[elmt] === expected[elmt]) {
//       return true;
//     }
//   }
// };

const eqArrays = function(actual, expected) {
  if (actual.length === 0) {
    return undefined;
  }
  for (const elmt in actual) {
    if (actual[elmt] !== expected[elmt]) {
      return false;
    }
    if (expected.length !== actual.length) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;