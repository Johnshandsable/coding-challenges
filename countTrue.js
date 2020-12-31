/*
count number of Trues given an array

Return 0 if given an empty array.
All array items are of the type bool (true or false).
*/

function countTrue(arr) {
  if (arr.length === 0) {
    console.log(arr.length);
    console.log(arr.length === 0);
    return 0
  } else {
    counter = 0;
    for (index = 0; index <= arr.length; index++) {
      if (arr[index] === true) {
        counter++; }
    }
		return counter;
  }
}
