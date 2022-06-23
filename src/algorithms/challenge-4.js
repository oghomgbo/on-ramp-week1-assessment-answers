function sumTwoSmallestNums(arr) {
 var smallest = Infinity;
    var secondSmallest = Infinity;
    arr.forEach(element => {
      if (element > 0) {
        if (element < smallest && element < secondSmallest) {
          secondSmallest = smallest;
          smallest = element
        } else if (element < secondSmallest) {
          secondSmallest = element;
        }
      }
    });
    return smallest + secondSmallest;
 }
  module.exports =sumTwoSmallestNums