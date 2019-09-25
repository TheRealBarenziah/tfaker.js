module.exports = exports = function realDate () {
  var newDate = new Date();

  var numberOfDaysBack = Math.floor(Math.random() * 36159) + 1;
  // 365,2422 days in a year * 99 years = 36158,9778 (rounded to 36159)

  var generateOldDate = newDate - (1000 * 60 * 60 * 24 * numberOfDaysBack);
  // 1000ms = 1s; 60s = 1mn, 60mn = 1h, 24h = 1d. var is the number of days to rewind

  var realdate = new Date(generateOldDate);
  return realdate;
};