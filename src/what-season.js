// const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = '';
  if (!date){
    return 'Unable to determine the time of year!'
  } if (!date.getTime()){
    throw new Error();
  }
  else if (date.getMonth() === 11 || date.getMonth() <= 1) {
    season = 'winter'
  } else if (date.getMonth() > 1 && date.getMonth() <= 4) {
    season = 'spring'
  } else if (date.getMonth() > 4 && date.getMonth() <= 7) {
    season = 'summer'
  } else {
    season = 'fall'
  }
  return season;
};
