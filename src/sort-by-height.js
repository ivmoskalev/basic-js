const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedValues = arr
    .filter((value) => value !== -1)
    .sort((a, b) => a - b);
  const positionsOfMinusOne = arr
    .map((value, index) => (value === -1 ? index : -1))
    .filter((index) => index !== -1);
  for (let i = 0; i < arr.length; i++) {
    if (positionsOfMinusOne.includes(i)) {
      arr[i] = -1;
    } else {
      arr[i] = sortedValues.shift();
    }
  }
  return arr;
}

module.exports = {
  sortByHeight,
};
