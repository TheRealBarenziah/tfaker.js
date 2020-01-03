var url = "http://placekitten.com/";

module.exports = exports = function placeKitten(width, height) {
  if ((typeof width === "undefined") && (typeof height === "undefined")) {
    return url + "100/100";
  }
  else if ((typeof width !== "undefined") && (typeof height === "undefined")) {
    return url + width + "/" + width;
  }
  else if ((typeof width !== "undefined") && (typeof height !== "undefined")) {
    return url + width + "/" + height;
  } 
  else {
    return url + "100/100";
  }
};