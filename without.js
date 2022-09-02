// without.js

// Function takes an array in each of the two args
// An item that appears in both the first (source) and second array is removed from the source array
// The modified source array is returned
const without = (source, itemToRemove) => {
  if (!Array.isArray(source)) {
    return undefined;
  }

  let filterOut;
  const newSource = [];
  for (const item of itemToRemove) {
    if (source.includes(item)) {
      filterOut = item;
    }
  }
  for (const item of source) {
    if (item !== filterOut) {
      newSource.push(item);
    }
  }
  return newSource;
};

// console.log(without([1,3,3], [2,3,5])); // [1];
// console.log(without([1,"3",3], [2,1,5])); // ["3", 3];
// console.log(without(["1", "3", 3, 4], ["1", 5, 5, 6, "7"])); // ["3", 3, 4]
// console.log(without([1, 2, 3], [4, 5, 6]));
module.exports = without;