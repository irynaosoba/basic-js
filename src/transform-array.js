// const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
    if (!arr) {
        throw new Error();
    }
    let discarded = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            discarded = true;
            i++;
        } else if (arr[i] === '--discard-prev') {
            if (i > 0 && !discarded) {
                res.splice(res.length - 1, 1);
            }
            discarded = false;
        } else if (arr[i] === '--double-next') {
            if (i < arr.length - 1) {
                res.push((arr[i + 1]));
            }
            discarded = false;
        } else if (arr[i] === '--double-prev') {
            if (i > 0 && !discarded) {
                res.push(arr[i - 1]);
            }
            discarded = false;
        } else {
            res.push(arr[i]);
            discarded = false;
        }
    }
    return res;
};
