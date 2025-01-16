// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let noSwaps; // for optimization if the the array is already nearly sorted like this [8,1,2,3,4,5,6,7]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      noSwaps = true;
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
      if (noSwaps) break;
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let val = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = val;
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
// console.log(insertionSort([2, 1, 0, 79, -100]));

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const midPoint = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midPoint);
  const righthalf = arr.slice(midPoint);

  return merge(mergeSort(leftHalf), mergeSort(righthalf));
}

// function merge(left, right) {
//   let results = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       results.push(left.shift());
//     } else {
//       results.push(right.shift());
//     }
//   }
function merge(left, right) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      results.push(left[i]);
      i++;
    } else {
      results.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    results.push(left[i]);
    i++;
  }
  while (j < right.length) {
    results.push(right[j]);
    j++;
  }
  return results;
}

console.log(mergeSort([500, 2, 10, 1, 0, -100]));

// console.log(bubbleSort([100, -40, 500, -124, 0, 21, 7]));
//     [-124, -40, 0, 7, 21, 100, 500];

module.exports = { bubbleSort, selectionSort, mergeSort, merge, insertionSort };
