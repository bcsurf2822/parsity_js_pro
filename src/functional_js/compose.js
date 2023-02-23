/**
 * Composes a list of functions into a single function
 * @param  {...any} fns javascript functions
 * @returns {function} a function that takes in an argument and passes it through all the functions
 */
const composeFunctions = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );

module.exports = {
  composeFunctions,
};
