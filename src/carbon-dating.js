const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const k = Math.log(2) / HALF_LIFE_PERIOD;
  if (
    typeof sampleActivity !== "string" ||
    sampleActivity.trim().length === 0 ||
    arguments.length !== 1
  ) {
    return false;
  }
  const n = Number(sampleActivity);
  if (isNaN(n) || n <= 0 || n > 15) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
}

module.exports = {
  dateSample,
};
