/**
 *
 * @param {Array} array1 array of objects
 * @param {Array} array2 array of objects
 * @param {string} key shared key for objects in both arrays
 * @returns a merged array of objects by key
 */
function mergeArrays(array1, array2, key) {
  // TODO: update this function and improve the code quality and performance
  // the tests should pass once you're done
  const merged = [];

  array1.forEach((item) => {
    const idx = array2.findIndex((item2) => {
      return item[key] === item2[key];
    });
    if (idx !== -1) {
      merged.push({ ...item, ...array2[idx] });
    }
  });

  return merged;
}

module.exports = {
  mergeArrays,
};
