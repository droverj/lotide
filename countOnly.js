const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  let results = {};

  // for (const item in itemsToCount) {
  //   if (itemsToCount[item] === true) {
  //     // console.log(item);
  //   }
  // }
  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      // condition set to only increment results counter if the item in itemsToCount is true
    if (results[item]) {
      results[item] += 1;
      // sets a property inside the results object with the string of 'item' as the key
      // the value will be set to 1 for each item
      // if the key appears again, it will increment by 1 each time
    } else {
      results[item] = 1;
      // if the key does not appear again, the value will remain as 1
    }
  }
  }
  // console.log(results);

  return results;
}
// countOnly returns an object with a count on all the strings in allItems, the input array

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1); // true and appears in firstNames once
assertEqual(result1["Karima"], undefined); // true and does not appear in firstNames
assertEqual(result1["Fang"], 2); // true and appears in firstNames twice
assertEqual(result1["Agouhanna"], undefined); // false and appears in firstNames once