/*
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number
you passed to the function. For example, if the input is 4 then your function should return 10
because 1 + 2 + 3 + 4 = 10.
*/

function addUp(num) {
  let sumOfNum = 0;
	 for (let index = 0; index <= num; index++) {
     sumOfNum += index;
   }
   return sumOfNum;
}


function addUp(num) {
  let sumOfNum = 0;
  let index = 0;
	 while (index <= num) {
     sumOfNum += index;
     index ++;
   }
   return sumOfNum;
}
