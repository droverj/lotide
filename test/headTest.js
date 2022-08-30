// test/headTest.js

const assertEqual = require('../assertEqual');
const head = require('../head.js');

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["one"]), "one");
assertEqual(head([]), undefined);
assertEqual(head(["1"]), "1");
assertEqual(head([1]), 1);