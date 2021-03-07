// const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = 0;
  let symbol = '^^'
  for (let i = 0; i < matrix.length; i++) {
      for (let j=0; j < matrix[i].length; j++)
      if (matrix[i][j] === symbol) {
        res += 1
      }
    }
  return res;
};
