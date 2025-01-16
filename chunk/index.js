// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let arr = [];
//   for (let i = 0; i < array.length; i += size) {
//     arr.push(array.slice(i, size + i));
//   }
//   return arr;
// }

function chunk(array, size) {
  let arr = [];
  for (ele of array) {
    const lastEle = arr[arr.length - 1];
    if (!lastEle || lastEle.length === size) {
      arr.push([ele]);
    } else {
      lastEle.push(ele);
    }
  }
  return arr;
}
chunk([1, 2, 3, 4], 2);
module.exports = chunk;
