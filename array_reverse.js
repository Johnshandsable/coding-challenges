/*
Reverse an Array

Write a function to reverse an array.
Examples

reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []
*/

function reverse(arr) {
  newArr = [];
	for (let index = arr.length - 1; index >= 0; index--) {
    console.log(index, arr[index]);
    newArr.push(arr[index]);
  }
  return newArr;
}