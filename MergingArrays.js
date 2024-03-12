// Starting with two arrays filled with numbers.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// I can merge them into a single array. Spread syntax lets me unpack both arrays into a new one.
const mergedArray = [...array1, ...array2];

// Let's check out my new combined array by printing it.
// This will show all elements from both arrays, now together.
console.log(mergedArray); 
