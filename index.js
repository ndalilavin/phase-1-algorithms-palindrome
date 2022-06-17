function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;

  for (let i = 0; i<len/2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
    return true;
  }
}

/* 
  Add your pseudocode here
  - Reverse the word to check 
  - Check if the reversed string is the same as the initial string 
*/

/*
  Add written explanation of your solution here
  The function checks whether the first character in the word provided matches its last character.
  It then return true if they match or false if they it doesnt.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;