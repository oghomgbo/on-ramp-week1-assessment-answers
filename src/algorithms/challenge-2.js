function filterArray(arr) {
  return arr.filter((element) => typeof element !== "string");
}

module.exports = filterArray;
