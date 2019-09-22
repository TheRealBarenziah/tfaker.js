module.exports = exports = function getRandomElementFromArray (array) {
  return array[Math.floor(Math.random() * array.length)];
};