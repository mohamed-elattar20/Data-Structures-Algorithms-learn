//  Big O(log(n)) BETTER SOLUTION
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middlepoint = Math.floor((min + max) / 2);
    let middleEle = arr[middlepoint];
    if (middleEle < val) {
      min = middlepoint + 1;
    } else if (middleEle > val) {
      max = middlepoint - 1;
    } else {
      return middlepoint;
    }
  }
  return -1;
}
console.log(search([1, 2, 3, 4, 5, 8, 90], 90));

// Big O(n)
function search2(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
