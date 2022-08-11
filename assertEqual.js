// Assertion function to test if expected outputs return true

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  }
  if (actual !== expected) {
    console.log("❌❌❌ Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Lighthouse", "Lighthouse");
// assertEqual(1, 1);
// assertEqual(0, 1);
// assertEqual("1", 1);