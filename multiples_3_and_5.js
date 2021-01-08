/*

If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function multiples(n) {
  // index is 3 because the smallest divisible number is 3
  let sum = 0;
  for (let index = 3; index < n; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }
  return sum;
}

console.log(multiples(1000));
