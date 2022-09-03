const eqArrays = require('./eqArrays');

// function takes in two objects as the arguments
// returns true if the objects are the same and false otherwise
// objects must have the same # of keys
// the values for each key are the same in both objects
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const item of keys1) {
    if (typeof object1[item] !== "object") {
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
    if (typeof object1[item] === "object") {
      if (!Array.isArray(object1[item])) {
        if (!eqObjects(object1[item], object2[item])) {
          return false;
        }
      }
    }
    if (Array.isArray(object1[item])) {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      }
    }
  }
  return true;
};

// TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// console.log(eqObjects(ab, ba)); // -> true

// const abc = { a: "1", b: "2", c: "3" };

// console.log(eqObjects(ab, abc)); // => false

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// const cd3 = { c: "1", d: [3, "2", 4] };

// console.log(eqObjects(cd, cd2)); // => false
// eqObjects(cd2, cd3);

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqObjects(cd3, cd2), false);

// obj1 = { a: { a: 1, b: 2 }, b: 2 };
// obj2 = { a: { a: 1, b: 2 }, b: 2 };
// obj3 = { a: { a: 1, b: 3 }, b: 2 };

// console.log(eqObjects(obj1, obj2)); // true
// console.log(eqObjects(obj1, obj3)); // false

// objs1 = { a: { a: { a: 1 }, b: 2 }, b: 2 };
// objs2 = { a: { a: { a: 1 }, b: 2 }, b: 2 };
// objs3 = { a: { a: { b: 2 }, b: 2 }, b: 2 };

// console.log(eqObjects(objs1, objs2)); // true
// console.log(eqObjects(objs1, objs3)); // false

// objs4 = { a: { a: { a: 1 }, b: [1, 2, 3] }, b: 2 };
// objs5 = { a: { a: { a: 1 }, b: [1, 2, 3] }, b: 2 };
// objs6 = { a: { a: { a: 1 }, b: [4, 5, 6] }, b: 2 };

// console.log(eqObjects(objs4, objs5)); // true
// console.log(eqObjects(objs4, objs6)); // false

// objs7 = { a: { a: { a: 1 }, b: [1, 2, 3] }, b: [1, 2, 3] };
// objs8 = { a: { a: { a: 1 }, b: [1, 2, 3] }, b: [1, 2, 3] };

// console.log(eqObjects(objs7, objs8)); // false

module.exports = eqObjects;