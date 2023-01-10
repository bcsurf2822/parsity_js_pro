/* 
    While you can certainly solve the tests by using an iterative solution
    please work towards the recursive solution ;) 
*/

/**
 * Return a flattened array
 *
 * @param {array} arr [1, [2, [3, [4, 5]]]]
 * @returns {array} ex: [1,2,3,4,5]
 */
const flattenArray = (arr, result = []) => {
  // add your code here
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

// console.log(flattenArray([1, [2, [3, [4, 5]]]])); // --> [1,2,3,4,5] 

/**
 * Return a boolean based on whether a key is available in an object
 *
 * @param {object} obj
 * @param {string} key
 * @returns {boolean}
 */

const fileExplorer = (obj, key) => {
  // add your code here
  // it should return false if the key cannot be found
};

/**
 * Returns an array of arrays with all possible permutations
 *
 * @param {array} nums ex: [1,2,3]
 * @returns {array} ex: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 */
const permutate = (nums = []) => {
  // add your code here
  // returns nested array of all possible permuations

};

/**
 * Returns an array of arrays with all possible subsets
 *
 * @param {array} nums ex: [1,2,3]
 * @returns {array} ex: [[], [1], [1,2], [1,3], [2], [2,3], [1,2,3]]
 */
const subsets = (nums = []) => {
  // add your code here
  // returns nested array of all possible subsets
};

module.exports = {
  flattenArray,
  fileExplorer,
  permutate,
  subsets,
};
