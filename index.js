function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    //confirm each letter is corresponding both from front and behind
    const endIndex = word.length - 1 - startIndex;
    const startletter = word[startIndex];
    const endletter = word[endIndex];
    //if letters dont match return false
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
 //if letters  match return true
  return true;
}

/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
