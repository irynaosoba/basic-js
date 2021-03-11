// const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (!sampleActivity || typeof sampleActivity !== "string") {
        return false;
    }
    let sampleActivityNumber = parseFloat(sampleActivity);
    if (isNaN(sampleActivityNumber) || typeof sampleActivityNumber !== "number"
        || sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY) {
        return false;
    }
    let k = 0.693 / HALF_LIFE_PERIOD;
    let age = Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k;
    return Math.ceil(age);
};
