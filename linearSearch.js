function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
// console.log(linearSearch([1, 2, 3, 4, 5], 1));

function binarySearch(sortedArr, val) {
  let leftPointer = 0;
  let rightPointer = sortedArr.length - 1;
  while (leftPointer <= rightPointer) {
    let middlepointer = Math.floor((leftPointer + rightPointer) / 2);
    if (sortedArr[middlepointer] === val) return middlepointer;
    if (val > sortedArr[middlepointer]) leftPointer = middlepointer + 1;
    if (val < sortedArr[middlepointer]) rightPointer = middlepointer - 1;
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 3));

function naiveSearch(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("wowomgzomgwo", "wo")); //  3
