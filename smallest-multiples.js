/*

Project Euler

Smallest multiple

Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function evenDivision(number) {
  let result = 0;
  let isFound = false;
  while (!isFound) {
    result += number;
    for (let counter = 1; result % counter === 0 && counter <= number; counter++) {
      // console.log(result, counter, result % counter === 0, counter <= number);

      // Count up to n checking each number and getting a remainder of 0. If all remainders
      // are zero, return true

      if (counter === number) {
        console.log("found it!")
        isFound = true;
      }
    }
  }
  return result;
}

console.log(evenDivision(20));
