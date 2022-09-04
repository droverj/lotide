# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @droverj/lotide`

**Require it:**

`const _ = require('@droverj/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: The head function is passed in an array and returns the first element of the array.
* `tail(array)`: The tail function is passed in an array and returns the remainder of the array after the first element is removed.
* `middle(array)`: The middle function is passed in an array and returns the middle element(s). If the array is an even length, the two middle elements are returned.
* `assertArraysEqual(actual, expected)`: The assertArraysEqual function is passed in two arrays and compares them. It prints "Assertion Passed" if the two arrays are the same or "Assertion Failed" if not.
* `assertEqual(actual, expected)`: The assertEqual function is passed in two primitive data types and compares them. It prints "Assertion Passed" if the two arrays are the same or "Assertion Failed" if not.
* `assertObjectsEqual(actual, expected)`: The assertObjectsEqual function is passed in two objects and compares them. It prints "Assertion Passed" if the two objects are the same or "Assertion Failed" if not.
* `countLetters(sentence)`: The countLetters function is passed in a string and returns an object. The object contains key/value pairs for each letter in the string. The values hold a count for the number of times each letter appears.
* `countOnly(allItems, itemsToCount)`: The countOnly function is passed in an array of strings and an object. The object tells the function what to look for. It only returns if the key's value is true.
* `eqArrays(actual, expected)`: The eqArrays function is passed in two arrays and compares them. It returns true if they are the same or false if they are not.
* `eqObjects(object1, object2)`: The eqObjects function is passed in two objects and compares them. It returns true if they are the same or false if they are not.
* `findKey(object, callback)`: The findKey function is passed in an object and a callback function. It returns the first key which returns a truthy value.
* `findKeyByValue(object, value)`: The findKeyByValue function is passed in an object and a primitive data type value. It returns the first key which contains the given value.
* `flatten(arrays)`: The flatten function is passed in an array of arrays. It returns a single array of all elements from within the array of arrays.
* `letterPositions(sentence)`: The letterPositions function is passed in a string and and converts it into an object. The keys are the letters of the strings and the values are the index on which those letters appear in an array. If accessed using a search letter ( letterPositions("hello").e ), the function will return an array containing the index the letter appears on.
* `map(array, callback)`: The map function is passed in an array and a callback function. It returns a modified version of the original array based on the conditions of the callback.
* `takeUntil(array, callback)`: The takeUntil function is passed in an array and a callback function. Starting from index 0, it returns a slice of the array and ends once the condition of the callback is met.
* `without(source, itemToRemove)`: The without function is passed in two arrays. If an item in the first array appears in the second array, it is removed from the first array and the modified array is returned.