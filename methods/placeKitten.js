var url = "http://placekitten.com/";

module.exports = exports = function placeKitten(width, height) {
  if ((width === undefined) && (height === undefined)) {
    return url + "100/100";
  }
  else if ((width !== undefined) && (height === undefined)) {
    return url + width + "/" + width;
  }
  else if ((width !== undefined) && (height !== undefined)) {
    return url + width + "/" + height;
  } 
  else return url + "100/100";
};