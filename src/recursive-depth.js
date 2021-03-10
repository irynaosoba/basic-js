// const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxArrDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])){
        maxArrDepth = Math.max(maxArrDepth, 1 + this.calculateDepth(arr[i]))
      }
    }
    return maxArrDepth;
  }
};
