function filterList(arr) {
  return arr.filter((element) => typeof element !== "string");
}

module.exports = filterList;
