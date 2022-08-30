// A function which returns only the middle element(s) of an array
// arrays with 1 or 2 elements have no middle
// arrays > 2 with an even number of elements return two middle elements
// arrays > 2 with an uneven number of elements return one element

const middle = function(array) {
  let result = [];

  let mid = Math.round(array.length / 2);
  // console.log(mid);
  
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    return array[mid - 1];
  }
  if (array.length % 2 === 0) {
    result.push(array[mid - 1]);
    result.push(array[mid]);
    return result;
  }
};

module.exports = middle;