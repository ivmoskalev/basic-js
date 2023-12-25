const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return "";
  let resultString = "";
  let count = 1;
  let currentChar = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      resultString += count > 1 ? `${count}${currentChar}` : currentChar;
      currentChar = str[i];
      count = 1;
    }
  }
  resultString += count > 1 ? `${count}${currentChar}` : currentChar;

  return resultString;
}

module.exports = {
  encodeLine
};
