# Merging-Arrays
![image](https://github.com/gitbiruk2010/Merging-Arrays/assets/103274295/55422f92-27f0-4b43-ad79-3e78e9cdc55e)
# Array Merging Example

## Overview
This example demonstrates the process of merging two arrays into a single array using JavaScript's spread syntax.

## Arrays Initialization
Two arrays of numbers are defined:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
array1 contains the numbers 1, 2, and 3, while array2 includes the numbers 4, 5, and 6.
Merging Arrays

To combine these two arrays into one, the spread syntax is used:
const mergedArray = [...array1, ...array2];

The spread syntax (...) is used to expand each array's elements into the new mergedArray. This creates a new array that includes all elements from both array1 and array2.
Output

The newly merged array is then printed to the console to display the result:
console.log(mergedArray);

When this line is executed, it will output the merged array, which should look like this: [1, 2, 3, 4, 5, 6], showing all the elements from both arrays now seamlessly combined into one.
