function findFirstDuplicate(arr) {
  // type your code here
  const uniqueArr = new Set()

  for (const element of arr) {
    if (uniqueArr.has(element)) {
      return element;
    }
    uniqueArr.add(element)

  }
  return -1;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/******************************************************************
 *  Define a Set Object to store unique values
        * Iterate through the array, and 
          * Check if the Set has the value
            * If True return the value
          * If false add the value to the set object
        * If no duplicates, return -1

****************************************************************** /

// And a written explanation of your solution
/*******************************************************************
 * A Set is a data structure that contains only unique objects/values.
 * If I check if a value is in a Set before adding it, I'll know if there's
 * a duplicate. If there's a duplicate, I'll just return that value right 
 * away because that'll be the first duplicate in the input array. If we
 * exit iteration without returning anything, that means there's no duplicate, 
 * so we'll return -1
 * *******************************************************************/