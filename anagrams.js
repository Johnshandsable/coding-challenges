/*
Anagrams Plan

If an anagram is just a bunch of letters jumbled around, we can see if the strings are anagrams of each other by:

    Comparing the length: if they are not same length, they are not an anagram of the other

    Sorting the string and using an equality operator to see if it’s equal.

    Input is two strings so String, String
*/


// My Solution
// text.split('').sort().join('');

function anagramSolution(firstStr, secondStr) {
  if (firstStr.length != secondStr.length) {
    return false;
  }
  else {
    return firstStr.split('').sort().join('') === secondStr.split('').sort().join('');
  }
}



// Alternative Solutions
