/*
Most Used Char Plan

To find the character most often used in a string, we need to be able to count how many of each kind we have.
We can do this using an object that has key:value pairs.

    Define and Initialize an object
    Map character count to that object.
    Loop through the object to find the max count.
    Assign new max count value to maxCharCount and new max key to maxChar.
    Return maxChar
*/


// My Solution -- NOT COMPLETE
// TODO
function (str) {
  let charCount = {};
  for (const letter of str) {
    if (charCount.isEmpty({})); {
      charCount[]
    }
    else if () {

    }
  }
}

// Alternative Solutions

const countingChars = (str) => {
    const charCount = {}; //Step 0
    let maxCharCount = 0;
    let maxChar = '';
    for(let i = 0; i < str.length; i++) { // Step 1.
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }

    for(let key in charCount) { //Step 2
        if(charCount[key] >= maxCharCount) {
            maxCharCount = charCount[key] //Step 3
            maxChar = key;
        }
    }

    return maxChar; //Step 4
}
