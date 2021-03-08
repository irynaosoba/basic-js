// const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members) {
    return false;
  }
  let res = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      res.push(members[i].trim().charAt(0).toUpperCase());
    }
  }
  res.sort();
  return res.join('');
}
