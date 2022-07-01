function reverseString(str) {
  // type your code here

  let reverse = ""
  for (let i = str.length - 1; i > -1; i--) {
    reverse += str[i]
  }

  return reverse;
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("Expecting: 'ekim'");
  console.log("=>", reverseString("mike"))

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
/*
  - Initialize an empty variable
  - Decrement through the string, moving backwards each time
  - Add each character to the variable
  - Update Each Decrement
  - Return the variable reverse

*/
// And a written explanation of your solution

/*
  First, I create a result variable to store my reversed string, As I iterate backwards over my input string, I should add to the character of the index of which i'm on and keep updating my result variable till i come to end of my loop.
  for example, when I pass an input string "ba", I start my iteration at "a", while a is greater than the length of my string, i add it to my result variable, and it continues till it reaches the end of the string length

*/
