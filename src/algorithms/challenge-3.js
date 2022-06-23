function sumMix(arr) {
  var smallest = 0;
  let inOnlyArray = arr.map((element) => {
    return parseInt(element, 10);
  });
  inOnlyArray.map((element) => {
    return (smallest += element);
  });
  return smallest;
}

module.exports = sumMix;
